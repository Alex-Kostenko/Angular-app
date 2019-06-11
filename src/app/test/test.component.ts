import { Component, OnInit } from '@angular/core';

export interface Student {
  name: string;
  section: string;
  phoneNumber: string;
}

export interface StudentDetails {
  [key: number]: Student; //Or string instead of number
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})


export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}
