import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

counter=0
salary= 88
friends= ['Tanvi','Ankit','Mehul','Mayank']
myDate= new Date()

myTasks= [
          'Go and get some lassi',
          'Plan the weekend',
          'Identify some examples',
          'Some more task....'
]
taskCompleted=[
]
  constructor() { }

  ngOnInit() {
  }
sayHello = function(){
  ++this.counter
  console.log("button clicked" + this.counter);
  this.myTasks.push(this.oneTask)
  this.oneTask = ""  
}

taskDone(ct){
console.log("Index value: " + ct);
this.taskCompleted.push(this.myTasks[ct]);
this.myTasks.splice(ct,1)

}
}



