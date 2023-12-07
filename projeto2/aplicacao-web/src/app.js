// aplicacao-web/src/app.js
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://api:3000/alunos');
  const data = await response.json();

  const alunoContainer = document.getElementById('aluno-container');
  data.forEach(aluno => {
    const alunoDiv = document.createElement('div');
    alunoDiv.innerHTML = `<p>Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}</p>`;
    alunoContainer.appendChild(alunoDiv);
  });
});
