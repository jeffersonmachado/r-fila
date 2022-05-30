import react, {useState, useEffect} from 'react';
import Navbar from '../../navbar/boas.js';
import {Link} from 'react-router-dom';
import Css from './eventos.css';
import Modal from 'react-modal';

function Eventosfila(){
  const [modalisopenn, setModalIsOpenn] = useState(false);
  var props3 = modalisopenn;

  var [nome_da_fila, setNome_da_fila] = useState(nome_da_fila);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const[filas, setFilas] = useState([]);
  const[editar, setEditar] = useState([]);
  let result = [];
  const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalIsOpenDeletar, setModalIsOpenDeletar] = useState(false);
  var [atendenteModal, setAtendenteModal] = useState([]);
  var props2 = modalIsOpen;
  var props = modalIsOpenDeletar;

  const [deletar, setDeletar] = useState("");
  const [atendimento, setAtendimento] = useState([]);
  var [ordem, setOrdem] = useState(ordem);

	function enviar(){
    const requestOptions = {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({	
           nome_da_fila: nome_da_fila,
           senha: 0 ,
           ordem: ordem
          })
      };
  
      fetch("http://localhost:4001/api/fila",requestOptions)
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
  };

useEffect(() => {   
    fetch("http://localhost:4001/api/fila?$orderby=ordem")
      .then(res => res.json())
      .then(
        (result) => {
          setFilas(result);
          setEditar(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
}, [deletar]) 

useEffect(() => {   
  fetch("http://localhost:4001/api/atendimento")
    .then(res => res.json())
    .then(
      (result) => {
        setAtendimento(result)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [deletar]) 


function Editar(id_fila){
  console.log("Editar","id_fila",id_fila);
  var url = "http://localhost:4001/api/fila?$filter=id_fila eq "+ id_fila;
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

function GravarEditar(id_fila){
  console.log("Editar","id_fila",id_fila);
      const jucaa = {

      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      nome_da_fila: nome_da_fila,	
      ordem: ordem,
      id_fila: id_fila

  })
}


fetch("http://localhost:4001/api/fila/" + id_fila, jucaa)
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


function Deletar(id_fila){

    var url = "http://localhost:4001/api/fila?$filter=id_fila eq "+id_fila;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("Deletar",result);
        setAtendenteModal(result[0]);
        console.log(atendenteModal);
        setModalIsOpenDeletar(true);
        setDeletar(result);
      },
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
}

function GravarDeletar(id_fila){
  console.log("Deletar","id_das_filas",id_fila)
      const juca = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
      nome_da_fila: nome_da_fila,
      id_fila: id_fila
  })
}

  fetch("http://localhost:4001/api/fila/" + id_fila, juca)
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

      <Navbar/>

            <div className="lg">
              <h2 className="text-center mb-3">Lista Filas</h2>

              <table className='table'>
                <thead>
                  <tr className='text-center'>
                    <th>ID</th>
                    <th>ORDEM</th>
                    <th>NOME DA FILA</th>
                    <th>SENHA</th>
                    <th>EDITAR</th>
                    <th>DELETAR</th>
                  </tr>
                </thead>
                <tbody>
                  {filas.map(item => <tr className='text-center'>
                    <td>{item.id_fila}</td>
                    <td>{item.ordem}</td>
                    <td>{item.nome_da_fila}</td>
                    <td>{item.senha}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => Editar(item.id_fila)}>Editar</button>
                          <Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
                                      <div className="mx-auto d-flex mt-5 editar2">
                                        <form className="form-signin mx-auto">
                                          <h1 className="font-weight-normal text-center pt-3">Editar Dados</h1>
                                          <ul className='pt-2'>
                                            <li>REGISTRO : <strong>{atendenteModal.nome_da_fila}</strong></li>
                                          </ul>
                                          <label className="pt-2">Nome da Fila: </label>
                                          <input className="form-control border border-danger" onChange={(e) => setNome_da_fila(e.target.value) } defaultValue={atendenteModal.nome_da_fila}   type="text" />
                                          <label>Ordem: </label>
                                          <input type='number' className='form-control border border-danger' onChange={(e) => setOrdem(e.target.value) } defaultValue={atendenteModal.ordem} /> 
                                          <button onClick={() => GravarEditar(atendenteModal.id_fila)} title="Enviar Registros" className="form-control mt-4 btn btn-outline-primary mb-3" type="submit">Enviar</button>
                                          <button className="btn btn-danger form-control text-center mb-3" onClick={() => setModalIsOpen(false)}>Voltar a Tabela Filas</button>
                                        </form>
                                      </div>	
                          </Modal>
                    </td>
                    <td>
                 <button onClick={() => Deletar(item.id_fila)} className="btn btn-danger" type="submit" title="deletar registros">Apagar</button>
                      <Modal isOpen={!!props} onRequestClose={props.clearSelectedOption} ariaHideApp={false} contentLabel="props">
                        <div className='mx-auto deletar2 mt-5'>
                          <h2 className="text-center">Deletar Registro</h2>
                          <ul>
                            <li>ID : <strong>{atendenteModal.id_fila}</strong></li>
                            <li>NOME DA FILA : <strong>{atendenteModal.nome_da_fila}</strong></li>
                          </ul>
                          <button onClick={() => {GravarDeletar(atendenteModal.id_fila); setModalIsOpenDeletar(false) } } type="submit"  className="btn btn-outline-danger mb-3 mx-4" title="Deletar Esse Registro">Deletar</button>
                          <button onClick={() => setModalIsOpenDeletar(false) } className="btn btn-danger form-control text-center mb-3" type="button">Voltar a Tabela Filas</button>
                        </div> 
                      </Modal>
                    </td>
                  </tr>) }
                </tbody>
              </table>    

            <button onClick={() => setModalIsOpenn(true) } className='btn btn-dark mt-2 mb-3 mx-5' type="button">Adicionar Filas</button>
              <Modal isOpen={!!props3} onRequestClose={props3.clearSelectedOption} ariaHideApp={false} contentLabel="props3">
                <div className="mx-auto adicionar2 mt-5 d-flex">
					        <form className="mx-auto pt-1 pb-1">
						        <h1 className="text-center pt-5">Adicionar Fila</h1>
						        <label className="pt-3">Nome da Fila: </label>
						        <input onChange={(e) => setNome_da_fila(e.target.value) } type="text" className="form-control border border-danger" placeholder='Fila' />
                    <label>Ordem: </label>
                    <input type='number' onChange={(e) => setOrdem(e.target.value) } className='form-control border border-danger' placeholder='ORDEM' />
						        <button onClick={enviar} type="submit" className="form-control mt-4 btn btn-outline-primary mb-3">Enviar</button>
                    <button onClick={() => setModalIsOpenn(false) } className='btn btn-danger form-control text-center mt-1 mb-3' type='button' >Voltar a Tabela Filas</button>
					        </form>
				        </div>
              </Modal>
            </div>  

      </>
    )
}

export default Eventosfila;