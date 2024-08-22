import React from 'react'
import '../components/Header.css'
import Logo from './Logo'

function Header() {
  return (
    <div className='container-cima'>
       <Logo/>
       <h1 className='titulo'>Farmácia da Marcia</h1>
    </div>
  )
}

export default Header
