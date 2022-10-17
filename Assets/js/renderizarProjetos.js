const listaProjetos = [
  {
    titulo: "PetShop",
    imagem: "./Assets/img/PetDev.png",
    descricao:
      "Site responsivo de um Petshop. Projeto construído para uma empresa de PetShop visando agilidade no atendimento.",
    tecnologias: "Html, Css, Js",
    link: "https://petshop-freela.pages.dev/",
  },
  {
    titulo: "Site para Psicólogos e Coachings",
    imagem: "./Assets/img/psico.png",
    descricao:
      "Exemplo de um projeto de Psicólogo/Coaching para mostrar mais de seus serviços para as pessoas. Projeto construído para um consultório!",
    tecnologias: "Html, Css",
    link: "https://consultorio-freela.pages.dev/",
  },
  {
    titulo: "Projeto Instituto Hora",
    imagem: "./Assets/img/site-instituto-hora.jpg",
    descricao:
      "Site criado para uma plataforma de cursos / marketing digital. Uma landingpage com design atual, moderno e responsivo.",
    tecnologias: "Html, Css, JS.",
    link: "https://instituto-hora-freela.pages.dev/",
  },
  {
    titulo: "Projeto página de Login",
    imagem: "./Assets/img/site-cadastro.png",
    descricao: "Minha primeira página de Login, fiz apenas para estudo.",
    tecnologias: "Html, Css.",
    link: "https://github.com/ek1l/pagina-de-login-roxa",
  },
  {
    titulo: "Projeto Vidraçaria Borges",
    imagem: "./Assets/img/vidracaria.png",
    descricao: "Página feita para uma vidraçaria. Site criado para falar mais sobre os serviços da empresa.",
    tecnologias: "Html, Css, JS",
    link: "https://vidracariaborges.pages.dev/",
  },
];

function renderizarProjetos() {
  let html = "";
  const containerProjetos = document.querySelector(".projetos__cards");
  listaProjetos.forEach((projeto) => {
    html += `<article class="projetos__card">
    <img class="card__imagem" src=${projeto.imagem} alt="">
    <h3 class="card__titulo">${projeto.titulo}</h3>
    <p class="card__descricao">${projeto.descricao}</p>
    <p class="card__tecnologias">${projeto.tecnologias}.</p>
    <a href=${projeto.link} target="_blank"
        class="btn-padrao btn-padrao-purple"><i class="fa-solid fa-link"></i>Visualizar</a>
    </article>

    `;
  });
  containerProjetos.innerHTML = html;
}
