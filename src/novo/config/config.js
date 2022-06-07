import React, {useState} from 'react';
import configData from "../../config.json";
import Modal from 'react-modal';
import css from './config.css';


function Config(){
    
    const [modal1, setModal1] = useState(false);
    var props = modal1;

    const [modal2, setModal2] = useState(false);
    var props2 = modal2;

    const [modal3, setModal3] = useState(false);
    var props3 = modal3;

    const [modal4, setModal4] = useState(false);
    var props4 = modal4;

    const [modal5, setModal5] = useState(false);
    var props5 = modal5;

    return(

<div className='fundo mb-5'>
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
                            <h3 className='text-center'>Editar Tamanho Botão Fila</h3>
                            <form>
                                <h5>Novo Tamanho: </h5>
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
    <h2 className='mt-5 text-center'>Atendimento</h2>
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
                </tr>
            </tbody>
        </table>
        <button onClick={() => setModal2(true) } className='btn btn-success'>Editar Atendimento</button>
        <Modal isOpen={!!props2} onRequestClose={props2.clearSelectedOption} ariaHideApp={false} contentLabel="props2">
                        <div className='fundo'>   
                            <h3 className='text-center'>Editar Tabela Atendimento</h3>
                            <form>                                
                                <h5>Novo {Object.values(configData.atendimento_colunas.id)}: </h5>
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
                                
                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datatime)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.id_das_filas)}: </h5>
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
    
                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.atendente)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datainicio)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.datafinal)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.status1)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.contador)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.Guichê)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.nome_fila)}: </h5>
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

                                <h5 className='mt-2'>Novo {Object.values(configData.atendimento_colunas.alerta)}: </h5>
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

    </div>
    <h2 className='mt-5 text-center'>Filas</h2>
        <table className='table text-center'>
            <tbody>
                <tr>
                    <td>{Object.values(configData.filas_colunas.id_fila)}</td>
                    <td>{Object.values(configData.filas_colunas.ordem)}</td>
                    <td>{Object.values(configData.filas_colunas.nome_da_fila)}</td>
                    <td>{Object.values(configData.filas_colunas.senha)}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={() => setModal3(true) } className='btn btn-success'>Editar Filas</button>
                        <Modal isOpen={!!props3} onRequestClose={props3.clearSelectedOption} ariaHideApp={false} contentLabel="props3">
                            <div className='fundo'>
                                <h3 className='text-center'>Editar Tabela Filas</h3>
                                <h5>Novo {Object.values(configData.filas_colunas.id_fila)}: </h5>
                                <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.filas_colunas.id_fila)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.filas_colunas.id_fila)}
                                        </label>
                                    </div>
                                </div>
                                
                                <h5 className='mt-2'>Novo {Object.values(configData.filas_colunas.ordem)}: </h5>
                                <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.filas_colunas.ordem)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.filas_colunas.ordem)}
                                        </label>
                                    </div>
                                </div>

                                <h5 className='mt-2'>Novo {Object.values(configData.filas_colunas.nome_da_fila)}: </h5>
                                <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.filas_colunas.nome_da_fila)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.filas_colunas.nome_da_fila)}
                                        </label>
                                    </div>
                                </div>

                                <h5 className='mt-2'>Novo {Object.values(configData.filas_colunas.senha)}: </h5>
                                <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.filas_colunas.senha)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.filas_colunas.senha)}
                                        </label>
                                    </div>
                                </div>

                                <button className='btn btn-success mt-3'>Enviar</button>

                                <button className='btn btn-danger form-control mt-4' onClick={() => setModal3(false) }>Voltar</button>
                            </div>
                        </Modal>
        <h2 className='mt-5 text-center'>Atendentes</h2>
        <table className='table text-center'>
            <tbody>
                <tr>
                    <td>{Object.values(configData.atendentes_colunas.id_dos_atendentes)}</td>
                    <td>{Object.values(configData.atendentes_colunas.atendente)}</td>
                    <td>{Object.values(configData.atendentes_colunas.senha)}</td>
                    <td>{Object.values(configData.atendentes_colunas.status2)}</td>
                    <td>{Object.values(configData.atendentes_colunas.filas)}</td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-success' onClick={() => setModal4(true) }>Editar Atendentes</button>
                        <Modal isOpen={!!props4} onRequestClose={props4.clearSelectedOption} ariaHideApp={false} contentLabel="props4">
                        <div className='fundo'>
                        <h3 className='text-center'>Editar Tabela Atendentes</h3>
                            <h5>Novo {Object.values(configData.atendentes_colunas.id_dos_atendentes)}: </h5>
                            <input type='text' className='border border-danger form-control'/>

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendentes_colunas.id_dos_atendentes)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendentes_colunas.id_dos_atendentes)}
                                        </label>
                                    </div>
                                </div>

                            <h5 className='mt-2'>Novo {Object.values(configData.atendentes_colunas.atendente)}: </h5>
                            <input type='text' className='border border-danger form-control'/>  

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendentes_colunas.atendente)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendentes_colunas.atendente)}
                                        </label>
                                    </div>
                                </div>  

                            <h5 className='mt-2'>Novo {Object.values(configData.atendentes_colunas.senha)}: </h5>
                            <input type='text' className='border border-danger form-control'/> 

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendentes_colunas.senha)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendentes_colunas.senha)}
                                        </label>
                                    </div>
                                </div> 

                            <h5 className='mt-2'>Novo {Object.values(configData.atendentes_colunas.status2)}: </h5>
                            <input type='text' className='border border-danger form-control'/>  

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendentes_colunas.status2)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendentes_colunas.status2)}
                                        </label>
                                    </div>
                                </div> 

                            <h5 className='mt-2'>Novo {Object.values(configData.atendentes_colunas.filas)}: </h5>
                            <input type='text' className='border border-danger form-control'/> 

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.atendentes_colunas.filas)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.atendentes_colunas.filas)}
                                        </label>
                                    </div>
                                </div>   

                            <button className='btn btn-success mt-3'>Enviar</button>

                            <button className='btn btn-danger form-control mt-4' onClick={() => setModal4(false) }>Voltar</button>
                        </div>    
                        </Modal>
        <h2 className='mt-5 text-center'>Adm</h2>
        <table className='table text-center'>
            <tbody>
                <tr>
                    <td>{Object.values(configData.adm_colunas.id_adm)}</td>
                    <td>{Object.values(configData.adm_colunas.adms)}</td>
                    <td>{Object.values(configData.adm_colunas.senha)}</td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-success' onClick={() => setModal5(true) }>Editar Adm</button>
                        <Modal isOpen={!!props5} onRequestClose={props5.clearSelectedOption} ariaHideApp={false} contentLabel="props5">
                        <div className='fundo'>   
                            <h3 className='text-center'>Editar Tabela Adm</h3>
                            <h5 className='mt-2'>Novo {Object.values(configData.adm_colunas.id_adm)}: </h5>
                            <input type='text' className='border border-danger form-control'/> 

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.adm_colunas.id_adm)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.adm_colunas.id_adm)}
                                        </label>
                                    </div>
                                </div>

                            <h5 className='mt-2'>Novo {Object.values(configData.adm_colunas.adms)}: </h5>
                            <input type='text' className='border border-danger form-control'/> 

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.adm_colunas.adms)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.adm_colunas.adms)}
                                        </label>
                                    </div>
                                </div>

                            <h5 className='mt-2'>Novo {Object.values(configData.adm_colunas.senha)}: </h5>
                            <input type='text' className='border border-danger form-control'/> 

                                <div>
                                    <div className='form-check mt-1 mb-1 escolhas'>
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            True: {Object.values(configData.adm_colunas.senha)}
                                        </label>
                                    </div>
                                    <div className="form-check mt-1 mb-1 mx-2 escolhas">
                                        <input className="form-check-input" type="checkbox" value=""  />
                                        <label className="form-check-label">
                                            False: {Object.values(configData.adm_colunas.senha)}
                                        </label>
                                    </div>
                                </div>

                                <button className='btn btn-success mt-3'>Enviar</button>

                            <button className='btn btn-danger form-control mt-4' onClick={() => setModal5(false) }>Voltar</button>
                        </div>     
                        </Modal>
</div>

    );

}

export default Config;