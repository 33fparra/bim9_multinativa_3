import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ngondestroy',
  templateUrl: './ngondestroy.component.html',
  styleUrls: ['./ngondestroy.component.css']
})
export class NgondestroyComponent implements OnDestroy {

  constructor() { }


  /*Before deleting or destroy a comp*/
  ngOnDestroy(){

  }

}
