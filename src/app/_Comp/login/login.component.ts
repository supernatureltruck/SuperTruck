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
    this.authStatus = this.userService.authStatus;;
  }

  //login() {
  //   const values = this.loginForm.value;
  //   console.log(values.connexion)
  //   let alone = false;
  //   if (values.connexion.email != '') {
  //   this.listes.forEach(function(element) {
  //     if(values.connexion.email === element.values.email){
  //     alone = false;
  //     }
  //   })
    
  //   if (alone) {
  //     console.log('Mail déjà prit !');
  //     alert('Mail déjà utilisé, choisissez un autre mail.')
  //   } else {
  //       this.userService.getUserByKey(values.connexion)
  //       .subscribe(user => {
  //        this.router.navigate([`./menu`]);
  //       });
  //   }
  // } else {
  //   alert('Veuillez remplir tout les champs !');
  // }
  //  } 

   login(form) {
    this.auth.login(form.value.connexion);
    
    let link = ['menu'];
    this.router.navigate(link);
   }

  annuler(){
      history.back();
  }


}
