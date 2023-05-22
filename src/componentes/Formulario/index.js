import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'
import { useState } from 'react';
const Formulario = (props) =>{

const [nome, setNome] = useState('');
const [cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');
const [time, setTime] = useState('');

const aoSalvar = (evento) =>{
evento.preventDefault();
   props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
   })
   setNome('')
   setCargo('')
   setTime('')
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    aoAlterado={valor=> setNome(valor)}
                />
                <CampoTexto 
                    valor={cargo} 
                    label="Cargo" 
                    placeholder="Informe o seu cargo" 
                    aoAlterado={valor=> setCargo(valor)}
                />
                 <CampoTexto 
                    valor={imagem}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    aoAlterado={valor=>setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor=>setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
    }

export default Formulario;