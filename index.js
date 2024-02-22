const saudacao = () => {
    var data = new Date()
    return data.getHours() < 12? "Bom dia": data.getHours() < 18? "Boa tarde" : "Boa noite"
}

aloMundo();
console.log("A saudação é: " + saudacao)


console.log('')

let test = 10

switch(test){
    case 1 : print('1')
}