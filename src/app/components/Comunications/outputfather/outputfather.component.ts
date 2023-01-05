import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-outputfather',
  templateUrl: './outputfather.component.html',
  styleUrls: ['./outputfather.component.css']
})
export class OutputfatherComponent {

  public data_output: null

  constructor() { }

  show(e:any){
    this.data_output= e.data.info
  }
}
