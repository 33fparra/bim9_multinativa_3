import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Class/user';
import { Global } from '../global';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  public url: string;

  @Input() users: User[] = [];

  public imgDefault: string = 'assets/default.png';

  constructor() {
    this.url = Global.API;
  }

  ngOnInit(): void {
    console.log(this.users);
  }
}
