class Cabecalho extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <img class="senai" src="logo-senai1.png" />
        <p></p>
        <button class="caixa"></button>
        <div class="classe">POO</div>
        <div class="bola"></div>
        <div class="aluno">Aluno</div>`
    }
}

customElements.define("cabecalho-materias", Cabecalho);