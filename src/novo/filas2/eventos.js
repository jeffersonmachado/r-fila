import React, {useEffect, useState } from 'react';
import Index from './index.js';
import {Link} from 'react-router-dom';
import configData from "../../config.json";

async function retorno(atendentes,filas) {
	for (const [index, element_atendentes] of atendentes.entries()) {
	  console.log(`atendentes ${index+1}:`, element_atendentes);
	  for (const [index, element_filas] of filas.entries()) {
		//   const todo = await fetch(url);
		  console.log(`filas ${index+1}:`, element_filas);
		  filas[index].id_atendente = element_atendentes.id_dos_atendentes;
		  filas[index].atendente = element_atendentes.atendente;
		  
		  var url = configData.API_URL+"/api/atendentes_fila?$filter=id_filas eq "+element_filas.id_das_filas+" and id_atendentes eq "+element_atendentes.id_dos_atendentes;
		  console.log("url",url);
		  try {

		  var fetchResponse  = await fetch(url);
		  const ret_af = await fetchResponse.json();

		  console.log("ret_af",ret_af);
			  // console.log('atendentes_fil result',result,'retorno',retorno,"len", Object.keys(result).length);
			  filas[index].cadastrado = Object.keys(ret_af).length > 0 ? true : false; 
		  } catch (e) {
			  console.log("error",e);
		  }    

	  }
	}
	console.log('filas',filas);
	return filas;
  }
function Logar(){

	const [botao, setBotao] = useState([]);

	// const [error, setError] = useState(null);
  	// const [isLoaded, setIsLoaded] = useState(false);
  	// const [items, setItems] = useState([]);

  	// let result = [];

	useEffect( async () => {
		var ret_fila,ret_atendentes,ret_af;
		try {
			var url = configData.API_URL+"/api/fila";
			var fetchResponse  = await fetch(url);
			ret_fila = await fetchResponse.json();
			console.log("ret_fila",ret_fila);
		} catch (e) {
			console.log("error",e);
		}
		try {
			var url = configData.API_URL+"/api/atendentes";
			var fetchResponse  = await fetch(url);
			ret_atendentes = await fetchResponse.json();
			console.log("ret_atendentes",ret_atendentes);
		} catch (e) {
			console.log("error",e);
		}
		ret_af = await retorno(ret_atendentes,ret_fila);
		console.log("ret_af",ret_af);

		setBotao(ret_af);
		// console.log("ret_fila",ret_fila);
		// console.log("ret_atendentes",ret_atendentes);

	},[])

	return(
		<>
		{botao.map(item => <Index id_dos_atendentes={item.id_atendente} id_das_filas={item.id_das_filas} nome_da_fila={item.nome_da_fila} atendente={item.atendente} cadastrado={item.cadastrado}  />)}

		<div className="mt-3">
			<Link to='listaatendentes' className="mb-3 btn btn-outline-danger form-control">Voltar atendentes</Link>
		</div>
		</>
		);
}
export default Logar;