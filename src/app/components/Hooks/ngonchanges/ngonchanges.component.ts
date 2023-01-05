import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchanges',
  templateUrl: './ngonchanges.component.html',
  styleUrls: ['./ngonchanges.component.css']
})
export class NgonchangesComponent implements OnChanges {

  constructor() { }

  /*Execute when props values changes*/
  ngOnChanges(changes: SimpleChanges){
    console.log('The changes are: '+changes)
  }

}
