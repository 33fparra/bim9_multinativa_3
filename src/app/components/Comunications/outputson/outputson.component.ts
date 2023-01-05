import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputson',
  templateUrl: './outputson.component.html',
  styleUrls: ['./outputson.component.css']
})
export class OutputsonComponent  {

  @Output() showData = new EventEmitter()

  public data: {}

  constructor() { 
    this.data = {
      info:'sending info from de Son (outputson.component) to Father (outputfather.component)'
    }
  }

  send(e:any, data:any){
    this.showData.emit({
      data: data
    })
  }

}
