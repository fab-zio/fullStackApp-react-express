// that's going to be a template for all changes TO OUr application state we might want to do

export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_COMPLETE = 'CREATE_TASK_COMPLETE';
export const CREATE_TASK_GROUP = 'CREATE_TASK_GROUP';
export const CREATE_TASK_NAME = 'CREATE_TASK_NAME';

export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskID, groupID, ownerID) => ({
    type: CREATE_TASK,
    taskID,
    groupID,
    ownerID
});
export const setTaskComplete = (id, isComplete) => ({
    type: CREATE_TASK_COMPLETE,
    taskID: id,
    isComplete
})
export const setTaskGroup = (id, groupID) => ({
    type: CREATE_TASK_GROUP,
    taskID: id,
    groupID
})
export const setTaskName = (id, name) => ({
    type: CREATE_TASK_NAME,
    taskID: id,
    name
})