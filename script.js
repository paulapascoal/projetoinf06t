 //JS do Index
 document.addEventListener('DOMContentLoaded', () => {
    const formDemanda = document.getElementById('form-demanda');
    const inputNovaDemanda = document.getElementById('nova-demanda');
    const listaDemandas = document.getElementById('lista-demandas');

    formDemanda.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const textoDemanda = inputNovaDemanda.value.trim();

        if (textoDemanda !== '') {
            const novoItemLista = document.createElement('li');
            novoItemLista.textContent = textoDemanda;
            listaDemandas.appendChild(novoItemLista);
            inputNovaDemanda.value = ''; 
            alert('Demanda adicionada com sucesso!');
        } else {
            alert('Por favor, digite sua demanda antes de adicionar.');
        }
    });
});

//JS do Alunos

  document.addEventListener('DOMContentLoaded', () => {
    const listaAlunos = document.getElementById('lista-alunos');
    const alunos = listaAlunos.getElementsByTagName('li');
    const btnMostrarTodos = document.getElementById('mostrarTodos');
    const btnMostrarTrilhas = document.getElementById('mostrarTrilhas');
    const btnMostrarPagantes = document.getElementById('mostrarPagantes');

    function filtrarAlunos(categoria) {
        for (let i = 0; i < alunos.length; i++) {
            const aluno = alunos[i];
            const strongTag = aluno.querySelector('strong');
            if (strongTag) {
                if (categoria === 'todos' || strongTag.classList.contains(categoria)) {
                    aluno.style.display = 'list-item'; 
                } else {
                    aluno.style.display = 'none'; 
                }
            }
        }
    }

    btnMostrarTodos.addEventListener('click', () => filtrarAlunos('todos'));
    btnMostrarTrilhas.addEventListener('click', () => filtrarAlunos('trilhas'));
    btnMostrarPagantes.addEventListener('click', () => filtrarAlunos('pagante'));
});

//JS Hierarquia
 let atual = 0;
    const slides = document.querySelectorAll('.slide');
    
    function mudarSlide(direcao) {
      atual += direcao;
      if (atual >= slides.length) {
        atual = 0;
      }
      if (atual < 0) {
        atual = slides.length - 1;
      }
      const carrossel = document.getElementById('carrossel');
      carrossel.style.transform = `translateX(-${atual * 100}%)`;
    }

// Js do Calendário


    document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

       

        alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');

      
        contactForm.reset();
    });
});

// JS do Cadastro

document.addEventListener('DOMContentLoaded', () => {
   
    const cadastroForm = document.getElementById('cadastroForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const confirmarSenhaError = document.getElementById('confirmarSenhaError');
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        let isValid = true;

       
        nomeError.style.display = 'none';
        emailError.style.display = 'none';
        senhaError.style.display = 'none';
        confirmarSenhaError.style.display = 'none';
        cadastroSuccess.style.display = 'none';

        
        if (nomeInput.value.trim() === '') {
            nomeError.textContent = 'Por favor, digite seu nome completo.';
            nomeError.style.display = 'block';
            nomeInput.classList.add('invalid'); 
            isValid = false;
        } else {
            nomeInput.classList.remove('invalid');
            nomeInput.classList.add('valid');
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, digite um e-mail válido.';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
        }

        
        if (senhaInput.value.length < 6) {
            senhaError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
            senhaError.style.display = 'block';
            senhaInput.classList.add('invalid');
            isValid = false;
        } else {
            senhaInput.classList.remove('invalid');
            senhaInput.classList.add('valid');
        }

        
        if (confirmarSenhaInput.value !== senhaInput.value) {
            confirmarSenhaError.textContent = 'As senhas não coincidem.';
            confirmarSenhaError.style.display = 'block';
            confirmarSenhaInput.classList.add('invalid');
            isValid = false;
        } else {
            confirmarSenhaInput.classList.remove('invalid');
            confirmarSenhaInput.classList.add('valid');
        }

        if (isValid) {
            
            cadastroSuccess.style.display = 'block';
            cadastroForm.reset(); 
            
            nomeInput.classList.remove('valid');
            emailInput.classList.remove('valid');
            senhaInput.classList.remove('valid');
            confirmarSenhaInput.classList.remove('valid');
        }
    });

    
    [nomeInput, emailInput, senhaInput, confirmarSenhaInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.remove('invalid');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.remove('invalid'); 
            }
        });
    })
    const cadastroSuccess = document.getElementById('cadastroSuccess');

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    

    if (isValid) {
        
        cadastroSuccess.style.display = 'block';
        cadastroForm.reset(); 
        nomeInput.classList.remove('valid');
        emailInput.classList.remove('valid');
        senhaInput.classList.remove('valid');
        confirmarSenhaInput.classList.remove('valid');
    }
})

// Js da Avaliação 
 
    const quizForm = document.getElementById('quizForm');
    const quizSuccess = document.getElementById('quizSuccess');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        
        document.querySelectorAll('.quiz-question .error-message').forEach(errorDiv => {
            errorDiv.style.display = 'none';
        });
        quizSuccess.style.display = 'none';

       
        const perguntas = ['pergunta1', 'pergunta2', 'pergunta3'];
        perguntas.forEach((nomePergunta, index) => {
            const radios = document.querySelectorAll(`input[name="${nomePergunta}"]`);
            const errorDiv = document.getElementById(`${nomePergunta}Error`);
            let radioSelecionado = false;

            radios.forEach(radio => {
                if (radio.checked) {
                    radioSelecionado = true;
                }
            });

            if (!radioSelecionado) {
                errorDiv.textContent = `Por favor, selecione uma opção para a pergunta ${index + 1}.`;
                errorDiv.style.display = 'block';
                isValid = false;
            }
        });

        if (isValid) {
            quizSuccess.style.display = 'block';
            quizForm.reset(); 
        }
    });
});

//JS menu hamburguer

 document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.querySelector('.hamburger-menu');
        const navList = document.querySelector('nav ul');

        hamburgerBtn.addEventListener('click', function() {
            navList.classList.toggle('active'); 
            hamburgerBtn.classList.toggle('active'); 
        });

        
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) { 
                    navList.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            });
        });
    });