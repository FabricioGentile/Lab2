var MyTasks = [];
function addTasks(task) {
    return MyTasks.push(task);
}
function listAllTasks() {
    console.log("begining of array");
    MyTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of the Array");
}
function deleteTasks(task) {
    var index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item not founded");
    }
    return MyTasks.length;
}
