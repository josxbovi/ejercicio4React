import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./css/App.css";
import Formulario from "./components/Formulario";

function App() {
  return(
    <>
    <Container className="mt-4 paginaPrincipal">
      <h1 className="text-center display-3 text-light">Bienvenido</h1>
      <h3 className="text-center display-5 text-light mb-3">Ingresa tus Tareas</h3>
      <Formulario/>
      </Container>
    </>
  )
}

export default App