import {toDoInterface} from './toDoInterface';

class toDoClass implements toDoInterface{
     MyTasks: Array<string> = [];

    addTasks(task:string): number{
        return this.MyTasks.push(task);
    }

    listAllTasks(): void{
        console.log("begining of array")
        this.MyTasks.forEach(function(task){
            console.log(task);
        })
        console.log("End of the Array");
    }
    

    deleteTasks(task: string): number{
       let index: number = this.MyTasks.indexOf(task);
        
        if (index > -1){
            this.MyTasks.splice(index, 1);
        }
        else {
            console.log("Item not founded");
        }
    
        return this.MyTasks.length;
    }
}

let testClass= new toDoClass();
testClass.addTasks("element1");
testClass.addTasks("element2");
testClass.addTasks("element3");
testClass.addTasks("element4");
testClass.listAllTasks();
testClass.deleteTasks("element2");
testClass.listAllTasks();

