import React, {useState, useEffect,useRef} from 'react';
import { Textfit } from 'react-textfit';
import Speech from 'speak-tts' // es6
import configData from "../../config.json";
import Css from './main.css';


function Tela(){
  const [eventSource, setEventSource] = useState(() => new EventSource(configData.API_URL+"/countdown"));
  const [dadosTela, setDadosTela] = useState({});
  const [status, setStatus] = useState("Desconetado");
  const [bgColor, setBgColor] = useState("#2d405f");
  // const speech = new Speech() // will throw an exception if not browser supported
  const speech = new Speech() // will throw an exception if not browser supported
  useEffect(async () => {
    const somStart = async () => {
      if(speech.hasBrowserSupport()) { // returns a boolean
          console.log("speech synthesis supported")
      }
      // speech.init({'lang': 'pt-BR','voice':'Google português do Brasil'}).then((data) => {
      speech.init().then((data) => {
          // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)

/*         const lang ='pt-BR';
        speech.setLanguage(lang);

        const voice ='Google português do Brasil';
        speech.setVoice(voice); */
    
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
    })
    }
    console.log("useEffect:eventSource");
    await somStart();
    console.log("useEffect:eventSource 2");

  }, []);

  useEffect(() => {
    eventSource.onopen = async (event) => {
        console.log("Open SSE connection.");
        await setStatus("Conectado");
        console.log("status",status);
    };
      
    eventSource.onmessage = (event) => {
        console.log("New message event:", event.data);
        try {
          var data = JSON.parse(event.data);
          setDadosTela(data);
        }catch (e){
          console.log("erro:",e)
        }
    };
      
    eventSource.onerror = (event) => {
        if (event.type === "error") {
          console.error("Connection error:", event.message);
          setStatus("Erro de conexão");
          setBgColor("#FF0000");
          // setRefreshKey();
          console.log("status",status);
        } else if (event.type === "exception") {
          console.error("Error:", event.message, event.error);
          setStatus("Erro:"+event.message);
          setBgColor("#FF0000");
          // setRefreshKey();
          console.log("status",status);
    
        }
    };
      
    eventSource.onclose = (event) => {
        console.log("Close SSE connection.");
    };
    console.log("useEffect:dadosTela");
    som();

  },[dadosTela])


    function som() {
      if (dadosTela.senha)
       var texto = "chamando,"+dadosTela.senha+",no "+dadosTela.guiche;
       else
       var texto = "Sistema iniciado"
    speech.speak({
        text: texto,
        queue: false // current speech will be interrupted,
      }).then(() => {
          console.log("Success !")
      }).catch(e => {
          console.error("An error occurred :", e)
    })
    console.log("som:",dadosTela.senha,dadosTela.guiche,speech);
  };

    return(

      <div className='som'>

         
  <div className='row'>
        <div className='col-8 text-center atual' style={{backgroundColor: configData.cor1_fundo, color: configData.cor1}}>
          {/* <p className='text-left' id='state'>{status}</p> */}
          <div className='row' style={{ height: "10vh"}}>
                  <div className='col-12'>
                    <Textfit mode="single" max={50} forceSingleModeWidth={true}>{dadosTela.nome_fila}</Textfit>
                  </div>
            </div>
            <div className='row' style={{ height: "65vh"}}>
                  <div className='col-12'>
                    <Textfit mode="single" max={400} forceSingleModeWidth={true}>{dadosTela.senha}</Textfit>
                  </div>
            </div>
            <div className='row' style={{ height: "20vh"}}>
                  <div className='col-12'>
                    <Textfit mode="single" max={100} forceSingleModeWidth={false}>{dadosTela.guiche}</Textfit>
                  </div>
            </div>
        </div>
 

        <div className='col-4 text-center velha'>

            <div className='row' style={{ height: "10vh"}}>
                  <div  className='col-12' style={{ backgroundColor: configData.cor2_fundo, color: configData.cor2}}>
                    <Textfit mode="single" max={300} id='senha1'>Chamadas Anteriores</Textfit>
                  </div>
            </div>

            <div className='row' style={{ height: "45vh"}}>
              <div  className='col-12' style={{ backgroundColor: configData.cor2_fundo, color: configData.cor2}}>
                <div className='row' style={{ height: "50%"}}>
                  <div  className='col-12'>
                    <Textfit mode="single" max={500} id='senha1'>{dadosTela.senha1}</Textfit>
                  </div>
                </div>
                <div className='row' style={{ height: "50%"}}>
                  <div className='col-12' style={{ backgroundColor: configData.cor2_fundo, color: configData.cor2}}>
                  <Textfit mode="single" max={80} id='e1'>{dadosTela.guiche1}</Textfit>
                  </div>
                </div>
              </div>
            </div> 

            <div className='row' style={{ height: "45vh"}}>
              <div className='col-12' style={{ backgroundColor: configData.cor2_fundo, color: configData.cor2}}>
                <div className='row' style={{ height: "50%"}}>
                  <div className='col-12'>
                    <Textfit mode="single" max={500} id='senha2'>{dadosTela.senha2}</Textfit>
                  </div>
                </div>
                <div className='row' style={{ height: "50%"}}>
                  <div className='col-12'>
                  <Textfit mode="single" max={80} id='e2'>{dadosTela.guiche2}</Textfit>
                  </div>
                </div>
              </div>
            </div> 

        </div>
      </div> 
      </div>
    );
}

export default Tela;