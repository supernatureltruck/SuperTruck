import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('pw1').value;

       let confirmPassword = control.get('pw2').value;

        if(password != confirmPassword) {
            control.get('pw2').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}