import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./tabela";

function Button(props)
{
  return(
    <a href={props.destino} className="btn btn-primary">
      {props.children}
      </a>
  );
}
export default function App() {
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <hr/>
      <form className="d-flex justify-content-center">
        <input className="form text-center" type="text" name="" value="" placeholder="Email"/>
        <input className="form text-center" type="password" name="" value="" placeholder="senha"/>
        <button className="form text-center" type=""> Entrar </button>

        <Button destino="http://google.com" className="form text-center" type="">google</Button>{/* botao com funçao de ir para o link do google */}
        <Button className="form text-center" type=""> Teste </Button>

        <button className="form text-center" type=""> Teste </button>  

      </form>
        <Tabela></Tabela>     
    </div>
  );
}