import { useEffect, useMemo, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./TradeInCalculator.css";

type IphoneModel = {
  id: string;
  name: string;
  evaluation: number;
  sale: number;
  order?: number | null;
};

const firebaseConfig = {
  apiKey: "AIzaSyBMwDHpc0uxxXsd0YRqINucr0zgj2x3vdY",
  authDomain: "maca-na-mao-iphones-caf46.firebaseapp.com",
  projectId: "maca-na-mao-iphones-caf46",
  storageBucket: "maca-na-mao-iphones-caf46.firebasestorage.app",
  messagingSenderId: "482476040444",
  appId: "1:482476040444:web:2ed761b5206288902b3779",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const COLLECTION_NAME = "iphone_models";
const ADMIN_EMAIL = "bielximas@gmail.com";
const WHATSAPP_NUMBER = "5522997707094";

function money(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function sortModels(models: IphoneModel[]) {
  return [...models].sort(
    (a, b) =>
      (a.order ?? 999999) - (b.order ?? 999999) ||
      a.name.localeCompare(b.name),
  );
}

export default function TradeInCalculator() {
  const [models, setModels] = useState<IphoneModel[]>([]);
  const [haveId, setHaveId] = useState("");
  const [wantId, setWantId] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [status, setStatus] = useState("Carregando modelos...");
  const [adminStatus, setAdminStatus] = useState("");
  const [name, setName] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [sale, setSale] = useState("");

  useEffect(() => {
    const unsubscribeModels = onSnapshot(
      query(collection(db, COLLECTION_NAME)),
      (snapshot) => {
        const nextModels = snapshot.docs.map((item) => {
          const data = item.data();

          return {
            id: item.id,
            name: String(data.name ?? ""),
            evaluation: Number(data.evaluation ?? 0),
            sale: Number(data.sale ?? 0),
            order: data.order == null ? null : Number(data.order),
          };
        });

        setModels(nextModels);
        setStatus(
          nextModels.length
            ? "Selecione os dois modelos para ver o cálculo."
            : "Nenhum modelo cadastrado ainda.",
        );
      },
      (error) => {
        setStatus(`Erro ao carregar modelos: ${error.message}`);
      },
    );

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUserEmail(user?.email ?? "");
    });

    return () => {
      unsubscribeModels();
      unsubscribeAuth();
    };
  }, []);

  const sortedModels = useMemo(() => sortModels(models), [models]);
  const have = models.find((model) => model.id === haveId);
  const want = models.find((model) => model.id === wantId);

  const discount = have?.evaluation ?? 0;
  const price = want?.sale ?? 0;
  const difference = price - discount;
  const differenceValue = have && want ? Math.abs(difference) : null;

  const differenceTitle =
    difference > 0
      ? "Você precisa adicionar"
      : difference < 0
        ? "Você economiza"
        : "Fica elas por elas";

  const isAdmin = userEmail.toLowerCase() === ADMIN_EMAIL;

  function sendWhatsApp() {
    if (!have || !want) {
      window.alert("Selecione os dois modelos antes de enviar.");
      return;
    }

    const result =
      difference > 0
        ? `Preciso adicionar: ${money(difference)}`
        : difference < 0
          ? `Eu economizo: ${money(Math.abs(difference))}`
          : "Fica elas por elas: R$ 0,00";

    const message = [
      "Olá! Fiz a simulação no site da Maçã na Mão.",
      "",
      `iPhone que eu TENHO: ${have.name}`,
      `Meu desconto: ${money(discount)}`,
      "",
      `iPhone que eu QUERO: ${want.name}`,
      `Preço: ${money(price)}`,
      "",
      result,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function login() {
    try {
      await signInWithPopup(auth, provider);
      setAdminStatus("Login realizado.");
    } catch (error) {
      setAdminStatus(
        `Erro no login: ${
          error instanceof Error ? error.message : "erro desconhecido"
        }`,
      );
    }
  }

  async function logout() {
    await signOut(auth);
    setAdminStatus("Você saiu do painel.");
  }

  async function addModel() {
    if (!isAdmin) {
      setAdminStatus("Faça login com o e-mail autorizado.");
      return;
    }

    const numericEvaluation = Number(evaluation);
    const numericSale = Number(sale);

    if (
      !name.trim() ||
      !Number.isFinite(numericEvaluation) ||
      !Number.isFinite(numericSale)
    ) {
      setAdminStatus("Preencha nome, avaliação e preço corretamente.");
      return;
    }

    await addDoc(collection(db, COLLECTION_NAME), {
      name: name.trim(),
      evaluation: numericEvaluation,
      sale: numericSale,
      order: models.length,
    });

    setName("");
    setEvaluation("");
    setSale("");
    setAdminStatus("Modelo adicionado.");
  }

  async function saveModel(
    model: IphoneModel,
    row: HTMLTableRowElement,
  ) {
    if (!isAdmin) return;

    const nameInput = row.querySelector<HTMLInputElement>(".model-name");
    const evaluationInput =
      row.querySelector<HTMLInputElement>(".model-evaluation");
    const saleInput = row.querySelector<HTMLInputElement>(".model-sale");

    if (!nameInput || !evaluationInput || !saleInput) return;

    await updateDoc(doc(db, COLLECTION_NAME, model.id), {
      name: nameInput.value.trim(),
      evaluation: Number(evaluationInput.value),
      sale: Number(saleInput.value),
    });

    setAdminStatus("Modelo salvo.");
  }

  async function moveModel(model: IphoneModel, direction: -1 | 1) {
    if (!isAdmin) return;

    const index = sortedModels.findIndex((item) => item.id === model.id);
    const other = sortedModels[index + direction];

    if (!other) return;

    const batch = writeBatch(db);

    batch.update(doc(db, COLLECTION_NAME, model.id), {
      order: other.order ?? index + direction,
    });

    batch.update(doc(db, COLLECTION_NAME, other.id), {
      order: model.order ?? index,
    });

    await batch.commit();
    setAdminStatus("Ordem atualizada.");
  }

  async function deleteModel(model: IphoneModel) {
    if (!isAdmin) return;
    if (!window.confirm(`Excluir ${model.name}?`)) return;

    await deleteDoc(doc(db, COLLECTION_NAME, model.id));
    setAdminStatus("Modelo excluído.");
  }

  return (
    <section className="trade-card">
      <div className="trade-header">
        <div>
          <img
            className="trade-icon"
            src={`${import.meta.env.BASE_URL}images/18-.png`}
            alt=""
          />
          <h2>Avalie seu iPhone</h2>
          <p>Descubra quanto vale seu aparelho para troca.</p>
        </div>

        <button
          className="trade-secondary-button trade-admin-toggle"
          onClick={() => setAdminOpen((current) => !current)}
          aria-label={adminOpen ? "Voltar para a calculadora" : "Abrir painel administrativo"}
          title={adminOpen ? "Voltar para a calculadora" : "Painel administrativo"}
        >
          PA
        </button>
      </div>

      {!adminOpen ? (
        <>
          <div className="trade-hint">
            <strong>Como funciona:</strong> selecione o modelo que você tem e
            depois o modelo que você quer.
          </div>

          <div className="trade-grid">
            <label>
              iPhone que você TEM
              <select
                value={haveId}
                onChange={(event) => setHaveId(event.target.value)}
              >
                <option value="">Selecione o modelo</option>
                {sortedModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              iPhone que você QUER
              <select
                value={wantId}
                onChange={(event) => setWantId(event.target.value)}
              >
                <option value="">Selecione o modelo</option>
                {sortedModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="trade-result">
            <div className="trade-kpis">
              <div>
                <small>Seu desconto vai ser de</small>
                <strong>{have ? money(discount) : "—"}</strong>
              </div>

              <div>
                <small>Preço do iPhone que você quer</small>
                <strong>{want ? money(price) : "—"}</strong>
              </div>

              <div>
                <small>{differenceTitle}</small>
                <strong>
                  {differenceValue == null ? "—" : money(differenceValue)}
                </strong>
              </div>
            </div>

            {have && want && (
              <p className="trade-calculation">
                Troca: {want.name} por {have.name}.
              </p>
            )}

            <p className="trade-status">{status}</p>

            <p className="trade-conditions">
              Condições para cotação: aparelho sem bloqueios, sem mau
              funcionamento, sem marcas fortes e bateria acima de 85%.
            </p>

            <button className="trade-primary-button" onClick={sendWhatsApp}>
              Enviar no WhatsApp
            </button>
          </div>
        </>
      ) : (
        <div className="trade-admin">
          <div className="trade-admin-top">
            <div>
              <h3>Painel administrativo</h3>
              <p>{userEmail || "Não logado"}</p>
            </div>

            {userEmail ? (
              <button className="trade-secondary-button" onClick={logout}>
                Sair
              </button>
            ) : (
              <button className="trade-primary-button" onClick={login}>
                Entrar com Google
              </button>
            )}
          </div>

          {!isAdmin ? (
            <p className="trade-status">
              Faça login com o e-mail autorizado para editar os modelos.
            </p>
          ) : (
            <>
              <div className="trade-admin-form">
                <input
                  placeholder="Nome do modelo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Avaliação"
                  value={evaluation}
                  onChange={(event) => setEvaluation(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Preço de venda"
                  value={sale}
                  onChange={(event) => setSale(event.target.value)}
                />
                <button className="trade-primary-button" onClick={addModel}>
                  Adicionar
                </button>
              </div>

              <div className="trade-admin-table-wrapper">
                <table className="trade-admin-table">
                  <thead>
                    <tr>
                      <th>Modelo</th>
                      <th>Avaliação</th>
                      <th>Venda</th>
                      <th>Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sortedModels.map((model) => (
                      <tr key={model.id}>
                        <td>
                          <input
                            className="model-name"
                            defaultValue={model.name}
                          />
                        </td>
                        <td>
                          <input
                            className="model-evaluation"
                            type="number"
                            defaultValue={model.evaluation}
                          />
                        </td>
                        <td>
                          <input
                            className="model-sale"
                            type="number"
                            defaultValue={model.sale}
                          />
                        </td>
                        <td>
                          <div className="trade-action-buttons">
                            <button
                              onClick={(event) => {
                                const row =
                                  event.currentTarget.closest("tr");

                                if (row) {
                                  void saveModel(model, row);
                                }
                              }}
                            >
                              Salvar
                            </button>
                            <button onClick={() => void moveModel(model, -1)}>
                              ↑
                            </button>
                            <button onClick={() => void moveModel(model, 1)}>
                              ↓
                            </button>
                            <button onClick={() => void deleteModel(model)}>
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <p className="trade-status">{adminStatus}</p>
        </div>
      )}
    </section>
  );
}