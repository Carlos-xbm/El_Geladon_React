import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ModalNewIceCream = ({ closeModal, getIceCream }) => {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleCreateIceCream = async () => {
    const newIceCream = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await fetch("http://localhost:3001/paletas/create-paleta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newIceCream),
    });

    if (response.status !== 201) {
      return toast.error("Erro ao adcionar nova paleta!");
    }

    setSabor("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    getIceCream();
    toast.success("Paleta adicionada com sucesso!!!");
  };

  return (
    <div className="box-modal">
      <div className="modal-container">
        <form>
          <fieldset>
            <button className="botao-box-fechar" onClick={closeModal}>
              Fechar
            </button>
            <p>Preencha o formulário</p>

            <input
              placeholder="Sabor"
              value={sabor}
              onChange={(event) => setSabor(event.target.value)}
              name="sabor"
              required
            />

            <input
              placeholder="Preço"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
              type="number"
              name="preco"
              required
            />

            <input
              placeholder="Descrição"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              name="descricao"
              required
            />

            <input
              placeholder="Foto"
              value={foto}
              onChange={(event) => setFoto(event.target.value)}
              name="foto"
              required
            />

            <button className="botao-modals" onClick={handleCreateIceCream}>
              Cadastrar
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalNewIceCream;

// {
//   /* <div>
//                     <h3> Adcionar ao cardápio</h3>
//                     <button> X </button>
//                 </div>
//                 <input></input>
//                 <input></input> */
// }
