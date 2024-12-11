// 3 TIPOS DE DECLARAR FUNÇÕEES NO JAVASCRIPT

function teste () {
    console.log('Função declarada')
    } teste()

const teste2 = () => {
    console.log('Função declarada com arrow function')
    } 
    teste2()

{
    function a (nome){
        nome = "Paulo"
        console.log('Função declarada dentro de bloco com variavel nome: ' + nome )
    }
}a();

teste()
teste2()
a()
