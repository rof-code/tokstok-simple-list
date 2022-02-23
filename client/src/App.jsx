import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import ShowList from "./components/ShowList";

function App() {
  const [nome, setNome] = useState("");
  const [razao, setRazao] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [segmento, setSegmento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const addSup = () => {
    Axios.post("http://localhost:3001/create", {
      nome: nome,
      razao: razao,
      cnpj: cnpj,
      segmento: segmento,
      endereco: endereco,
      telefone: telefone,
      email: email,
    }).then(() => {
      setFornecedores([
        ...fornecedores,
        {
          nome: nome,
          razao: razao,
          cnpj: cnpj,
          segmento: segmento,
          endereco: endereco,
          telefone: telefone,
          email: email,
        },
      ]);
    });
  };

  //Button functions
  function buttonHover(e) {
    e.target.style.opacity = "0.95";
    e.target.style.transform = "scale(1.070)";
    e.target.style.boxShador = "2px 2px 2px 2px";
  }
  function buttonMouseLeve(e) {
    e.target.style.opacity = "1";
    e.target.style.transform = "unset";
    e.target.style.boxShadow = "unset";
  }
  //Button functions
  return (
    <div className="App">
      <Header />
      <form className="register__form">
        <h1 className="text-center">Cadastro de Fornecedores</h1>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome do fornecedor"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />

        <label>Razão Social</label>
        <input
          type="text"
          name="razao"
          placeholder="Razão Social"
          onChange={(event) => {
            setRazao(event.target.value);
          }}
        />

        <label>CNPJ</label>
        <input
          type="text"
          name="cnpj"
          placeholder="CNPJ da empresa"
          onChange={(event) => {
            setCnpj(event.target.value);
          }}
        />

        <label>Segmento</label>
        <input
          type="text"
          name="segmento"
          placeholder="Segmento"
          onChange={(event) => {
            setSegmento(event.target.value);
          }}
        />

        <label>Endereço</label>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
        />

        <label>Telefone de contato</label>
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone de contato"
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
        />

        <label>E-mail de contato</label>
        <input
          type="email"
          name="email"
          placeholder="E-mail de contato"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button
          onMouseOver={buttonHover}
          onMouseLeave={buttonMouseLeve}
          onClick={addSup}
          style={{
            transition: "all 0.3s ease",
            backgroundColor: "#009845",
            color: "#fff",
            width: "50%",
            margin: "40px auto",
            border: "none",
            borderRadius: "5px",
            height: "50px",
            fontWeight: "bold",
          }}
        >
          Cadastrar Fornecedor
        </button>
      </form>
      <ShowList />
    </div>
  );
}

export default App;
