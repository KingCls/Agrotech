 function iniciarNavegacaoSuave() {
          const links = document.querySelectorAll('.nav li a');
          
          links.forEach(link => {
              link.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const href = this.getAttribute('href');
                  if (href === '#') return;
                  
                  const secaoAlvo = document.querySelector(href);
                  if (secaoAlvo) {
                      window.scrollTo({
                          top: secaoAlvo.offsetTop,
                          behavior: 'smooth'
                      });
                  }
              });
          });
      }

      document.addEventListener('DOMContentLoaded', iniciarNavegacaoSuave);

      
document.addEventListener('DOMContentLoaded', function() {
          iniciarNavegacaoSuave();
          
          // Validação do formulário baseada nos requisitos da imagem
          const nome = document.getElementById('nome');
          const email = document.getElementById('email');
          const assunto = document.getElementById('assunto');
          const mensagem = document.getElementById('mensagem');
          const form = document.getElementById('contactForm');

      // Função para validar nome completo
      function validarNomeCompleto(nomeValue) {
          const nomeArray = nomeValue.trim().split(' ');
          return nomeArray.length >= 2 && nomeArray.every(parte => parte.length > 0);
      }

      // Função para validar email
      function validarEmail(emailValue) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(emailValue);
      }

      // Validação em tempo real do nome
      nome.addEventListener('input', function() {
          const nomeValue = this.value.trim();
          
          if (nomeValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (!validarNomeCompleto(nomeValue)) {
              this.setCustomValidity('Tem que ter mais de um nome (com sobrenome).');
          } else {
              this.setCustomValidity('');
          }
      });

      nome.addEventListener('invalid', function() {
          const nomeValue = this.value.trim();
          
          if (nomeValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (!validarNomeCompleto(nomeValue)) {
              this.setCustomValidity('Tem que ter mais de um nome (com sobrenome).');
          }
      });

      // Validação em tempo real do email
      email.addEventListener('input', function() {
          const emailValue = this.value.trim();
          
          if (emailValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (!validarEmail(emailValue)) {
              this.setCustomValidity('Ter que ser um e-mail no formato válido.');
          } else {
              this.setCustomValidity('');
          }
      });

      email.addEventListener('invalid', function() {
          const emailValue = this.value.trim();
          
          if (emailValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (!validarEmail(emailValue)) {
              this.setCustomValidity('Ter que ser um e-mail no formato válido.');
          }
      });

      // Validação do assunto
      assunto.addEventListener('input', function() {
          if (this.value.trim() === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else {
              this.setCustomValidity('');
          }
      });

      assunto.addEventListener('invalid', function() {
          if (this.value.trim() === '') {
              this.setCustomValidity('Não pode ser em branco.');
          }
      });

      // Validação da mensagem
      mensagem.addEventListener('input', function() {
          const mensagemValue = this.value.trim();
          const length = mensagemValue.length;
          
          if (mensagemValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (length < 30 || length > 500) {
              this.setCustomValidity('Tem que ter ao menos 30 caracteres e no máximo 500 caracteres.');
          } else {
              this.setCustomValidity('');
          }
      });

      mensagem.addEventListener('invalid', function() {
          const mensagemValue = this.value.trim();
          const length = mensagemValue.length;
          
          if (mensagemValue === '') {
              this.setCustomValidity('Não pode ser em branco.');
          } else if (length < 30 || length > 500) {
              this.setCustomValidity('Tem que ter ao menos 30 caracteres e no máximo 500 caracteres.');
          }
      });

      // Validação no envio do formulário
      if (form) {
          form.addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Validar todos os campos
              let isValid = true;
              
              // Validar nome
              if (nome.value.trim() === '' || !validarNomeCompleto(nome.value.trim())) {
                  nome.reportValidity();
                  isValid = false;
              }
              
              // Validar email
              if (email.value.trim() === '' || !validarEmail(email.value.trim())) {
                  email.reportValidity();
                  isValid = false;
              }
              
              // Validar assunto
              if (assunto.value.trim() === '') {
                  assunto.reportValidity();
                  isValid = false;
              }
              
              // Validar mensagem
              const mensagemLength = mensagem.value.trim().length;
              if (mensagem.value.trim() === '' || mensagemLength < 30 || mensagemLength > 500) {
                  mensagem.reportValidity();
                  isValid = false;
              }
              
              if (isValid) {
                  alert('Formulário enviado com sucesso!');
                  form.reset();
              }
          });
      }
});

 // ===== FUNCIONALIDADE FAQ =====
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
          question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = this.classList.contains('active');
            
            // Fechar todas as outras perguntas
            faqQuestions.forEach(q => {
              q.classList.remove('active');
              q.parentElement.querySelector('.faq-answer').classList.remove('active');
            });
            
            // Se a pergunta clicada não estava ativa, abrir ela
            if (!isActive) {
              this.classList.add('active');
              faqAnswer.classList.add('active');
            }
          });
        });

        // ===== FUNCIONALIDADE BOTÃO VOLTAR AO TOPO =====
        const backToTopButton = document.getElementById('backToTop');
        
        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
          } else {
            backToTopButton.classList.remove('show');
          }
        });
        
        // Ação do clique do botão
        backToTopButton.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
  