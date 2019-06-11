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

  text = 'Hello Word';
  text1 = 'текст1';

  constructor() { }

  ngOnInit() {

  }
}
