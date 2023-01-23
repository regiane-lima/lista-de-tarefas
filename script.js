//pegando os elementos
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
noteIcon =  document.querySelector(".material-symbols-outlined")
clearButton = document.querySelector(".clear-button"),
pendingNum = document.querySelector(".pending-num");

function allTasks(){
    let tasks = document.querySelectorAll(".pending") 
    // se não tiver nenhuma tarefa a fazer escrever 0 na classe pendingNum 
    pendingNum.textContent = tasks.length === 0? "0" : tasks.length 
    let allLists = document.querySelectorAll(".list") 
    if (allLists.length > 0){
        todoLists.style.marginTop = "20px"
        return
    } 
    todoLists.style.marginTop = "0px"

}

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim()
    if (e.key === "Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task">  ${inputVal}</span>
        <span class="material-symbols-outlined" onclick="deleteTask(this)">
        auto_delete
        </span>
    </li>`

todoLists.insertAdjacentHTML("beforeend", liTag)
inputField.value=  ""
    allTasks()

    }
})
// marcando e desmarcando a caixa de seleção enquanto clicamos na tarefa
function handleStatus(e){
    const checkbox = e.querySelector("input") 
    checkbox.checked = checkbox.checked ? false : true
    e.classList.toggle("pending")
    allTasks()
}

// deletando as tags quando clicamos no botão "apagar tudo"
clearButton .addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks()
})

// deletar a tarefa quando clicamos no icon da lixeira
function deleteTask(e){
    e.parentElement.remove()
    allTasks()
}

function adicionaTask(){
    let liTag = `<li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox">
    <span class="task">  ${inputVal}</span>
    <span class="material-symbols-outlined" onclick="deleteTask(this)">
    auto_delete
    </span>
</li>`
}