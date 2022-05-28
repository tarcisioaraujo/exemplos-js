import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import Bomdia from './componentes/BomDia'
// import Multiplos, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'


ReactDOM.render(
    // <Bomdia nome="Beltrano" />   
    <div>        
        {/* <Multiplos.BoaTarde nome="Alice" />
        <BoaNoite nome="Joaquim" /> */}
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>    
, document.getElementById('root'))