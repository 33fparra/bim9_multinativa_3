import { Component, OnInit } from '@angular/core';
import { User } from '../../Class/user';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  public user: User

  constructor() { 
    this.user = new User('','','','','', false)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
  }

}
