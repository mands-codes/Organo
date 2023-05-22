import './ListaSuspensa.css'
const ListaSuspensa = (props) =>{
///foreach é void, map executa e transforma em um novo array
//nunca esquecer da key para controlar a renderizacao
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=> props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}> 
            <option value=""></option>
                {props.itens.map((item, index)=><option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;