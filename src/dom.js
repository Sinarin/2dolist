export {showAllProjects, showProjectTasks, buttonAddProject};

//takes a list of projects and creates DOM elements on the side back
const showAllProjects = (todoList) => {
    const sideBar = document.querySelector('.sidebar');
    for (let projectName in todoList) {
        if (typeof todoList[projectName] === 'function') {
            continue;
        }
        const projectTab = document.createElement('div');
        projectTab.textContent = projectName;
        projectTab.addEventListener('click', () => changeProjectDisplayed(todoList[projectName]));
        sideBar.appendChild(projectTab);
    }
}



const showProjectTasks = (project) => {
    const taskList = document.querySelector('.tasklist');
    for (let task in project){
        const taskElement = document.createElement('div');
        //add title as a child to task element
        const title = document.createElement('div');
        title.textContent = project[task]['title'];
        taskElement.appendChild(title);
        //add due date as a child to task element
        const dueDate = document.createElement('span');
        dueDate.textContent = project[task]['dueDate'];
        taskElement.appendChild(dueDate);
        //add hidden description element as a child to task element
        const description = document.createElement('div');
        description.textContent = project[task]['description'];
        description.hidden = true;
        taskElement.appendChild(description);
        
        taskElement.addEventListener('click', () => description.toggleAttribute('hidden'),);
        //add task to task list
        taskList.appendChild(taskElement);
    }
}

const deleteProjectTasks = () => {
    const tasklist = document.querySelector('.tasklist');
    tasklist.innerHTML = "";
}

const changeProjectDisplayed = (project) => {
    deleteProjectTasks();
    showProjectTasks(project);
}

const buttonAddProject = () => {
    const button = document.querySelector('.addProject');
    const projectDetailEntry = document.querySelector('.addProjectFormContainer');
    button.addEventListener('click', () => projectDetailEntry.hidden = false);
}



const toggleTaskInfo = () => {
        
}