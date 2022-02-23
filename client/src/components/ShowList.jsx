import React, { useState } from "react";
import Axios from "axios";
import "../assets/css/ShowList.css";

const ShowList = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const getSup = () => {
    Axios.get("http://localhost:3001/fornecedores", {}).then((response) => {
      console.log(response.data);
      setFornecedores(response.data);
    });
  };
  return (
    <div className="show_fornecedores">
      <div className="button__fornecedores d-flex justify-content-center">
        <button
          onClick={getSup}
          style={{
            transition: "all 0.3s ease",
            backgroundColor: "orange",
            color: "#fff",
            width: "30%",
            margin: "20px auto",
            border: "none",
            borderRadius: "5px",
            height: "50px",
            fontWeight: "bold",
          }}
        >
          Mostrar fornecedores
        </button>
      </div>

      {fornecedores.map((value) => {
        return (
          <div className="container-fluid">
            <div className="show__suppliers">
              <div className="sup_name">
                <span className="title__suppliers">Forncedor</span>
                <p>{value.nome}</p>
              </div>

              <div>
                <span>Razão Social</span>
                <p>{value.razao}</p>
              </div>

              <div>
                <span>CNPJ</span>
                <p>{value.cnpj}</p>
              </div>

              <div>
                <span>Segmento</span>
                <p>{value.segmento}</p>
              </div>

              <div>
                <span>Endereço</span>
                <p>{value.endereco}</p>
              </div>
              <div>
                <span>Telefone</span>
                <p>{value.telefone}</p>
              </div>

              <div>
                <span>Email</span>
                <p>{value.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowList;
