const filtBtns = document.querySelectorAll(".task-nav ul li");
const taskName = document.getElementById("taskName");
const prioritySelected = document.getElementById("prioritySelected");
const submitTask = document.getElementById("submitTask");
const inputWarning = document.querySelector(".input-warning");

const completed_tasks = document.getElementById("completed");
const active_tasks = document.getElementById("active");
const all_tasks = document.getElementById("all");

const default_body = document.querySelector(".original")
const default_completed = document.querySelector(".no-completed")
const taskSection = document.querySelector(".tasks-section")

const task_uncomplete = document.querySelector(".tasks-section .top")
const task_complete = document.querySelector(".tasks-section .bottom")

const task_display = document.querySelectorAll(".t-body");

filtBtns.forEach(filtBtn => {

    filtBtn.addEventListener('click', () => {
        filtBtns.forEach(filtBtn => filtBtn.classList.remove("active"))

        filtBtn.classList.add("active")
    })
})

submitTask.addEventListener("click", () => {
    if (taskName.value == '') {
        inputWarning.style.display = 'block';
    } else {
        inputWarning.style.display = 'none';
        createTask(taskName.value)
        clearInput()
    }
})


completed_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_completed.classList.remove('hidden')
})

all_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_body.classList.remove('hidden')
})

active_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_body.classList.remove('hidden')
})

task_uncomplete.addEventListener('click', (event) => {
    if (event.target.classList.contains('markedDone')) {
        if (event.target.src.includes('done.png')) {
            event.target.src = './assets/img/redo.png'
            markComplete(event.target.dataset.id)
            console.log(event.target.dataset.id)
            // console.log((event.target.id))
        } else {
            event.target.src = './assets/img/done.png'
            redoTask(event.target.dataset.id)
        }
    } else if (event.target.classList.contains('deleteTask')) {
        deleteTasks(event.target.dataset.id)
        // displayTasks()
    }
})

task_complete.addEventListener('click', (event) => {
    if (event.target.classList.contains('markedDone')) {
        if (event.target.src.includes('done.png')) {
            event.target.src = './assets/img/redo.png'
            markComplete(event.target.dataset.id)
            console.log(event.target.dataset.id)
            // console.log((event.target.id))
        } else {
            event.target.src = './assets/img/done.png'
            redoTask(event.target.dataset.id)
        }
    } else if (event.target.classList.contains('deleteTask')) {
        deleteTasks(event.target.dataset.id)
        // displayTasks()
    }
})



const tasksCreated = [
    /**
     * {
            "id": 0,
            "title": "test",
            "priority": "",
            "isCompleted": false,
            "createdAt": true
        }
     */
]

console.log(tasksCreated)


function createTask(title) {
    let new_obj = {}
    new_obj.id = Date.now().toString()
    new_obj.title = taskName.value
    new_obj.priority = prioritySelected.value
    new_obj.isCompleted = false
    new_obj.createdAt = Date.now()

    console.log(new_obj)
    tasksCreated.push(new_obj)
    displayTasks()
    // count++
}

function addTask(obj) {
    tasksCreated.push(obj)

    displayTasks();
}

let objCount = 0

function displayTasks() {

    task_display.forEach(element => {
        if (!(element.classList.contains("hidden"))) {
            element.classList.add("hidden")
        }
    })

    taskSection.classList.remove("hidden")
    document.querySelector(".task-body").style.backgroundColor = '#F8F9FF'
    
    task_uncomplete.innerHTML = tasksCreated
    .filter(eachObj => !eachObj.isCompleted)
    .map((eachObj) => {
            // let task = document.createElement('div')
            return `
                <div class='task' data-id='${eachObj.id}'>
                    <div class="left">
                        <p class="task-name">
                            ${eachObj.title}
                        </p>

                        <p class="${(eachObj.priority)}">
                            ${eachObj.priority}
                        </p>
                    </div>

                    <div class="right">
                        <img src="./assets/img/done.png" alt="checkmark icon" class ="markedDone" data-id='${eachObj.id}'>
                        <img src="./assets/img/delete.png" alt="delete icon" class ="deleteTask" data-id='${eachObj.id}'>
                    </div>
                </div>
            `

         // task_uncomplete.insertAdjacentElement('beforeend', task)
        // console.log(task)
        // task_uncomplete.insertAdjacentElement('beforeend', task)
    }).join(' ')

   task_complete.innerHTML = tasksCreated
   .filter(eachObj => eachObj.isCompleted)
   .map((eachObj) => {
        return `
                <div class='task' data-id='${eachObj.id}'>
                    <div class="left">
                        <p class="task-name">
                            ${eachObj.title}
                        </p>

                        <p class="${(eachObj.priority)}">
                            ${eachObj.priority}
                        </p>
                    </div>

                    <div class="right">
                        <img src="./assets/img/redo.png" alt="checkmark icon" class="markedDone" data-id='${eachObj.id}'>
                        <img src="./assets/img/delete.png" alt="delete icon" class="deleteTask" data-id='${eachObj.id}'>
                    </div>
                </div>
        `
   }).join('')



    if (tasksCreated.length == 0) {
        console.log('Seen')
        task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_body.classList.remove('hidden')
    document.querySelector('.task-body').style.backgroundColor = '#FFFFFF'
    }
}

// let count = 0


function deleteTasks(id) {
    let index = tasksCreated.findIndex(obj => obj.id === id)

    if (index !== -1) tasksCreated.splice(index, 1)

    displayTasks()
}

function markComplete(id) {
    const task = tasksCreated.find(obj => obj.id === id)
    if (task) task.isCompleted = true
    displayTasks()
}

function redoTask(id) {
    const task = tasksCreated.find(obj => obj.id === id)
    if (task) task.isCompleted = false
    displayTasks()
}


function clearInput() {
    taskName.value = ''
}