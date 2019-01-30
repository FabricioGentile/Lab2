"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.MyTasks = [];
    }
    toDoClass.prototype.addTasks = function (task) {
        return this.MyTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("begining of array");
        this.MyTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of the Array");
    };
    toDoClass.prototype.deleteTasks = function (task) {
        var index = this.MyTasks.indexOf(task);
        if (index > -1) {
            this.MyTasks.splice(index, 1);
        }
        else {
            console.log("Item not founded");
        }
        return this.MyTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTasks("element1");
testClass.addTasks("element2");
testClass.addTasks("element3");
testClass.addTasks("element4");
testClass.listAllTasks();
testClass.deleteTasks("element2");
testClass.listAllTasks();
