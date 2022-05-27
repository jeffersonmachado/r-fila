import React, {useState} from 'react';
import Css from './index.css';
import configData from "../../config.json";

function Filas2({nome_da_fila,id_das_filas,id_dos_atendentes, atendente, cadastrado}){
console.log("cadastrado",cadastrado);
	const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);


	let result = [];

	function mandar(id_dos_atendentes, id_das_filas){
console.log(id_dos_atendentes,id_das_filas);
		const opa = {

			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id_atendentes: id_dos_atendentes,
				id_filas: id_das_filas
			})
		}

		fetch(configData.API_URL+"/api/atendentes_fila", opa)
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

	return(
		<>
		<div className="section">
			<div className="mx-5">
				<button className={`mt-3 mb-3 btn  ${cadastrado ? 'btn-outline-success' : 'btn-outline-fail'}`}   onClick={() => mandar(id_dos_atendentes, id_das_filas)}>{nome_da_fila}-{cadastrado}</button>
                <span>{atendente}</span>
			</div>	
		</div>	
		</>
		);
}

export default Filas2;