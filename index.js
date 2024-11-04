/* Valores iniciais das variáveis no css
// --primary-dark-color: #002a64;
// --primary-light-color: #fdf9e6;
// --text-font: "League Gothic", sans-serif;
// --title-font: "Sofia", cursive;
*/
const form = document.querySelector('form')
const toggleBtn = document.getElementById('switch-mode-button')

toggleBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (toggleBtn.dataset.modeOn === 'onLight') {
        document.getElementById('switch-icon').setAttribute('src', 'images/sun.png')
        toggleBtn.dataset.modeOn = 'onDark'
        const root = document.documentElement
        root.style.setProperty('--primary-dark-color', '#fdf9e6')
        root.style.setProperty('--primary-light-color', '#002a64')

    } else if (toggleBtn.dataset.modeOn === 'onDark') {
        document.getElementById('switch-icon').setAttribute('src', 'images/moon.png')
        toggleBtn.dataset.modeOn = 'onLight'
        const root = document.documentElement
        root.style.setProperty('--primary-dark-color', '#002a64')
        root.style.setProperty('--primary-light-color', '#fdf9e6')
    }
})

const nameField = document.getElementById('name-input')
const emailField = document.getElementById('email-input')
const passwordField = document.getElementById('password-input')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const nameRegex = /^[a-z]+$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[^\s]+$/
    
  
    const errors = []


    if (!nameRegex.test(nameField.value)) {
        errors.push("\nO campo 'NOME' só pode conter letras minúsculas e sem espaços.\n")
    }
    

    if (!emailRegex.test(emailField.value)) {
        errors.push("\nO campo 'EMAIL' não está em um formato válido.\n")
    }
    
 
    if (!passwordRegex.test(passwordField.value)) {
        errors.push("\nO campo 'SENHA' deve conter pelo menos uma letra minúscula, uma letra maiúscula, um caractere especial e não pode ter espaços.\n")
    }
    
    if (errors.length > 0) {
        alert("Cadastro falhou:\n" + errors.join("\n"))
    } else {
        alert('\nCadastro realizado com sucesso\n')
    }
})



