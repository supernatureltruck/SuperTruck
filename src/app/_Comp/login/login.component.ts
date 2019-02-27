import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Statut de connexion
  authStatus: boolean;

  //regex pour email
  public email: string = '';
  filter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  public password: string='';

  loginForm = this.formBuilder.group({
    connexion: this.formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(3), Validators.pattern(this.filter)])],
      password:['']
    },)
  });
  public error: boolean = false;

  

  constructor(private router:Router, private userService : UserService,private formBuilder: FormBuilder) { }

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
