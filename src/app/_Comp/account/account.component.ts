import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/_services/auth.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = localStorage.getItem("mail");
  profil = [];

  listes = [];

  model: any = {};
  public mail: string = '';
  filter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;


  
  


  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUserByMail(this.email);
  }

  getUserByMail(email) {
    this.userService.getUserByMail(email)
    .subscribe(data => this.profil = data);
  }

  editProfil(form){
    console.log(localStorage.getItem('id'));
    const user = {
      firstname: form.value.firstname, 
      lastname:form.value.lastname, 
      phone:form.value.phone
    };
    console.log(user);
    console.log(form.value);
    this.userService.edit(form.value,localStorage.getItem('id'))
    .subscribe(user => {
      console.log(user)
      //this.router.navigate([`./contact`]);
    });
      
  }
}
