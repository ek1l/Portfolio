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
  {
    titulo: "Projeto Figma / site de carros",
    imagem: "./Assets/img/site-car.png",
    descricao: "Página feita para estudo usando exemplo do Figma.",
    tecnologias: "Html, Css, JS",
    link: "https://ek1lcars.pages.dev/",
  },


  {
    titulo: "Projeto Quality Glass",
    imagem: "./Assets/img/quality.jpg",
    descricao: "Projeto feito para uma empresa de acabamentos. ",
    tecnologias: "Html, Css, JS",
    link: "https://qualityglass.pages.dev/",
  },

  {
    titulo: "Projeto Truly Nolen",
    imagem: "./Assets/img/truly.png",
    descricao: "Projeto desenvolvido para a empresa Truly Nolen, voltado para mostrar seus serviços e profissionalismo contra pragas. ",
    tecnologias: "Html, Css, JS",
    link: "https://trulynolen.pages.dev/",
  },

  {
    titulo: "Projeto LK Marmoraria",
    imagem: "./Assets/img/marmoraria.png",
    descricao: "Site feito para a empresa LK Marmoraria falar mais da empresa e mostrar seu trabalho.",
    tecnologias: "Html, Css, JS",
    link: "https://marmoraria.pages.dev/",
  },

  {
    titulo: "Projeto RB Pinturas",
    imagem: "./Assets/img/rb.png",
    descricao: "Site feito para a empresa RB Pinturas mostrar fotos de seuus produtos e falar mais sobre a empresa. ",
    tecnologias: "Html, Css, JS",
    link: "https://ek1l.github.io/rbpinturas/",
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
