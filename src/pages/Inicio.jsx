import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes } from "react-router-dom";

const Inicio = () => {
  return (
    <BrowserRouter>
    <div className="App-body">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>

      <main className="App-main">
      <ItemListContainer />
        <Main />
      </main>
      </Routes>
      
      <footer>
       
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default Inicio