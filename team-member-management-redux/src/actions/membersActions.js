export const add = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}

export const update = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
}

export const Delete = (data) => {
    return {
        type: "DELETE",
        payload: data
    }
}

export const updateIndex = (index) => {
    return {
        type: "UPDATE_INDEX",
        payload: index
    }
}

export const toggleAddTask = (value) => {
    return {
        type: 'TOGGLE_ADD_TASK',
        payload: value
    }
}
