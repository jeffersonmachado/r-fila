import React, {useState, useEffect} from 'react';
import Navbar from '../../navbar/boas.js';
import Modal from 'react-modal';
import MostraModal from './mostramodal';
import Css from './main.css';
import configData from "../../config.json";

function Adms(){

    const [botao, setBotao] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [modais, setModais] = useState(false);
    const [momo, setMomo] = useState(false);
    const [modalIsOpenDeletar,setModalIsOpenDeletar] = useState(false);
 
    var props = modais;
    var props2 = momo;
    var props3 = modalIsOpenDeletar;

    var [atendenteModal, setAtendenteModal] = useState([]);
    const [adms, setAdms] = useState("");
    const [senha, setSenha] = useState("");
    var [id_adm, setId_adm] = useState(id_adm);

    const [deletar, setDeletar] = useState("");

    useEffect( async () => {

        fetch(configData.api.URL+"/api/adm")
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

    function add(){

        const lisca = {

            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({

                adms: adms,
                senha: senha

            })

        }

        fetch(configData.api.URL+"/api/adm", lisca)
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
    
    function Editar(id_adm){
        console.log("Editar","id_adm",id_adm);
        var url = configData.api.URL+"/api/adm?$filter=id_adm eq "+id_adm;
        fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
          console.log("Editar",result);
          setAtendenteModal(result[0]);
          console.log(atendenteModal);
          setMomo(true)
        },
        (error) => {
        setIsLoaded(true);
        setError(error);
        }
      )
      
      }

      function GravarEditar(id_adm){
          console.log("Editar","id_adm",id_adm);
              const jucaa = {
      
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
      
                adms: adms,
                senha: senha	
      
                })
            }
      
        fetch(configData.api.URL+"/api/adm/" + id_adm, jucaa)
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

      function Deletar(id_adm){

        const requestOptions = {
      
          method: 'delete',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
      
            adms: adms,
            senha: senha
          })
        }
      
      
          var url = configData.api.URL+"/api/adm?$filter=id_adm eq "+id_adm;
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
      function GravarDeletar(id_adm){
        console.log("Deletar","id_adm",id_adm);
            const juca = {
      
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
      
            adms: adms,
            senha: senha	
      
        })
      }
      
      
      fetch(configData.api.URL+"/api/adm/" + id_adm, juca)
        .then(res => res.json())
        .then(
        (result) => {
        console.log(result);
        setDeletar(result)
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
        <div className='corpo'>
            <h2 className='text-center pb-2'>Lista ADM</h2>
            <table className='table'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>ADM</th>
                        <th>SENHA</th>
                        <th>EDITAR</th>
                        <th>DELETAR</th>
                    </tr>
                </thead>
                <tbody>
                    { botao.map(item => <tr className='text-center'>
                        <td>{item.id_adm}</td>
                        <td>{item.adms}</td>
                        <td>{item.senha}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => Editar(item.id_adm)}>Editar</button>
                            <Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
                                <div className="mx-auto mt-5 d-flex editar5">
                                    <form className="form-signin mx-auto">
                                        <h1 className="font-weight-normal text-center pt-3">Editar Dados</h1>
                                        <ul className="mt-3">
                                            <li>ID : <stronge>{atendenteModal.id_adm}</stronge></li>
                                        </ul>
                                        <label>ADM: </label>
                                        <input onChange={(e) => setAdms(e.target.value) } className="form-control border border-danger" defaultValue={atendenteModal.adms}  type="text" />
                                        <label className="pt-1">Senha: </label>
                                        <input onChange={(e) => setSenha(e.target.value) } className="form-control border border-danger" type="text" defaultValue={atendenteModal.senha} />
                                        <button onClick={() => GravarEditar(atendenteModal.id_adm)} title="Enviar Registros" className="form-control mt-4 btn btn-outline-primary mb-3" type="submit">Enviar</button>
                                        <button className="btn btn-danger form-control text-center mb-3" onClick={() => setMomo(false)}>Voltar a Tabela Atendentes</button>
                                    </form>
                                </div>	
                            </Modal>
                        </td>
                        <td>
                            <button  onClick={() => Deletar(item.id_adm)} className='btn btn-danger'>Apagar</button>  
                            <Modal isOpen={!!props3} onRequestClose={props3.clearSelectedOption} ariaHideApp={false} contentLabel="props3" >
                                <div className='mx-auto mt-5 apagar5'>
                                    <h1 className='text-center font-weight-normal'>Deletar Registro</h1>
                                    <ul>
                                        <li>ID : <strong>{atendenteModal.id_adm}</strong></li>
                                        <li>ATENDENTE : <strong>{atendenteModal.adms}</strong></li>
                                    </ul>
                                    <button onChange={(e) => setId_adm(e.target.delete) } onClick={() => {GravarDeletar(atendenteModal.id_adm); setModalIsOpenDeletar(false)}} className='btn btn-outline-danger mx-4 mb-3' type='submit'>Deletar</button>  
                                    <button onClick={() => setModalIsOpenDeletar(false) } type='button' className='form-control btn btn-danger mb-3'>Voltar a Tabela Atendentes</button>
                                </div>  
                            </Modal>
                        </td>
                    </tr>) }
                </tbody>
            </table>
            <button type='button' onClick={() => setModais(true) } className='btn btn-dark mt-3 mx-5 mb-3'>Adicionar ADM</button>
            <Modal isOpen={props} onRequestClose={props.clearSelectedOption} ariaHideApp={false} contentLabel="props">
                <div className="mx-auto mt-5 d-flex adicionar5">
                    <form className="form-signin mx-auto">
                        <h1 className="font-weight-normal text-center pt-3">Adicionar ADM</h1>
                        <label>ADM</label>
                        <input type="text" className="form-control border border-danger" placeholder='Nome adm' onChange={(e) => setAdms(e.target.value) } />
                        <label>Senha</label>
                        <input onChange={(e) => setSenha(e.target.value) } type="password" placeholder='Senha adm' className="form-control mb-3 border border-danger" />
                        <button onClick={add} className="btn btn-outline-primary form-control mb-3" type="submit">Enivar</button>
                        <button type="submit" className='btn btn-danger form-control text-center mt-1 mb-3' onClick={() => setModais(false) }>Voltar a Tabela Atendentes</button>
                    </form>
                </div>
            </Modal>

        </div>
        
        </>

    );

}

export default Adms;