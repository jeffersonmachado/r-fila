import react, {useState, useEffect} from 'react';
import css from './patrao.css';
import Navbar from '../../navbar/index.js';
import {Link, Redirect, useParams} from 'react-router-dom';
import Modal from 'react-modal';
import Css from './jogar.css';
import configData from "../../config.json";


function Patrao(bora, id_dos_atendentes, id_atendimento){
 	
	const [atendentess, setAtendentess] = useState([]);
	const [atendente, setAtendente] = useState();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	var [email, setEmail] = useState("");
	var [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [modalIsOpenThiago, setModalIsOpenThiago] = useState(false);
	const [modal, setModal] = useState(false);

	const [atendimento, setAtendimento] = useState([]);

	
	var props3 = modalIsOpenThiago;
	var props2 = modal;

	let data = new Date();
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

	var [inicio, setInicio] = useState("");
	var [datafinal, setDatafinal] = useState("");
	var [datainicio, setDatainicio] = useState("");

	const stopButton3 = document.querySelector('#stopButton3');

	const [caio, setCaio] = useState(0);
	const [guiche, setGuiche] = useState("");


	useEffect(async () => {
		console.log("atendente",atendente);
		var id_atendentes = '2';
		var url = configData.api.URL+"/api/atendentes_fila?$filter=id_atendentes eq " + id_atendentes;
		console.log("url",url);
		var fetchResponse  = await fetch(url);
		const filas_do_atendente = await fetchResponse.json();
		console.log("filas_do_atendente",filas_do_atendente);
		var filas =[];
		filas_do_atendente.forEach(obj => {
			filas.push(obj.id_filas);
			console.log("obj",obj.id_filas);
			console.log('-------------------');
		});
		var filtro= "(";
		filas.forEach((filaAtual) => {
			filtro+="id_das_filas eq '"+filaAtual+"' or ";
		});
		filtro = filtro.slice(0, -4);
		filtro+=")";
		console.log("filtro",filtro);
		url = configData.api.URL+"/api/atendimento?$filter=status1 ne 'Finalizado' and "+filtro;
		console.log("filtrossssssssssssssss",filtro);
			fetch(url)
			.then(res => res.json())
			.then(
			(result) => {
				setAtendimento(result);
				console.log(result);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
			)
		},[caio]);

function  ValidarUsuario(){
	var url=configData.api.URL+"/api/atendentes?$filter=atendente eq '"+email+"' and senha eq '"+password+"'";
		console.log(url);
	fetch(url)
		.then(res => res.json())
    	.then(
      	(result) => {
			  console.log("result",result);
			  if (Object.keys(result).length > 0 && (result[0].senha == password)){
				  setMsg("certo")
				  setModalIsOpenThiago(true)
				  setGuiche(guiche)
				  setAtendentess(result)
				//console.log("acesso permitido");
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



function iniciar(id_dos_atendentes){


	const lola = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			status2: "Ocupado"

		})

	}

	fetch(configData.api.URL+"/api/atendentes/"+ id_dos_atendentes, lola)
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

function finalizar(id_dos_atendentes){

	const meg = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			status2: 'Livre'

		})

	}

	fetch(configData.api.URL+"/api/atendentes/" + id_dos_atendentes, meg)
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

function pausar(id_dos_atendentes){
	console.log("id do atendentes" + id_dos_atendentes);
	const bomba = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			status2: 'Pausa'

		})

	}

	fetch(configData.api.URL+"/api/atendentes/" + id_dos_atendentes, bomba)
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

 
function ateInicio(id, atendente){
	console.log("id do atendimento" + id);

	const mm = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			atendente: atendente,
			datainicio: data.getDate() + "/" + meses[(data.getMonth())]  + "/" + data.getFullYear() + "  " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
		})

	}

	fetch(configData.api.URL+"/api/atendimento/" + id, mm )

		.then(res => res.json())
		.then(
			async (result) => {
				console.log(result);
				setCaio(result);
				var url = configData.api.URL+"/api/atendimento?$filter=id eq " + id;
				console.log("url",url);
				var fetchResponse  = await fetch(url);
				const dadosFila = await fetchResponse.json();
				console.log("url",url,"dadosFila",dadosFila);
				const dadosTela = {

					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"count":"count",
						"senha":"senha:"+dadosFila[0].contador,
						"guiche":"Guichê: "+dadosFila[0].Guichê,
						"nome_fila":dadosFila[0].nome_fila,
						"senha1":"senha1",
						"guiche1":"Guichê: e1",
						"senha2":"senha2",
						"guiche2":"Guichê: f23"
					})
			
				}
				console.log(url,dadosTela);
				fetch(configData.api.URL+"/avisa", dadosTela )

				.then(res => res.json())
				.then(
					(resultTela) => {
						console.log(resultTela);				
					},
					(errorTela) => {
						setIsLoaded(true);
						setError(error);
					}
				)
				
				// var contador = ultimo[0].contador;
				// var nome_da_fila = ultimo[0].nome_da_fila;
		
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		)
}


