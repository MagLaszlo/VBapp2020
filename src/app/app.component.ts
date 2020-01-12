import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VBapp2020';
  counter =100;

  constructor() {
    setInterval( () => {
      this.counter--;
    }, 1000);
  }

}
