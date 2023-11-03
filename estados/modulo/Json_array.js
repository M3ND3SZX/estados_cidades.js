var estadosC = require ('./estado_cidades.js');


const getListaDeEstados = function(){
    let arrayLocal = []
    let jsonEstados = {}
   
    estadosC.estadosCidades.estados.forEach(estado =>{
        arrayLocal.push(estado.sigla)
    });


    jsonEstados.uf = arrayLocal
    jsonEstados.quantidade = arrayLocal.length


     
    return jsonEstados
}

const getDadosEstado = function(sigla){
    let lista = {}
    
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if(sigla == estadosC.estadosCidades.estados[contador].sigla){
            lista.uf = estadosC.estadosCidades.estados[contador].sigla
            lista.descricao = estadosC.estadosCidades.estados[contador].nome
            lista.capital = estadosC.estadosCidades.estados[contador].capital
            lista.regiao = estadosC.estadosCidades.estados[contador].regiao
        }
    }
    return lista
}

const getCapitalEstado = function(sigla){
    let lista = {}
    
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if(sigla == estadosC.estadosCidades.estados[contador].sigla){
            lista.uf = estadosC.estadosCidades.estados[contador].sigla
            lista.descricao = estadosC.estadosCidades.estados[contador].nome
            lista.capital = estadosC.estadosCidades.estados[contador].capital
            
        }
    }
    return lista
}
const getEstadosRegiao = function(regiao){
    let estadosRegiao = {}
    let estados = []


        
        for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
            let info = {}
            if (regiao == estadosC.estadosCidades.estados[contador].regiao){
            info.uf = estadosC.estadosCidades.estados[contador].sigla
            info.descricao = estadosC.estadosCidades.estados[contador].nome
            estados.push(info)
        estadosRegiao.regiao = estadosC.estadosCidades.estados[contador].regiao
        estadosRegiao.estados = estados
        }
    }
        return estadosRegiao
}

const getCapitalPais = function (){
    let listaCapitais = {}
    let capitais = []
    
 
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
     
     if( estadosC.estadosCidades.estados[contador].capital_pais){
      let info = {}
       info.capital_atual = estadosC.estadosCidades.estados[contador].capital_pais.capital
       info.uf = estadosC.estadosCidades.estados[contador].sigla
       info.descricao = estadosC.estadosCidades.estados[contador].nome
       info.capital = estadosC.estadosCidades.estados[contador].capital
       info.regiao = estadosC.estadosCidades.estados[contador].regiao
       info.capital_pais_ano_inicio = estadosC.estadosCidades.estados[contador].capital_pais.ano_inicio
       info.capital_pais_ano_termino = estadosC.estadosCidades.estados[contador].capital_pais.ano_fim
         capitais.push(info)
     listaCapitais.capitais = capitais
      
     }
 }
 return listaCapitais
 }

 const getCidades = function(siglas){
    let listaCidades = {}
    let nomeCidades = []
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if (siglas == estadosC.estadosCidades.estados[contador].sigla)  {
            for(let contador2=0;contador2<estadosC.estadosCidades.estados[contador].cidades.length;contador2++){
                nomeCidades.push(estadosC.estadosCidades.estados[contador].cidades[contador2].nome)
            }
            listaCidades.uf = estadosC.estadosCidades.estados[contador].sigla
            listaCidades.descricao = estadosC.estadosCidades.estados[contador].nome
            listaCidades.quantidade_cidades = nomeCidades.length
            listaCidades.cidades = nomeCidades
        }
    }
        return listaCidades
 }





console.log(getListaDeEstados())
console.log(getDadosEstado('SP'))
console.log(getCapitalEstado('PB'))
console.log(getEstadosRegiao('Norte'))
console.log(getCapitalPais())
console.log(getCidades('AC'))