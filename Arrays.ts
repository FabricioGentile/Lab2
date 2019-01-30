let MyTasks: Array<string> = [];

function addTasks(task:string): number{
    return MyTasks.push(task);
}

function listAllTasks(): void{
    for (var i = 0 ; i < MyTasks.length ; i++){
        console.log (i)
    }
}
