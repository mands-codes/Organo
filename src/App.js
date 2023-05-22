import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
function App() {

const [colaboradores, setColaboradores] = useState([])

const aoAdicionarNovoColab = (colaborador) =>{
  setColaboradores([...colaboradores, colaborador])
}

const times = [
      {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSegundaria: '#D9F7E9'
      },
      {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSegundaria: '#E8F8FF'
      },
      {
        nome: 'Data Science',
        corPrimaria: '#A60157',
        corSegundaria: '#F0F8E2'
      },
      {
        nome: 'DevOps',
        corPrimaria: '#E06B69',
        corSegundaria: '#FDE7E8'
      },
      {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSegundaria: '#FAE9F5'
      },
      {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSegundaria: '#FFF5D9'
      },
      {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSegundaria: '#FFED0F'
      }
]

  return (
    <div className="App">
      <Banner />
      <Formulario 
      times={times.map(time=>time.nome)}
      aoColaboradorCadastrado={colaborador=> aoAdicionarNovoColab(colaborador)} 
      />
      {times.map((time, index)=> 
        <Time 
            key={index} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSegundaria={time.corSegundaria}
            colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}
          />)}
      <Rodape />
    </div>
   
  );
}

export default App;
