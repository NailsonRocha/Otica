import React from 'react';

import { Banner } from './SecaoBanner';
import { Produtos } from './SecaoProdutos';
import { Sobre } from './SecaoSobre';
import { Contatos } from './SecaoContatos';

export default function Conteudo () {
    return (
        <main>
            <Banner />
            <Produtos />
            <Sobre />
            <Contatos />
        </main>
    );
}