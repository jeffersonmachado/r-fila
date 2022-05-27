import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import Css from './index.css';


function Ate({atendentes, filas, id_atendentes, id_filas, id}){

		const [msg, setMsg] = useState("");
		const [msg2, setMsg2] = useState("");

		let result = [];

		const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);

  	const [modalIsOpen, setModalIsOpen] = useState(false);

  	var [atendentes, setAtendentes] = useState(atendentes);
  	var [filas, setFila] = useState(filas);
  	var [id_atendentes, setId_atendentes] = useState(id_atendentes);
  	var [id_filas, setId_filas] = useState(id_filas);


function deletar(){

		const apa = {

			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({

				atendentes: atendentes,
				filas: filas,
				id_atendentes: id_atendentes,
				id_filas: id_filas,
				id: id				
			})
		}

		fetch(configData.API_URL+"/api/atendentes_fila/" + id, apa)
		.then(resultado => {
    		setMsg('correto')
    	}).catch(erro => {
    		setMsg('erro')
    	})
      	.then(res => res.json())
      	.then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
    )
}

function Editar(){

	const mano = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			atendentes: atendentes,
			filas: filas,
			id_atendentes: id_atendentes,
			id_filas: id_filas
		})

	}

	fetch(configData.API_URL+"/api/atendentes_fila/" + id, mano)
		.then(resultado => {
    	setMsg2('correto');
    }).catch(erro => {
    	setMsg2('erro')
    })
     .then(res => res.json())
     .then(
     (result) => {
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
     )

}


	return(
		<>
			<table className="table">
			  <tbody>
			    <tr>
			      <td>{id}</td>
			      <td>{atendentes}</td>
			      <td>{filas}</td>
			      <td>{id_atendentes}</td>
			      <td>{id_filas}</td>
			      <td>
			      
			      		<button className="btn btn-outline-light" onClick={() => setModalIsOpen(true)}>Editar</button>
      						<Modal className="velha3 mx-auto mt-5" isOpen={modalIsOpen}>
      								<div className="d-flex">
      									<form className="form-signin mx-auto">
													<h1 className="font-weight-normal text-center pt-3">Editar Dados</h1>
													<label className="pt-4">Atendente: </label>
													<input onChange={(e) => setAtendentes(e.target.value) } className="form-control border border-secondary" placeholder="Atendente" type="text" />
													<label className="pt-1">Fila: </label>
													<input onChange={(e) => setFila(e.target.value) } className="form-control border border-secondary" placeholder="Fila" type="text" />
													<label className="pt-1">ID Atendente: </label>
													<input onChange={(e) => setId_atendentes(e.target.value) } className="form-control border border-secondary" placeholder="ID Atendente" type="number" />
													<label className="pt-1">ID Fila: </label>
													<input onChange={(e) => setId_filas(e.target.value) } className="form-control border border-secondary" placeholder="ID Fila" type="number" />
													<button onClick={Editar} title="Enviar Registros" className="form-control mt-4 btn btn-outline-secondary" type="button">Enviar</button>

													<div className="mt-2 mb-3 text-center">
													 	{msg2 === 'correto' && <span><strong>WoW </strong>Registro Atualizado com Secesso &#128515;</span>}
													 	{msg2 === 'erro' && <span><strong>Ops </strong>Algo Deu Errado &#128545;</span>}
													</div>
												</form>
																		</div>	
      										<button className="btn btn-danger form-control text-center mb-5" onClick={() => setModalIsOpen(false)}>Voltar</button>
      									</Modal>

			      </td>
			      <td><button onClick={deletar} type="button" className="btn btn-outline-danger">Deletar</button></td>
			    </tr>
			  </tbody>
			</table>
			<div>
				{msg === 'correto' && <span><strong>Boa </strong>Registro Apagado com Secesso</span>}
				{msg === 'erro' && <span><strong>Ops </strong>Erro Inesperado</span>}
			</div>
	</>

		);
}

export default Ate;