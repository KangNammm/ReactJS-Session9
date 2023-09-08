export const act_add = (job) => {
    return {
        type: "add",
        payload: job,
    };
}

export const act_delete = (id) => {
    return {
        type: "delete",
        payload: id,
    };
}
export const act_check = (id) => {
    console.log("dípatch");
    return {
        type: "check",
        payload: id,
    };
}

