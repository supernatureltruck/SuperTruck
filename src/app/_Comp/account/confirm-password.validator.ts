import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('password').value;

       let confirmPassword = control.get('password2').value;

        if(password != confirmPassword) {
            control.get('password2').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}