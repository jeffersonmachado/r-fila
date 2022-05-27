import React, {useState} from 'react';
import Css from './filas.css';


function Filas(){


	return(

		<div classsName="text-center">
			<table className="table">
			  <thead>
			    <tr>
			      <th scope="col">Primeiro</th>
			      <th scope="col">Último</th>
			      <th scope="col">Nickname</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			  </tbody>
			</table>
		</div>

		);
}

export default Filas;