function ateFinal(id, atendente){
	console.log("id do atendimento" + id);

	const lis = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			atendente: atendente,
			datafinal: data.getDate() + "/" + meses[(data.getMonth())]  + "/" + data.getFullYear() + "  " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()

		})
	}

	fetch(configData.api.URL+"/api/atendimento/ " + id, lis)
		.then(res => res.json())
		.then(
		(result) => {
			console.log(result);
			setCaio(result);
		},
		(error) => {
			setIsLoaded(true);
			setError(error);
		}
		)

}


function emAtendimento(id){


	const mc = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			status1: 'Em Atendimento'

		})

	}

	fetch(configData.api.URL+"/api/atendimento/" + id, mc)
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

function Guiche(id){


	const mc = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			Guichê: guiche

		})

	}

	fetch(configData.api.URL+"/api/atendimento/" + id, mc)
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

function abreModal(){
	console.log("modal");
	setCaio(Date.now()); 
	setModal(true);
}

function atendido(id){


	const mcs = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			status1: 'Finalizado'

		})

	}

	fetch(configData.api.URL+"/api/atendimento/" + id, mcs)
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

function avisa(id){
	console.log("id do atendimento" + id);

	const mm = {

		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({

			alerta: 'avisa'

		})

	}

	fetch(configData.api.URL+"/api/atendimento/" + id, mm )

		.then(res => res.json())
		.then(
			async (result) => {
				console.log(result);
				setCaio(result);
				var url = configData.api.URL+"/api/atendimento?$filter=id eq " + id;
				console.log("url",url);
				var fetchResponse  = await fetch(url);
				const dadosFila = await fetchResponse.json();
				console.log("url",url,"dadosFila",dadosFila);
				const dadosTela = {

					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"count":"count",
						"senha":"senha:"+dadosFila[0].contador,
						"guiche":"Guichê: "+dadosFila[0].Guichê,
						"senha1":"senha1",
						"guiche1":"Guichê: e1",
						"senha2":"senha2",
						"guiche2":"Guichê: f23"
					})
			
				}
				console.log(url,dadosTela);
				fetch(configData.api.URL+"/avisa", dadosTela )

				.then(res => res.json())
				.then(
					(resultTela) => {
						console.log(resultTela);				
					},
					(errorTela) => {
						setIsLoaded(true);
						setError(error);
					}
				)
		
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
		<div className="apolos">
			<div className="container-fluid">
				<div className="row">		
					<div className="col-12 col-lg-12 d-flex pt-2 pt-lg-2">
						
					<form className="form-signin mx-auto pt-5 pb-5">
						<h1 className="h1 text-center pt-5 pb-3">Login atendentes</h1>
						<label className="pt-3">Nome Atendente</label>
						<input onChange={(e) => setEmail(e.target.value) } type="email"  className="form-control border border-danger" placeholder="Atendente" />
						<label className="pt-3">Senha Atendente</label>
						<input onChange={(e) => setPassword(e.target.value) } type="password"  className="form-control border border-danger" placeholder="Senha" />
						<label className="pt-3">Guichê</label>
						<input onChange={(e) => setGuiche(e.target.value) } type="number"  className="form-control border border-danger" placeholder="Guichê" />
											
						<button onClick={() => ValidarUsuario() } className="btn btn-lg btn btn-success btn-block mt-4" type="button">Logar</button>
						
						<Modal className="mt-5" isOpen={!!props3} onRequestClose={props3.clearSelectedOption} ariaHideApp={false} contentLabel="props3">
						
							<button onClick={() => abreModal() }  className='form-control btn btn-success mb-5 mt-2'>Próximo Atendimento</button>
						
							{atendentess.map(gigi =>
								<button className='btn btn-warning form-control mb-3' onClick={() => pausar(gigi.id_dos_atendentes) } type='submit'>Pausar</button>
							)}
		
							<Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
							<div className='tutuu'>
							<h2 className='text-center'>Lista de Espera</h2>
							<div className='table-responsive'>
								<table className='table'>
									<thead>
										<tr className='text-center'>
										{ Object.keys(configData.atendimento_colunas).map((key) => (
											<th scope="col">{configData.atendimento_colunas[key]}</th>
										))}
										</tr>
									</thead>
									<tbody>
										{atendimento.map(item => <tr className='text-center'>
										{ Object.keys(configData.atendimento_colunas).map((key) => (
											<td>{item[key]}</td>
										))}
										{atendentess.map(vamo => 
											<>
											<td>
												<button disabled={item.datainicio != null} className='btn btn-primary boa' onClick={() => {Guiche(item.id); ateInicio(item.id, vamo.atendente); iniciar(vamo.id_dos_atendentes); emAtendimento(item.id) } } type='submit'>Iniciar</button>											
											</td>
											<td>
												<button className='btn btn-warning' onClick={() => {avisa(item.id)}}>Alerta</button>
											</td>
											<td><button disabled={item.datainicio == null} className='btn btn-danger' onClick={() => {ateFinal(item.id, vamo.atendente); finalizar(vamo.id_dos_atendentes); atendido(item.id); setModal(false) } } type='submit'>Finalizar</button></td>	
											</>
											)}
										</tr>) }
									</tbody> 
								</table>
							</div>

							<button className='btn btn-danger form-control mb-1' onClick={() => setModal(false) }>Voltar</button>	
							</div>					
							</Modal>
							
						<button className='btn btn-danger form-control mb-1' onClick={() => setModalIsOpenThiago(false) }>Sair</button>
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
		);
}

export default Patrao;