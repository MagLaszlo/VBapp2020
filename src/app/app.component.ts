import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VBapp2020';
  //counter =100;

  constructor(private baseService: BaseService<Team>) {

  }

    ngOnInit() {
      this.baseService.getAll('teams').subscribe(
        teams => console.log(teams),
        err => console.error(err)
      );
    }
    //setInterval( () => {
    //  this.counter--;
    //}, 1000);
  

}
