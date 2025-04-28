
const taksinput = document.getElementById("taskInput")


const addBtn = document.getElementById("addBtn")

const tasklista = document.getElementById("tasklista")



addBtn.addEventListener("click", ()=>{

    const taskText = taksinput.value
    if(taskText ==="")return
    
    const li = document.createElement("li")
    li.innerText = taskText
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "remover"
    removeBtn.style.color = "blue"

    removeBtn.addEventListener("click", ()=>{
        tasklista.removeChild(li)
    })



    tasklista.appendChild(li)
    li.appendChild(removeBtn)
    taksinput.value = ""

})

