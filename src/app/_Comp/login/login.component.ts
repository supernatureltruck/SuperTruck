import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    let link = ['menu'];
    this.router.navigate(link);
  }

  annuler(){
      history.back();
  }


}
