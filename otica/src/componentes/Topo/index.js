import React from 'react';
import './estilo.css';

export default function Header (){
    return (
        <header className='header'>
            <div className='box-header'>
                <img className='img-header' src='../assets/logo.png' alt='Logo do site'></img>

                <nav className='nav-header'>
                    <a className='a-header' href=''>PRODUTOS</a>
                    <a className='a-header' href=''>SOBRE</a>
                    <a className='a-header' href=''>CONTATO</a>
                </nav>
            </div>
        </header>
    );
}