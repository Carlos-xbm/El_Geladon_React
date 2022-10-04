import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalEditIceCream = ({ closeModal, iceCream, getIceCream }) => {
    const [sabor, setSabor] = useState(iceCream.sabor);
    const [preco, setPreco] = useState(iceCream.preco);
    const [descricao, setDescricao] = useState(iceCream.descricao);
    const [foto, setFoto] = useState(iceCream.foto);

    const hedleEditIceCream = async () => {
        const editedIceCrem = {
            sabor,
            preco,
            descricao,
            foto,
        };

        const response = await fetch(
            `https://api-elgeladon-xbm.herokuapp.com/update-paleta/${iceCream._id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(editedIceCrem),
            }
        );

        if (response.status !== 200) {
            return toast.error("Falha ao atualizar!");
        }
        closeModal();
        getIceCream();
        toast.success("Atualização feita com sucesso!");
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

                        <button className="botao-modals" onClick={hedleEditIceCream}>
                            Atualizar
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ModalEditIceCream;
