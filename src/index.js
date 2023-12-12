import { showProjectTasks, showAllProjects, buttonAddProject, ActivateHideParentElementButton, ActivateProjectSubmitButton} from "./dom"

const taskFactory = (title, description, dueDate, priority) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        editTask: (key, newInput) => this[key] =  newInput,
    }
}

const projectFactory = () => {
    return {
         addTask: (title, description, dueDate, priority) => {
            this[title] = taskFactory(title, description, dueDate, priority)
        },
         removeTask: (task) => delete this[task]
     }
 }

 const todoListFactory = () => {
    return {
        addProject: (name) => this[name] = projectFactory(),
        deleteProject: (name) => delete this[name],
        editProjectName: (name, newName) => {
            this[newName] = this[name];
            delete this[name];
        },
    }
 }

 



const todolistMock = {a: {one:{title: "asdf", description: 'adsf2', dueDate: "now"},
 two:{title: "asdf", description: 'adsf2', dueDate: "then"}}
 , b:{}, c:{}};
showAllProjects(todolistMock);
showProjectTasks(todolistMock.a);
buttonAddProject();
ActivateHideParentElementButton();
ActivateProjectSubmitButton();