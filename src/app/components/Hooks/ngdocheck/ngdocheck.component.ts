import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ngdocheck',
  templateUrl: './ngdocheck.component.html',
  styleUrls: ['./ngdocheck.component.css']
})
export class NgdocheckComponent implements DoCheck {

  constructor() { }
  /*Every time there is a change in the component or module in the NG app*/
  ngDoCheck(){

  }

}
