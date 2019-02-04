import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;

  constructor(private router:Router, private userService : UserService) { }

  ngOnInit() {
    this.authStatus = this.userService.authStatus;
  }

  login(){
    this.userService.signIn();
    let link = ['menu'];
    this.router.navigate(link);
  }

  annuler(){
      history.back();
  }


}
