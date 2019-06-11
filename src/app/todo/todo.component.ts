import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  list = [
    {task: 'task1', isDone: false, isEdit: false},
    {task: 'task2', isDone: false, isEdit: false},
    {task: 'task3', isDone: true, isEdit: false},
    {task: 'task4', isDone: false, isEdit: false},
    {task: 'task5', isDone: false, isEdit: false},
  ];

  valueInput;

  handleClick (newItem) {
    console.log(this.list,newItem);
    this.list.push({task: newItem, isDone: false, isEdit:false});
    console.log(this.list);
  };

  handleClickRemove(i) {
    const arr1 = this.list.slice(0, i);
    const arr2 = this.list.slice(i+1);
    console.log(arr1, arr2);
    const newArr = arr1.concat(arr2);

    this.list = newArr;
    
  };

  constructor() { }
  ngOnInit() {
  }
}
