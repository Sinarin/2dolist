export {showAllProjects, showProjectTasks, buttonAddProject, ActivateHideParentElementButton, ActivateProjectSubmitButton};

//takes a list of projects and creates DOM elements on the side back
const showAllProjects = (todoList) => {
    const sideBar = document.querySelector('.sidebar');
    for (let projectName in todoList) {
        if (typeof todoList[projectName] === 'function') {
            continue;
        }
        const projectTab = document.createElement('div');
        projectTab.textContent = projectName;
        console.log(projectName);
        projectTab.title = projectName;
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

const activateButtonHideAddProjectForm = () => {
    const button = document.querySelector('.hideProject');
    const projectDetailEntry = document.querySelector('.addProjectFormContainer');
    button.addEventListener('click', () => projectDetailEntry.hidden = true)
}

const activateDeleteProjectButton = (button) => {
    const projectElement = button.parentNode;
    button.addEventListener('click', () => projectElement.remove)
}


const toggleTaskInfo = () => {
    
}

const ActivateHideParentElementButton = () => {
    const button = document.querySelector('.exit');
    const form = document.querySelector('.addProjectFormContainer')

    button.addEventListener('click', () => form.hidden = true);
}

const ActivateProjectSubmitButton = (todolist, projectFactory) => {
    const button = document.querySelector('#projectSubmit');
    const projectName = document.querySelector('#projectTitle');
    button.addEventListener('click', () => {
        if (projectName.value){
            AddProjectToList(todolist, projectName.value, projectFactory)
            showAllProjects(todolist)
            AddProjectToSideBar()
            alert('asdfa')
            console.log('adsfa')
        }
        else {
            alert('Please Enter a Project Title Name');
            return
        }
    })
}

const AddProjectToList = (todolist, projectName, projectFactory) => {
    todolist[projectName] = projectFactory();
}

const AddProjectToSideBar = (project) => {
    const sideBar = document.querySelector('.sidebar');


}