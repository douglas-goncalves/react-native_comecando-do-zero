import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/tomate.png'
import brocolis from '../../assets/frutas/brocolis.png'
import batata from '../../assets/frutas/batata.png'
import pepino from '../../assets/frutas/pepino.png'
import abobora from '../../assets/frutas/abobora.png'

const cesta = {
    topo:{
        title: "Detalhes da cesta",
    },
    detalhes:{
        nome: "Cesta de Verduras",
        logoFazenda:logo,
        nomeFazenda:"Jenny Jack Farm",
        descricao:"Uma cesta com produtos selecionado cuidadosamente da fazenda para sua Cozinha",
        preco:"R$ 30,00",
        botao:"Comprar"
    },
    items: {
        listTitle: "Itens da cesta",
        listItems:[
            {
                id:1,
                nameItem: "Tomate",
                imageItem: tomate
            },
            {
                id:2,
                nameItem: "Brócolis",
                imageItem: brocolis
            },   
            {
                id:3,
                nameItem: "Batata",
                imageItem: batata
            },
            {
                id:4,
                nameItem: "Pepino",
                imageItem: pepino
            },
            {
                id:5,
                nameItem: "Abóbora",
                imageItem: abobora
            },
        ]
    }
}

export default cesta;