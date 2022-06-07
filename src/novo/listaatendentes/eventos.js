import React, {useState, useEffect} from 'react';
import Navbar from '../../navbar/boas.js';
import {Link} from 'react-router-dom';
import Css from './eventos.css';
import Modal from 'react-modal';
import MostraModal from './mostramodal';
import configData from "../../config.json";

function Logar(){

	const [botao, setBotao] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let result = [];

  const [modal, setModal] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalIsOpenThiago, setModalIsOpenThiago] = useState(false);
	const [modalIsOpenDeletar, setModalIsOpenDeletar] = useState(false);
  var props = modalIsOpenDeletar;
  var props2 = modalIsOpen;
  var props3 = modalIsOpenThiago;
  var props4 = modal;

  var [atendenteModal, setAtendenteModal] = useState([]);
  var [atendente, setAtendente] = useState(atendente);
  var [senha, setSenha] = useState(senha);

  const [id_dos_atendentes, setId_dos_atendentes] = useState();
  const [deletar, setDeletar] = useState("");


	useEffect( async () => {

    fetch(configData.api.URL+"/api/atendentes")
    .then(res => res.json())
    .then(
      (result) => {
        setBotao(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  
	},[deletar])


function mandar(id_dos_atendentes, id_fila){
		console.log("mandar",id_dos_atendentes,id_fila);
				const opa = {
		
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({

						id_atendentes: id_dos_atendentes,
						id_fila: id_fila

					})
				}
		
				fetch(configData.api.URL+"/api/atendentes_fila/", opa)
					.then(res => res.json())
					.then(
					(result) => {
						console.log("atendentes_fila result=",result);
						},
					(error) => {
						setIsLoaded(true);
						setError(error);
						}
						)
		
}


function jogar(){

    const slk = {
  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
  
        atendente: atendente,
        senha: senha
  
      })
  
    }
  
    fetch(configData.api.URL+"/api/atendentes", slk)
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

function Editar(id_dos_atendentes){
  console.log("Editar","id_dos_atendentes",id_dos_atendentes);
  var url = configData.api.URL+"/api/atendentes?$filter=id_dos_atendentes eq "+id_dos_atendentes;
  fetch(url)
  .then(res => res.json())
  .then(
  (result) => {
    console.log("Editar",result);
    setAtendenteModal(result[0]);
    console.log(atendenteModal);
    setModalIsOpen(true)
  },
  (error) => {
  setIsLoaded(true);
  setError(error);
  }
)

}

function Filas(id_dos_atendentes, nome_da_fila){
  console.log("Editar","id_dos_atendentes" + id_dos_atendentes);
  var url = configData.api.URL+"/api/atendentes?$filter=id_dos_atendentes eq "+id_dos_atendentes;
  fetch(url)
  .then(res => res.json())
  .then(
  (result) => {
    console.log("Editar",result);
    setAtendenteModal(result[0]);
    console.log(atendenteModal);
    setModalIsOpenThiago(true)
  },
  (error) => {
  setIsLoaded(true);
  setError(error);
  }
)

}

function GravarEditar(id_dos_atendentes, nome_da_fila){
    console.log("Editar","id_dos_atendentes",id_dos_atendentes);
        const jucaa = {

        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

        atendente: atendente,
        senha: senha

      })
    }

  fetch(configData.api.URL+"/api/atendentes/" + id_dos_atendentes, jucaa)
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

function Deletar(id_dos_atendentes){

  const requestOptions = {

    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      atendente: atendente,
      senha: senha
    })
  }


    var url = configData.api.URL+"/api/atendentes?$filter=id_dos_atendentes eq "+id_dos_atendentes;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("Deletar",result);
        setAtendenteModal(result[0]);
        console.log(atendenteModal);
        setModalIsOpenDeletar(true)
        setDeletar(result)
      },
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
}
function GravarDeletar(id_dos_atendentes){
  console.log("Deletar","id_dos_atendentes",id_dos_atendentes);
      const juca = {

  method: 'delete',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({

    atendente: atendente,
    senha: senha	

  })
}


fetch(configData.api.URL+"/api/atendentes/" + id_dos_atendentes, juca)
  .then(res => res.json())
  .then(
  (result) => {
  console.log(result);
  setDeletar(result);
  },
  (error) => {
  setIsLoaded(true);
  setError(error);
  }
)

}



	return(
		<>

		<Navbar />


  <div className='row'>

    <div className="gm2 col-12 col-lg-12">

      <h2 className="text-center pb-2">Lista Atendentes</h2>

      <div className="mb-3">

        <table className='table'>
          <thead>
            <tr className='text-center'>
            { Object.keys(configData.atendentes_colunas).map((key) => (
							<th>{configData.atendentes_colunas[key]}</th>
						))}
              <th>EDITAR</th>
              <th>DELETAR</th>
            </tr>
          </thead>
          <tbody>
          {botao.map(item => <tr className='text-center'>

            <td>{item.id_dos_atendentes}</td>
            <td>{item.atendente}</td>
            <td>{item.senha}</td>
            <td>{item.status2}</td>
            <td>

              <button className="btn btn-success" onClick={() => Filas(item.id_dos_atendentes)}>Filas</button>  
							  <Modal isOpen={!!props3} onRequestClose={props3.clearSelectedOption} ariaHideApp={false} contentLabel="props3">  
								  <div className='mx-auto mt-5 fila3'>
									  <div className="mx-5 text-center">
                      <h2 className='pb-4'>Fila dos Atendentes</h2>
                      <h4 className="pb-2">ID : <stronge>{atendenteModal.id_dos_atendentes}</stronge></h4>
                      <h4>ATENDENTE : <stronge>{atendenteModal.atendente}</stronge></h4>
										  <MostraModal id_dos_atendentes={atendenteModal.id_dos_atendentes} nome_da_fila={item.nome_da_fila} atendente={item.atendente}/>
									  </div>
                    <button className="btn btn-danger form-control mt-5" onClick={() => setModalIsOpenThiago(false)}>Voltar a Tabela Atendentes</button>	
								  </div>
							  </Modal>
            </td>

            <td>
              <button className="btn btn-warning" onClick={() => Editar(item.id_dos_atendentes)}>Editar</button>
      					<Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
      						<div className="mx-auto editar3 mt-5 d-flex">
      							<form className="form-signin mx-auto">
											<h1 className="font-weight-normal text-center pt-3">Editar Dados</h1>
                      <ul className="mt-3">
                        <li>ID : <stronge>{atendenteModal.id_dos_atendentes}</stronge></li>
                      </ul>
                      <label>Atendente: </label>
											<input onChange={(e) => setAtendente(e.target.value) } className="form-control border border-danger" defaultValue={atendenteModal.atendente}  type="text" />
											<label className="pt-1">Senha: </label>
											<input onChange={(e) => setSenha(e.target.value) } className="form-control border border-danger" type="text" defaultValue={atendenteModal.senha} />
											<button onClick={() => GravarEditar(atendenteModal.id_dos_atendentes)} title="Enviar Registros" className="form-control mt-4 btn btn-outline-primary mb-3" type="submit">Enviar</button>
                      <button className="btn btn-danger form-control text-center mb-3" onClick={() => setModalIsOpen(false)}>Voltar a Tabela Atendentes</button>
										</form>
									</div>	
      					</Modal>
            </td>

            <td>
              <button  onClick={() => Deletar(item.id_dos_atendentes)} className='btn btn-danger'>Apagar</button>  
      				<Modal isOpen={!!props} onRequestClose={props.clearSelectedOption} ariaHideApp={false} contentLabel="props" >
                <div className='mx-auto deletar3 mt-5'>
                 <h1 className='text-center font-weight-normal'>Deletar Registro</h1>
                    <ul>
                      <li>ID : <strong>{atendenteModal.id_dos_atendentes}</strong></li>
                      <li>ATENDENTE : <strong>{atendenteModal.atendente}</strong></li>
                    </ul>
                  <button onChange={(e) => setId_dos_atendentes(e.target.delete) } onClick={() => {GravarDeletar(atendenteModal.id_dos_atendentes); setModalIsOpenDeletar(false)}} className='btn btn-outline-danger mx-4 mb-3' type='submit'>Deletar</button>  
                  <button onClick={() => setModalIsOpenDeletar(false) } type='button' className='form-control btn btn-danger mb-3'>Voltar a Tabela Atendentes</button>
                </div>  
              </Modal>
          </td>
             
          </tr>
            ) }
           
          </tbody>
           {/* {botao.map(item => <ListaAtendente atendente={item.atendente} senha={item.senha} nome_da_fila={item.nome_da_fila} id_das_filas={item.id_das_filas} id_dos_atendentes={item.id_dos_atendentes} />) } */}

        </table>

      </div>

		  {/* {botao.map(item => <ListaAtendente atendente={item.atendente} senha={item.senha} nome_da_fila={item.nome_da_fila} id_das_filas={item.id_das_filas} id_dos_atendentes={item.id_dos_atendentes} />) } */}

      <button onClick={() => setModal(true) } type="button" className='btn btn-dark mt-3 mx-5 mb-3'>Adicionar Atendentes</button>
        <Modal  isOpen={!!props4} onRequestClose={props4.clearSelectedOption} ariaHideApp={false} contentLabel="props4">
          <div className="mx-auto vamos d-flex adicionar3 mt-5">
            <form className="form-signin mx-auto">
              <h1 className="font-weight-normal text-center pt-3">Adicionar Atendentes</h1>
              <label>Atendente</label>
              <input onChange={(e) => setAtendente(e.target.value) } type="text" class="form-control border border-danger" placeholder='Nome atendente' />
              <label>Senha</label>
              <input onChange={(e) => setSenha(e.target.value) } type="password" class="form-control border border-danger mb-3" placeholder='Senha atendente' />
              <button onClick={jogar} class="btn btn-outline-primary form-control mb-3" type="submit">Enivar</button>
              <button type="submit" className='btn btn-danger form-control text-center mt-1 mb-3' onClick={() => setModal(false) }>Voltar a Tabela Atendentes</button>
            </form>
          </div>
        </Modal>    
    </div>

  </div>

 		</>
		)
}

export default Logar;