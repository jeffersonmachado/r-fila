import React, {useState} from 'react';
import configData from "../../config.json";
import Modal from 'react-modal';
import css from './config.css';


function Config(){
    
    const [modal1, setModal1] = useState(false);
    var props = modal1;

    const [modal2, setModal2] = useState(false);
    var props2 = modal2;

    return(

<div className='fundo'>
    <h2 className='text-center'>Botões Fila</h2>
    <table class="table text-center">
        <thead>
            <tr>
                <th scope="col">{Object.keys(configData.botao_filas)}</th>
                <th scope="col">Editar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{Object.values(configData.botao_filas)}</td>
                <td>
                    <button onClick={() => setModal1(true) } className='btn btn-success'>Editar</button>
                    <Modal isOpen={!!props} onRequestClose={props.clearSelectedOption} ariaHideApp={false} contentLabel="props">
                        <div className='fundo'>
                            <h3 className='text-center'>Editar Dados</h3>
                            <form>
                                <label>Novo Tamanho: </label>
                                <input type='number' className='form-control border border-danger' defaultValue={Object.values(configData.botao_filas)} />
                                <button className='btn btn-success mt-3'>Enviar</button>
                            </form>
                            <button onClick={() => setModal1(false) } className='btn btn-danger form-control mt-4 mb-3'>Voltar</button>
                        </div>
                    </Modal>
                </td>
            </tr>
        </tbody>
    </table>
    <h2 className='text-center mt-4'>Campos Atendimento</h2>
    <div className='table-responsive'>
        <table className='table text-center'>
            <tbody>
                <tr>
                    <td>{Object.values(configData.atendimento_colunas.id)}</td>
                    <td>{Object.values(configData.atendimento_colunas.datatime)}</td>
                    <td>{Object.values(configData.atendimento_colunas.id_das_filas)}</td>
                    <td>{Object.values(configData.atendimento_colunas.atendente)}</td>
                    <td>{Object.values(configData.atendimento_colunas.datainicio)}</td>
                    <td>{Object.values(configData.atendimento_colunas.datafinal)}</td>
                    <td>{Object.values(configData.atendimento_colunas.status1)}</td>
                    <td>{Object.values(configData.atendimento_colunas.contador)}</td>
                    <td>{Object.values(configData.atendimento_colunas.Guichê)}</td>
                    <td>{Object.values(configData.atendimento_colunas.nome_fila)}</td>
                    <td>{Object.values(configData.atendimento_colunas.alerta)}</td>
                    <td>
                        <button onClick={() => setModal2(true) } className='btn btn-success'>Editar</button>
                        <Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
                        <div className='fundo'>   
                            <h3 className='text-center'>Editar Dados</h3>
                            <form>                                
                                <label>Novo {Object.values(configData.atendimento_colunas.id)}: </label>
                                <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.id)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.id)}
                                        </label>
                                    </div>
                                </div>    
                                
                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datatime)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.datatime)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.datatime)}
                                        </label>
                                    </div>
                                </div> 

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.id_das_filas)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.id_das_filas)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.id_das_filas)}
                                        </label>
                                    </div>
                                </div>
    
                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.atendente)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.atendente)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.atendente)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datainicio)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.datainicio)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.datainicio)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datafinal)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.datafinal)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.datafinal)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.status1)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.status1)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.status1)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.contador)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.contador)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.contador)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.Guichê)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.Guichê)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.Guichê)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.nome_fila)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.nome_fila)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.nome_fila)}
                                        </label>
                                    </div>
                                </div>

                                <label className='mt-2'>Novo {Object.values(configData.atendimento_colunas.alerta)}: </label>
                                <input type='text' className='form-control border border-danger' />

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendimento_colunas.alerta)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendimento_colunas.alerta)}
                                        </label>
                                    </div>
                                </div>

                                <button className='btn btn-success mt-3'>Enviar</button>

                            </form>
                            <button onClick={() => setModal2(false) } className='btn btn-danger form-control mt-4'>Voltar</button>
                        </div>     
                        </Modal>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

    );

}

export default Config;