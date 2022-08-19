import React from 'react';
import './estilo.css';

export function Sobre () {
    return (
        <section className='sobre'>
            <div className='titulo-sobre'>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>

            <div className='caixa-sobre'>

                <div className='box1'>
                    <img className='imagem-sobre' src="../assets/loja.png" alt="Imagem ilustrativa"/>
                </div>

                <div className='box2'>
                    <h3>NOSSAS FILIAIS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className='box3'>
                    <h3>ATENDIMENTO FLEXÍVEL</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>

                <div className='box4'>
                <img className='imagem-sobre' src="../assets/atendimento.png" alt="Atendimento"/>
                </div>
            </div>
        </section>
    );
}