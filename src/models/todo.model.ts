class Todo{
    _id: string;
    actionBy: string;
    task: string;
    status?: string;

    constructor(id: string, actionBy: string, task: string, status?: string){
        this._id = id;
        this.actionBy = actionBy;
        this.task = task;
        this.status = status;
    }
};

export default Todo;