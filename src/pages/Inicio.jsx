import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Inicio = () => {
  return (
    <div className="App-body">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
      <ItemListContainer />
        <Main />
      </main>
      <footer>
       
      </footer>
    </div>
  )
}

export default Inicio