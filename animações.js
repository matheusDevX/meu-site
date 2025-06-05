// Alterna o tema claro/escuro
function alternarTema() {
  const body = document.body;
  body.classList.toggle('tema-claro');
  const btnTema = document.getElementById('btn-tema');

  if (body.classList.contains('tema-claro')) {
    btnTema.textContent = '☀️';
  } else {
    btnTema.textContent = '🌙';
  }
}

// Scroll suave para seções
function scrollToSection(id) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}

// Alterna o idioma entre Português e Inglês
document.getElementById('btn-lang').addEventListener('click', () => {
  const btn = document.getElementById('btn-lang');
  if (btn.textContent === '🇧🇷') {
    // Muda para inglês
    btn.textContent = '🇺🇸';
    traduzirParaIngles();
  } else {
    // Muda para português
    btn.textContent = '🇧🇷';
    traduzirParaPortugues();
  }
});

function traduzirParaIngles() {
  // Exemplos de tradução simples, personalize conforme o conteúdo do seu site
  document.querySelector('nav ul li:nth-child(1) button').textContent = 'Home';
  document.querySelector('nav ul li:nth-child(2) button').textContent = 'About';
  document.querySelector('nav ul li:nth-child(3) button').textContent = 'Projects';
  document.querySelector('nav ul li:nth-child(4) button').textContent = 'Contact';

  document.querySelector('#inicio h1').innerHTML =
    'Hi, I am a<br />Front-End<br /><span class="destaque">Developer</span>';

  document.querySelector('.lado-direito h2').textContent = 'Matheus';
  document.querySelector('.profissao').textContent = 'Front-End Developer';
  document.querySelector('.bio').textContent = 'Passionate about technology, creative and focused on modern interfaces.';

  document.querySelector('#sobre h2').textContent = 'About';
  document.querySelector('#sobre p').textContent = 'Some description about you here...';

  document.querySelector('#projetos h2').textContent = 'Projects';

  document.querySelector('#contato h2').textContent = 'Contact';
  document.querySelector('label[for="nome"]').textContent = 'Name';
  document.querySelector('input#nome').placeholder = 'Write your name here';
  document.querySelector('label[for="email"]').textContent = 'Email';
  document.querySelector('input#email').placeholder = 'Enter your email here';
  document.querySelector('label[for="mensagem"]').textContent = 'Message';
  document.querySelector('textarea#mensagem').placeholder = 'Write your question here';
  document.querySelector('button.btn').textContent = 'Send';
}

function traduzirParaPortugues() {
  document.querySelector('nav ul li:nth-child(1) button').textContent = 'Início';
  document.querySelector('nav ul li:nth-child(2) button').textContent = 'Sobre';
  document.querySelector('nav ul li:nth-child(3) button').textContent = 'Projetos';
  document.querySelector('nav ul li:nth-child(4) button').textContent = 'Contato';

  document.querySelector('#inicio h1').innerHTML =
    'Olá, sou um<br />Desenvolvedor<br /><span class="destaque">Front-End</span>';

  document.querySelector('.lado-direito h2').textContent = 'Matheus';
  document.querySelector('.profissao').textContent = 'Desenvolvedor Front-End';
  document.querySelector('.bio').textContent = 'Apaixonado por tecnologia, criativo e focado em interfaces modernas.';

  document.querySelector('#sobre h2').textContent = 'Sobre';
  document.querySelector('#sobre p').textContent = 'Alguma descrição sobre você aqui...';

  document.querySelector('#projetos h2').textContent = 'Projetos';

  document.querySelector('#contato h2').textContent = 'Contato';
  document.querySelector('label[for="nome"]').textContent = 'Nome';
  document.querySelector('input#nome').placeholder = 'Escreva seu nome aqui';
  document.querySelector('label[for="email"]').textContent = 'Email';
  document.querySelector('input#email').placeholder = 'Coloque seu email aqui';
  document.querySelector('label[for="mensagem"]').textContent = 'Mensagem';
  document.querySelector('textarea#mensagem').placeholder = 'Escreva sua dúvida aqui';
  document.querySelector('button.btn').textContent = 'Enviar';
}
