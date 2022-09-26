var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "../img/ds.svg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDC",
        "icone" :   "../img/rdc.svg",
        "carga" :   "1200"
    }
];

const getCursos = function() {

    let listaCursos = [];
    let erro = true;

    //percorre o array princiapl de cursos
    cursos.forEach(item => {

            //adiciona no array um JSON com todos os elementos solicitados
            listaCursos.push(
            {
                nome: item.nome,
                sigla: item.sigla,
                icone: item.icone,
                carga: item.carga
            }
        );

        erro = false;

    });


    if(erro) {

        return false;

    }
    else {

        return listaCursos;

    }

}

module.exports = {

    getCursos

}