import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../register/confirm-password.validator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  public email: string ='';
    filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  public mdp1: string ='';
     strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

     public mdp2: string ='';
    
  connexionForm = this.formBuilder.group({
    connexion: this.formBuilder.group({
     email: ['',Validators.compose([Validators.minLength(3), Validators.pattern(this.filter)])],
     mdp: ['',Validators.compose([Validators.minLength(6),Validators.pattern(this.strongRegex)])],
     mdp2:[''],    
    }
    ,{
      validator: ConfirmPasswordValidator.MatchPassword
   })
  });
  public error : boolean = false;

  constructor(private formBuilder: FormBuilder,  private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  addUser(form) {
    this.userService.addUser(form.form.value)
      .subscribe(user => {
        this.router.navigate([`./menu`]);
      });
  }
annuler(){
  history.back();
}

}
