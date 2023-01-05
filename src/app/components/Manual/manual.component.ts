import {Component} from '@angular/core'

@Component({
    selector: 'manual',
    templateUrl: './manual.component.html'
})

export class Manual{
    public comp = 'Test manual'
    public classname : string //must be initialized in the class constructor

    constructor(){
        this.classname = 'Multiplataforma'
    }
    
}

