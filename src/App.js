import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajouterstagaire from "./stagaire/ajouterstagaire";
import Header from "./header/header";
import Afficher from "./stagaire/afficher";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Afficher/>}/>
      <Route path="/ajouter" element={<Ajouterstagaire/>}/>
      <Route path="/detailes/:id" element={<h1>detailes</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
