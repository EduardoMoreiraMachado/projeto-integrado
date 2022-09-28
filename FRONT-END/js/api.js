'use strict'

const listaCursos = async () => {

    const url = 'http://localhost:3030/cursos';

    const response = await fetch(url);

    const cursos = await response.json();

    return cursos;

}

const listaAlunos = async (filtro) => {

    let sigla = filtro;

    const url = `http://localhost:3030/alunos/?sigla=${sigla}`;

    const response = await fetch(url);

    const alunos = await response.json();

    return alunos;

}

const listaDisciplinas = async (filtro) => {

    let matricula = filtro;
    
    const url = `http://localhost:3030/disciplinas/?matricula=${matricula}`;

    const response = await fetch(url);

    const matriculaAluno = await response.json();

    return matriculaAluno;

}   

const listaAlunosAno = async (filtro, curso) => {

    let ano = filtro;

    let sigla = curso;

    const url = `http://localhost:3030/alunosAno/?ano=${ano}&sigla=${sigla}`;

    const response = await fetch(url);

    const anoConclusao = await response.json();

    return anoConclusao;

}

const listaAlunosStatus = async (filtro, curso) => {

    let status = filtro;

    let sigla = curso;

    const url = `http://localhost:3030/alunosStatus/?status=${status}&sigla=${sigla}`;

    const response = await fetch(url);

    const statusConclusao = await response.json();

    return statusConclusao;

}

export {

    listaCursos,
    listaAlunos,
    listaDisciplinas,
    listaAlunosAno,
    listaAlunosStatus

}