import react, {useState} from 'react';
import {Link} from 'react-router-dom';
import css from './opa.css';
import Car from './carboel.png';


function Navbar(){

	return(
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-lg-12">
					<nav className="navbar navbar-expand-lg navbar-light bg-white">
						<img src={Car} className='car img-fluid' title='Logo' />
 	 					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
    						<span className="navbar-toggler-icon"></span>
  						</button>
  						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    						<div className="navbar-nav">     							       							
      							
    						</div>
  						</div>
					</nav>
				</div>
			</div>
		</div>	

		);
}

export default Navbar;