import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-binding',
  templateUrl: './ex-binding.component.html',
  styleUrls: ['./ex-binding.component.css']
})
export class ExBindingComponent implements OnInit {
  constructor() {}

  title = 'Promo LAPOSTE2';
  description = 'Bonjour, il fait beau !';
  user = {
    name: 'Patrick',
    age: '42',
    birthday: new Date('1976/01/02'),
    acceptNL: true
  };
  warning = false;
  textA = 'coucou';
  colors = [
    {
      name: 'rouge',
      value: 'red'
    },
    {
      name: 'vert',
      value: 'green'
    },
    {
      name: 'bleu',
      value: 'blue'
    }
  ];
  color = 'blue';
  visible = true;

  ngOnInit() {}

  getDescription(): string {
    return this.description.toUpperCase();
  }

  changeTitle() {
    this.title = 'Promo LaPOSTE 3';
    this.warning = !this.warning;
  }

  changeTextA(value) {
    this.textA = value;
  }

  changeColor(value) {
    this.color = value;
  }

  acceptNL(bool: boolean) {
    this.user.acceptNL = bool;
  }

}
