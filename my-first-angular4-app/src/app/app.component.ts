import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'From javascript of root component';
 user : string = "Testing attribute directive";

 constructor(){

 }
 
}
