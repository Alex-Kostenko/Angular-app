import { Component, OnInit } from '@angular/core';
export const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  newItem;

  mainArray = arr2;

  arrTest =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

  handleClick = (newItem) => {
    // return arr2.push(newItem);
    return this.arrTest.push(newItem);
  }

  constructor() { }
  ngOnInit() {
  }
}

