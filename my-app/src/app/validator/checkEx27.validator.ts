import { AbstractControl, ValidatorFn } from "@angular/forms";
// export function customValidator(control : AbstractControl): {
//     [key:string]:any} | null {
//         const matchName = /\@|\#|\$|\%|\^|\&/g.test(control.value);
//         return matchName ? { 'nameNotMatch': {value: control.value}} : null;
// }
export function customValidator(regex: RegExp): ValidatorFn {
    return (control : AbstractControl): {[key:string]:any} | null => {
        const matchName = regex.test(control.value);
        return matchName ? { 'nameNotMatch': {value: control.value}} : null;
    }
}
export function passwordValidator(control : AbstractControl): {
    [key:string]:any} | null {
        const password = control.get('password');
        const rePassword = control.get('rePassword');
        if (!password || !rePassword) {
            return null;
        }

        if (password.pristine || rePassword.pristine) {
            return null;
        }

        return password.value !== rePassword.value
            ? { passwordMismatch: true }
            : null;
}