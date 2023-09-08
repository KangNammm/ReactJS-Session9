const initialState = JSON.parse(localStorage.getItem("jobs")) || [];

export const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            // clone
            const newTodo = [...state];
            newTodo.push(action.payload);
            localStorage.setItem("jobs", JSON.stringify(newTodo));
            return newTodo;
        
        case "delete":
            const upTodo = [...state];
            const upJob = upTodo.filter((job) => job.id !== action.payload);
            localStorage.setItem("jobs", JSON.stringify(upJob));
            return upJob;
        case "check":
            const checkTodo = [...state];
            const index = checkTodo.findIndex((job) => job.id === action.payload)
            console.log(index);
            checkTodo[index].status = !checkTodo[index].status
            return checkTodo;
        default:
            return state;
    }
}