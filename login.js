// Adiciona o atributo 'required' aos campos de entrada (opcional)
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('password');
const passwordInput = document.getElementById('password');
 
nameInput.setAttribute('required', true);
emailInput.setAttribute('required', true);
passwordInput.setAttribute('required', true);
 
// Validação de JavaScript
const loginForm = document.getElementById('login_form');
 
loginForm.addEventListener('submit', (event) => {
  // Verifica se algum campo está vazio
  if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
    event.preventDefault(); // Evita o envio do formulário
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
});