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

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser()
      .subscribe(data => {
        if (data != null) {
          let cle = Object.keys(data);
          let donnees = Object.values(data);
          for (let i = 0; i < cle.length; i++) {
            this.listes.push({
              key: cle[i],
              values: donnees[i]
            });
          }
        }
      });
  }

  addUser() {
    const values = this.connexionForm.value;
    console.log(values.connexion)
    let alone = false;
    if (values.connexion.email != '') {
    this.listes.forEach(function(element) {
      if(values.connexion.email === element.values.email){
      alone = true;
      }
    })
    
    if (alone) {
      console.log('Mail déjà prit !');
      alert('Mail déjà utilisé, choisissez un autre mail.')
    } else {
        this.userService.addUser(values.connexion)
        .subscribe(user => {
         this.router.navigate([`./menu`]);
        });
    }
  } else {
    alert('Veuillez remplir tout les champs !');
  }
}

  annuler() {
    history.back();
  }

}
