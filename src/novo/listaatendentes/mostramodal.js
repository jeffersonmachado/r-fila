import Css from './listaAtendentes.css';
// import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ListaAtendente from './eventos.js';
import Navbar from '../../navbar/index.js';	 
import configData from "../../config.json";


async function retorno(atendentes,filas) {
    for (const [index, element_atendentes] of atendentes.entries()) {
    console.log(`atendentes ${index+1}:`, element_atendentes);
    for (const [index, element_filas] of filas.entries()) {
    //   const todo = await fetch(url);
        console.log(`filas ${index+1}:`, element_filas,element_atendentes.id_dos_atendentes);
    //   filas[index].id_dos_atendentes = element_atendentes.id_dos_atendentes;
        filas[index].atendente = element_atendentes.atendente;
        filas[index].id_dos_atendentes = element_atendentes.id_dos_atendentes;
        
        var url = configData.API_URL+"/api/atendentes_fila?$filter=id_filas eq "+element_filas.id_das_filas+" and id_atendentes eq "+element_atendentes.id_dos_atendentes;
        console.log("url",url);
        try {

            
        var fetchResponse  = await fetch(url);
        const ret_af = await fetchResponse.json();

        console.log("ret_af",ret_af);
        console.log('cadastrado',"len", Object.keys(ret_af).length);
        filas[index].cadastrado = Object.keys(ret_af).length > 0 ? true : false; 
        } catch (e) {
            console.log("error",e);
        }    

    }
}
console.log('filas',filas);
return filas;
}
function MostraModal({id_dos_atendentes, atendente}){
    var atendente;
    console.log("id_dos_atendentes",id_dos_atendentes);
    const [modalFilas, setModalFilas] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect( async () => {

        var ret_fila,ret_atendentes,ret_af, ret_atendimento;
        try {
            var url = configData.API_URL+"/api/fila";
            var fetchResponse  = await fetch(url);
            ret_fila = await fetchResponse.json();
            console.log("ret_fila",ret_fila);
        } catch (e) {
            console.log("error",e);
        }
        try {
            var url = configData.API_URL+"/api/atendentes?$filter=id_dos_atendentes eq "+id_dos_atendentes;
            var fetchResponse  = await fetch(url);
            ret_atendentes = await fetchResponse.json();
            atendente = ret_atendentes.atendente;
            console.log("ret_atendentes",ret_atendentes);
        } catch (e) {
            console.log("error",e);
        }
        ret_af = await retorno(ret_atendentes,ret_fila, ret_atendimento);
        console.log("ret_af",ret_af);
        setModalFilas(ret_af);
    },[refreshKey])


/*

    function teste(nome_da_fila){

        const fila = {

            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                fila: nome_da_fila

            })
        }

        fetch(configData.API_URL+"/api/atendimento", fila)
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
*/    

    return(
        <>
   
    <div className="gm2">

        {modalFilas.map(fila => <button className={`mt-5 mb-5 mx-3 btn  ${fila.cadastrado ? 'btn-outline-success' : 'btn-outline-fail'}`}   onClick={() => {mandar(id_dos_atendentes, fila.id_das_filas,fila.cadastrado) } }>{fila.nome_da_fila}</button>)}

    </div>
         </>
        )

        function mandar(id_dos_atendentes, id_das_filas, cadastrado){
            console.log(id_dos_atendentes,id_das_filas,cadastrado);
            if(cadastrado)
                var metodo='delete';
            else
                var metodo='post';
                    const opa = {
                
                        method: metodo,
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id_atendentes: id_dos_atendentes,
                            id_filas: id_das_filas
                        })
                    }
            console.log("opa",opa);
                    fetch(configData.API_URL+"/api/atendentes_fila", opa)
                        .then(res => res.json())
                          .then(
                        (result) => {
                              console.log("atendentes_fila result=",result);
                              setRefreshKey(oldKey => oldKey +1)

                            },
                        (error) => {
                              setIsLoaded(true);
                              setError(error);
                            }
                             )
            
                }
            
}

/** */
export default MostraModal;