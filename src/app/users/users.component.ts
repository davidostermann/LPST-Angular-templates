import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() {}
  selectedUser: User;
  users: User[] = [
    {
      id: 0,
      name: 'Aisha Eichmann',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
      jobTitle: 'Customer Division Assistant'
    },
    {
      id: 1,
      name: 'Calista Skiles',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
      jobTitle: 'Dynamic Solutions Orchestrator'
    },
    {
      id: 2,
      name: 'Kristofer Hermiston',
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
      jobTitle: 'Dynamic Markets Planner'
    }
  ];

  ngOnInit() {}

  selectUser(user: User) {
    this.selectedUser = user;
  }
}
