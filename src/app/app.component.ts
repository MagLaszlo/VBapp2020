import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { Team } from './model/team';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VBapp2020';
  user: any = {};
  constructor(
    private baseService: BaseService<Team>,
    private afAuth: AngularFireAuth   
  ) {

  }

  //counter =100;

  
    ngOnInit() {
      this.afAuth.user.subscribe(
        user => this.user = user,
        err => console.log(err)
      );
    }

    getAllData(){
      this.baseService.getAll('teams').subscribe(
        teams => console.log(teams),
        err => console.error(err)
      );

    }
    //setInterval( () => {
    //  this.counter--;
    //}, 1000); 
  

}
