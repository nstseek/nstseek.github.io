// all units in px
let cardSideMargin = 12;
let cardWidth = 225;
let cardSize = cardWidth + (cardSideMargin*2);
let div_Allpadding = 30;
let div_AllinternalSpace = document.querySelector('#all').scrollWidth - (div_Allpadding * 2);
let cardsShown = (div_AllinternalSpace / cardSize) - ((div_AllinternalSpace / cardSize) % 1);
let newCardsShown;
document.querySelector("#container").style.width = cardsShown * cardSize;
windowResized = () => {
    div_AllinternalSpace = document.querySelector('#all').scrollWidth - (div_Allpadding * 2);
    newCardsShown = (div_AllinternalSpace / cardSize) - ((div_AllinternalSpace / cardSize) % 1);
    if(cardsShown != newCardsShown && newCardsShown != 0) {
        cardsShown = newCardsShown;
        document.querySelector("#container").style.width = cardsShown * cardSize;
    }
};
window.addEventListener('resize', windowResized);

//  anotacoes:
/*  esse script serve pra dar um resize na div container, de forma que ela venha sempre a estar no centro
    da tela, mesmo com os itens começando na esquerda, com justify-content: flex-start, isso foi feito 
    usando js para calcular o tamanho de um card dentro da div e fazendo com que o js atribua valores de
    largura para a div baseado no espaço disponivel, apenas valores multiplos do cardWidth(tamanho do card),
    fazendo assim com que a div sempre tenha o tamanho certinho de 1, 2, 3 ou mais cards e o margin: auto
    fique como responsavel por fazer a div sempre ficar no meio, e o display: flex e justify-content: flex-start
    da div ficam responsaveis por sempre fazer os itens começarem na esquerda da div
*/
//  observacoes:
/*  a propriedade scrollWidth de document.querySelector('#all').scrollWidth retorna o tamanho inteiro da div,
    sem contar com o padding interno dela, portanto, precisamos levar isso em conta na hora de calcular o 
    espaço interno da div, acredito que se fosse e nao padding nao teriamos esse problema, mas nao testei
*/