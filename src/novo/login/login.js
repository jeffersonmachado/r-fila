import react, {useState} from 'react';
import css from './main.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../navbar/index.js';
import Modal from 'react-modal';
import configData from "../../config.json";


function Logar(){

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	var [email, setEmail] = useState("");
	var [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	const [modal, setModal] = useState(false);
	var props = modal;


	function  ValidarUsuario(){
		var url=configData.api.URL+"/api/adm?$filter=adms eq '"+email+"' and senha eq '"+password+"'";
			console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(
			  (result) => {
				  console.log("result",result);
				  if (Object.keys(result).length > 0 && (result[0].senha == password)){
					  setModal(true)
					  setMsg("certo")
					  console.log("acesso permitido");
				} else {
					  console.log("usuario/senha nao encontradas");
					  setMsg("erro")
	
					}
			  },
			  (error) => {
				setIsLoaded(true);
				setError(error);
			  }
		   )
	
	}


	return(

	<>
	<Navbar/>
	<div className="section1">
		<div className="container pt-5 pb-5">
			<div className="row pt-5 pb-5">
				<div className="col-12 d-flex pt-3 pb-2">

					<form className="form-signin mx-auto">
   
      					<h1 className="text-center pt-5 pb-3">Portal do ADM</h1>
      					<label>Nome ADM</label>
      					<input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control border border-danger" placeholder="Seu Nome" />
      					<label className="mt-2">Senha</label>
      					<input onChange={(e) => setPassword(e.target.value) } type="password" className="form-control border border-danger" placeholder="Sua Senha" />

      					<button onClick={ValidarUsuario}  className="btn btn-lg btn btn-success btn-block mt-4" type="button">Logar</button>
						<Modal isOpen={!!props} onRequestClose={props.clearSelectedOption} ariaHideApp={false} contentLabel="props">
							<Redirect to="listafilas" />
						</Modal>  

						<div className='mt-3 text-center'>
							{msg == "erro" && <span><strong>Ops </strong>Nome ou Senha Incorretos</span>}
						</div> 
      
   	 				</form>
				</div>
			</div>
		</div>
	</div>		

	</>

		)
}

export default Logar;