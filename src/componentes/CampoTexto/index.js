
import './CampoTexto.css'
const CampoTexto = (props) =>{


const aoDigitar = (evento) =>{
   props.aoAlterado(evento.target.value);
}
    const placeholderModificado = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado}></input>
        </div>
    )
}

export default CampoTexto;
