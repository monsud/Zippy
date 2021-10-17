import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace : true };
        }
        return null;
    }

    static symbolsOnly(control: AbstractControl) {
        if ( !/^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]*$/.test(control.value)) {
            return { symbolsOnly: true };
        }
        return null;
    }

    static cannotBeLikeUsername(control: AbstractControl) : ValidationErrors | null {
        const user = control.get('email').value;
        const password = control.get('pass').value;
        return user === password ? null : { notSame: true }     
    }

    static checkPassword(control: AbstractControl) : ValidationErrors | null {
        const password = control.get('pass').value;
        const confirmPassword = control.get('confpass').value;
        return password === confirmPassword ? null : { notSame: true }     
    }

}