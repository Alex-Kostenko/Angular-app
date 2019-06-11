import { Component, OnInit } from '@angular/core';

export interface Student {
  name: string;
  section: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass', ]
})

export class TestComponent implements OnInit {
  name = '';
  count = 1;
  show: boolean = true;

  arr = ['a', 'b'];
  arr2 = [ 1,2,3,4,5,6,7,8,9 ]

  text = 'Hello Word';
  text1 = 'текст1';

  constructor() { }

  ngOnInit() {

  }
}

// class User {
//   name;
//   age;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user1 = new User('vasa', 12);
// const user2 = new User('a', 1);

// console.log('User Agge', user1.age);


