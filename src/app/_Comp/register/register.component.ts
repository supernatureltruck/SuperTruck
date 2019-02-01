import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../register/confirm-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  public email: string ='';
    filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  public pw1: string ='';
     strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

     public pw2: string ='';
    
  connexionForm = this.formBuilder.group({
    connexion: this.formBuilder.group({
     email: ['',Validators.compose([Validators.minLength(3), Validators.pattern(this.filter)])],
     pw1: ['',Validators.compose([Validators.minLength(6),Validators.pattern(this.strongRegex)])],
     pw2:[''],    
    }
    ,{
      validator: ConfirmPasswordValidator.MatchPassword
   })
  });
  public error : boolean = false;

  constructor(private formBuilder: FormBuilder,  private router: Router) { }

  ngOnInit() {
  }
  valider(){
    //console.log(this.connexionForm);
    if(this.connexionForm.status=="VALID"){
      let link = ['menu'];
      this.router.navigate(link);
    }else{
      //alert("error");
      document.getElementById('divErreur').style.display='block'
  }
}
annuler(){
  history.back();
}

}
