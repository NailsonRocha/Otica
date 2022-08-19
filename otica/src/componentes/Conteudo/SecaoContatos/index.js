import React from 'react';
import './estilo.css';

export function Contatos () {
    return (
        <section className='contatos'>

            <div className='titulo-contatos'>
                <h3>FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

            

            <div className='box-dados'>

                <h3 className='titulo-dados'>Contato</h3>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/local.png" alt="Localização"/>
                    <figcaption>Nova Iguaçu - RJ</figcaption>
                </figure>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/telefone.png" alt='Telefone'/>
                    <figcaption>21 99999 - 9999 </figcaption>
                </figure>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/email.png" alt="Email"/>
                    <figcaption>contato@oticavida.com</figcaption>
                </figure>
            </div>

            

            <div className='box-redes'>

                <h3 className='titulo-redes'>Nossas redes sociais</h3>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/fb.png" alt="Facebook"/>
                    <figcaption>/Oticavida</figcaption>
                </figure>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/ig.png" alt="IG"/>
                    <figcaption>@oticavidarj</figcaption>
                </figure>

                <figure className='figure'>
                    <img className='logo-contato' src="../assets/tt.png" alt="Twitter"/>
                    <figcaption>@oticavidarj</figcaption>
                </figure>
            </div>
        </section>
    );
}