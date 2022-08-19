import React from 'react';
import './estilo.css';

export function Produtos () {
    return (
        <section className='produtos'>
            
            <div className='legenda-produtos'>
                <h2>Nossos produtos</h2>

                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className='oculos-produtos'>
                <div className='expositor'>
                    <h3>Óculos de grau</h3>
                    <img className='imagem-produtos' src="../assets/oculos01.png" alt="Óculos de grau"/>
                    <p>R$ 500,00</p>
                </div>

                <div className='expositor'>
                    <h3>Óculos transition</h3>
                    <img className='imagem-produtos' src="../assets/oculos02.png" alt="Óculos transition"/>
                    <p>R$ 750,00</p>
                </div>

                <div className='expositor'>
                    <h3>Óculos de sol</h3>
                    <img className='imagem-produtos' src="../assets/oculos03.png" alt="Óculos de sol"/>
                    <p>R$ 700,00</p>
                </div>

                <div className='expositor'>
                    <h3>Óculos infantil</h3>
                    <img className='imagem-produtos' src="../assets/oculos04.png" alt="Óculos infantil"/>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <h3 className='description'>Todos os nossos produtos incluem:</h3>

            <div className='lista-produto'>
                <ul className='lista-produtos'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}