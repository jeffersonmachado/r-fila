import react, {useState, useEffect, useRef} from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/index.js';
import css from './tutu.css';
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import configData from "../../config.json";


function Loko(){

	  const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);

	  const[fila, setFila] = useState([]);

    let data = new Date();
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

    var senha = useState(senha);
    
    console.log("aqui", configData.api.URL );
    
 useEffect(() => {                                                          
   fetch(configData.api.URL+"/api/fila?$orderby=ordem")
      .then(res => res.json())
      .then(
        (result) => {
					setFila(result);
          console.log(result);          

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    },[]);
  // },[contador]);

  const printIframe = (senha) => {
    var elem = "impressao";
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + senha  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    //mywindow.print();
    mywindow.close();

    return true;
  };
    
  async function contador2(id_fila, nome_da_fila, senha) {
    try {
      var url = configData.api.URL+"/api/fila?$filter=id_fila eq " + id_fila;
      console.log("url",url);
      var fetchResponse  = await fetch(url);
      const ultimo = await fetchResponse.json();
      console.log(Object.keys(ultimo));
      var senha = ultimo[0].senha;
      var nome_da_fila = ultimo[0].nome_da_fila;
      senha++;
      console.log(senha + "este é ocontador");
      const bomba = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senha: senha
        })
      }
      printIframe(senha);
      fetch(configData.api.URL+"/api/fila/" + id_fila, bomba)
      .then(res => res.json())
      .then(
      (result) => {
        const mlk = {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id_das_filas: id_fila,
            datatime: data.getDate() + "/" + meses[(data.getMonth())]  + "/" + data.getFullYear() + "  " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds(),
            contador: senha,
            nome_fila: nome_da_fila,
          })
        }
      
        fetch(configData.api.URL+"/api/atendimento", mlk)
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

      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
      )
  
    } catch (e) {
      console.log("error",e);
    }  
}
        
     
	return(
		<>
    <div className='row'>
      <div className='text-center tela col-12 col-lg-12'>
  
          <div className='text-center'>
          <iframe
                id="impressao"
                name="impressao"
                src="about:blank"
                style={{ display: 'none' }}
                title="Senha"
              />
<div className="d-grid gap-2">

            {fila.map(item => 
            <>
              <div className="d-grid gap-2">
                <Button variant="primary" 
                  style={configData.botao_filas}
                  size="lg" 
                  className="w-100 mt-3" 
                  onClick={() => {contador2(item.id_fila, item.id, item.nome_da_fila, item.senha)} }>
                {item.nome_da_fila}
                </Button>
              </div>
            </> 
            )}
      
      </div>          
      </div>          
      </div>
    </div>

		</>

		)
  } 

export default Loko;


