import "./style.css";
import ModalDeleteIceCream from "../Modals/DeleteIceCream";
import ModalEditIceCream from "../Modals/EditIceCream";
import { useState } from "react";

const Card = ({ iceCream, getIceCream }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };
  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  return (
    <>
      <div className="card-Paletas">
        <h3>{iceCream.sabor}</h3>
        <p>{`R$${iceCream.preco.toFixed(2)}`}</p>
        <p className="description">{iceCream.descricao}</p>
        <img src={iceCream.foto} alt={`Paleta sabor ${iceCream.sabor}`} />
        <div className="buttons">
          <button title="Deseja editar a Paleta?" onClick={handleShowEditModal}>
            Editar
          </button>
          <button
            title="Deseja apagar a Paleta?"
            onClick={handleShowRemoveModal}
          >
            Apagar
          </button>
        </div>
      </div>
      {showRemoveModal && (
        <ModalDeleteIceCream
          closeModal={handleShowRemoveModal}
          iceCream={iceCream}
          getIceCream={getIceCream}
        />
      )}
      {showEditModal && (
        <ModalEditIceCream
          closeModal={handleShowEditModal}
          getIceCream={getIceCream}
          iceCream={iceCream}
        />
      )}
    </>
  );
};

export default Card;
