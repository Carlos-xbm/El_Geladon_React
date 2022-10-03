import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

function App() {
  const [iceCream, setIceCream] = useState([]);

  const getIceCream = async () => {
    const response = await fetch(`https://apielgeladon.herokuapp.com/paletas/listar-todas/`);

    const iceCreamList = await response.json();

    console.log("fez requisição");
    setIceCream(iceCreamList);
  };

  useEffect(() => {
    getIceCream();
  }, []);

  return (
    <>
      <Toaster />
      <Header getIceCream={getIceCream} />
      <Main iceCream={iceCream} getIceCream={getIceCream} />
      <Footer />
    </>
  );
}

export default App;
