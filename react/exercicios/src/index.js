import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import Bomdia from './componentes/BomDia'
// import Multiplos, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'


ReactDOM.render(
    // <Bomdia nome="Beltrano" />   
    <div>        
        {/* <Multiplos.BoaTarde nome="Alice" />
        <BoaNoite nome="Joaquim" /> */}
        {/* <Saudacao tipo="Bom dia" nome="João"/> */}
        <Pai nome="Paulo" sobrenome="Silva" />            
    </div>    
, document.getElementById('root'))