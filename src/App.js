import react from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Logar from './novo/login/login.js';
import Listafilas from './novo/listafilas/eventos.js';
import Botaofila from './novo/botaofila/eventos.js';
import ListaAtendentes from './novo/listaatendentes/eventos.js';
import Patrao from './novo/patrao/index.js';
import Filas2 from './novo/filas2/eventos.js';
import Adm from './novo/adm/index.js';
import Tela from './novo/tela/index.js';
import impressao from './novo/impressao/index.js';
import Config from './novo/config/config.js';


function App2(){

	return(
     		<Router>
      			<Route exact path='/logar' component={Logar} />
      			<Route exact path='/listafilas' component={Listafilas} />
      			<Route exact path='/botao' component={Botaofila} />
      			<Route exact path='/' component={Patrao} />
      			<Route exact path='/listaatendentes' component={ListaAtendentes} />
      			<Route exact path='/filas2' component={Filas2} />
				<Route exact path='/Adm' component={Adm} />
				<Route exact path='/Tela' component={Tela} />
				<Route exact path='/impressao' component={impressao} />
				<Route exact path='/Config' component={Config} />
    		</Router> 

		);
}

export default App2;