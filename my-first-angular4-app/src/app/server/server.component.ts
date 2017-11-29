import {Component, OnInit} from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']

})

export class ServerComponent implements OnInit {
    allowAddingComponent : boolean = false;

    status : string = '';

    constructor() {
        setTimeout(() => {
            this.allowAddingComponent = true;
        }, 2000);
    }

    ngOnInit(){

    }

    setStatus(){
        console.log("Button clicked!..");
        this.status= 'Status : Created!';
    }
}