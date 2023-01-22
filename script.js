// Selecionando e transformando os elementos do html em variáveis e adicinando os requisitos da biblioteca
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
// --- 

// Adicionando os "Escutadores de evento" click(Ao clicar no botão "Registrar o meu dia", ele executa a função "add") e change(Ao haver alguma mudança no formulário de hábitos ele executa a função "save")
button.addEventListener('click', add)
form.addEventListener("change", save)
// ---

// Função add: Adiciona o dia e faz a verificação se o dia ja está incluso ou não
function add(){

    const today = new Date().toLocaleDateString('pt-bt').slice(0,-5) // Função que cria uma nova data e transforma ela no formato brasileiro e retira o ano através da função do js slice() pra ficar no padrão da biblioteca
    
    const dayExists = nlwSetup.dayExists(today) // Função da biblioteca que verifica se o dia já existe

    if(dayExists) {
        alert('Dia já incluso! ❌')
        return
    }

    alert('Dia adicionado com sucesso! ✅')
    nlwSetup.addDay(today)
}

// Função que salva as informações do formulário no Local Storage
function save() {
    localStorage.setItem('NLWSetuphabits', JSON.stringify(nlwSetup.data)) 
}


const data = JSON.parse(localStorage.getItem("NLWSetuphabits")) || {}
nlwSetup.setData(data) 
nlwSetup.load()

