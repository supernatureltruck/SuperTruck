import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ConfirmPasswordValidator
} from '../register/confirm-password.validator';
import {
  Router
} from '@angular/router';
import {
  UserService
} from 'src/app/_services/user.service';
import {
  formArrayNameProvider
} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Auth } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listes = [];

  model: any = {};
  public mail: string = '';
  filter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  public password: string = '';
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

  public password2: string = '';
  public lastName: string='';
  public firstName: string='';
  public phone: string='';
  

  connexionForm = this.formBuilder.group({
    connexion: this.formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(3), Validators.pattern(this.filter)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.pattern(this.strongRegex)])],
      password2: [''],
      lastName:[''],
      firstName:[''],
      phone:['']
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    }), 
  });
  public error: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: Auth) {}

  ngOnInit() {
  }

  register() {
    console.log();
    this.auth.register(this.connexionForm.value.connexion)
    .subscribe(user => {
      this.router.navigate([`./login`]);
     });
  }

  annuler() {
    history.back();
  }

}
