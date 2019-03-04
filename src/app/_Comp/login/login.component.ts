import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Auth } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  ROLE = "role";

  //Statut de connexion
  authStatus: boolean;
  listes=[];
  id:any;
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

  

  constructor(private router:Router, private userService : UserService,private formBuilder: FormBuilder, private auth: Auth) { }

  ngOnInit() {
  }

   login(form) {
    this.auth.login(form.value.connexion)
    .subscribe((res:any) => {
      this.auth.authenticated(res);
      this.userService.getUserByMail( localStorage.getItem('mail'))
      .subscribe((user:any) => {
         if(user.roles[0].id == "1"){
        localStorage.setItem(this.ROLE, "1");
        this.router.navigate(['/gcom']);
      } else {
        localStorage.setItem(this.ROLE, "2");
        this.router.navigate(['/menu']);
      }
      })
    })
   }

  annuler(){
      history.back();
  }


}
