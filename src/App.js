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


let submit = (event)=>{
  event.preventDefault();
  console.log(event.target[0].value);
  document.getElementById('valor').textContent = event.target[0].value;
}


let titulo = 'login';
export default function App() {
 
  return (
    <div>
      <h1 className="text-center">{titulo}</h1>
      <hr/>
      <form onSubmit={submit} className="d-flex justify-content-center">
        <input className="form text-center" type="text" placeholder="Email"/>
        <input className="form text-center" type="password" placeholder="senha"/>
        <button className="form text-center" type=""> submit </button>

        <Button destino="http://google.com" className="form text-center" type="">google</Button>
        {/* botao com funçao de ir para o link do google */}
        <Button className="form text-center" type=""> Teste </Button>

        <button className="form text-center" type=""> Teste </button>  
      </form>
        <Tabela></Tabela>     
        <h1 id="valor"></h1>
    </div>
  );
}