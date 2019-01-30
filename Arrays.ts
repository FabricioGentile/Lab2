let MyTasks: Array<string> = [];

function addTasks(task:string): number{
    return MyTasks.push(task);
}

function listAllTasks(): void{
    console.log("begining of array")
    MyTasks.forEach(function(task){
        console.log(task);
    })
    console.log("End of the Array");
}

function deleteTasks(task: string): number{
    let index: number = MyTasks.indexOf(task);
    
    if (index > -1){
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item not founded");
    }

    return MyTasks.length;
}



