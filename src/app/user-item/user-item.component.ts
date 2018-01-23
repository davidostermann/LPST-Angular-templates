import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  constructor() {}

  @Input() userInfo: User;
  @Output() select = new EventEmitter<User>();

  ngOnInit() {}

  selectHandler(e) {
    e.preventDefault();
    this.select.emit(this.userInfo);
  }
}
