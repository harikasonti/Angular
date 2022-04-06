import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedbackManagement';
  username: string="";
  password: string="";
  show:boolean=false;

  constructor(private router: Router) { }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(['/businesshouse']);
     this.show=true;
    }else {
      alert("Invalid credentials");
    }

  }
}
