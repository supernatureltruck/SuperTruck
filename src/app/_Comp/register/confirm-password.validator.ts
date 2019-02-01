import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('mdp').value;

       let confirmPassword = control.get('mdp2').value;

        if(password != confirmPassword) {
            control.get('mdp2').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}