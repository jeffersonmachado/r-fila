import React, {useEffect, useState} from 'react';
import Tabela from './index.js';
import Navbar from '../../navbar/index.js';
import Css from './eventos.css';

function Eventos(){

	const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);

  	const [lista, setLista] = useState([]);

  	let result = [];

	useEffect(() => {
		fetch(configData.API_URL+"/api/atendentes_fila")
      	.then(res => res.json())
      	.then(
        (result) => {
          setLista(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

	},[])

	return(
		<>
			<Navbar />

			<div className="section">

				<h2 className="text-center mb-4">Atendentes Fila</h2>

				<div className="mb-3">
					<span className="id">ID</span>
					<span className="atendente69">ATENDENTE</span>
					<span className="fila22">FILA</span>
					<span className="idatendente">ID ATENDENTE</span>
					<span className="idfila">ID FILA</span>
					<span className="editar33">EDITAR</span>
					<span className="deletar65">DELETAR</span>
				</div>	

				{lista.map(item => <Tabela id={item.id} atendentes={item.atendentes} filas={item.filas} id_atendentes={item.id_atendentes} id_filas={item.id_filas}  />)}

			</div>	

		</>
		);
}

export default Eventos;