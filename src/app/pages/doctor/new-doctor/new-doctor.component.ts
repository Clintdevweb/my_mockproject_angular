import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss'],
})
export class NewDoctorComponent implements OnInit {
  formDoctor!: FormGroup;

  minlength: number = 9;

  fieldKeyNames: any = {
    name: 'name',
    hospital: 'hospital',
    specialize: 'specialize',
    phone: 'phone',
    email: 'email',
  };

  messageList: any = {
    required: ' You must enter this field',
    minlength: `Must be at least ${this.minlength} characters`,
    phone: 'You must enter phone number this field',
    email: 'You must enter correct email this field',
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    const me = this;
    me.builFormDoctor();
  }

  builFormDoctor() {
    const me = this;
    me.formDoctor = me.fb.group({
      [me.fieldKeyNames.name]: [
        '',
        [Validators.required, Validators.minLength(me.minlength)],
      ],
      [me.fieldKeyNames.hospital]: [
        '',
        [Validators.required, Validators.minLength(me.minlength)],
      ],
      [me.fieldKeyNames.specialize]: [
        '',
        [Validators.required, Validators.minLength(me.minlength)],
      ],
      [me.fieldKeyNames.phone]: [
        '',
        [
          Validators.required,
          Validators.minLength(me.minlength),
          me.getPatternPhoneErr(me.fieldKeyNames),
        ],
      ],
      [me.fieldKeyNames.email]: [
        '',
        [
          Validators.required,
          Validators.minLength(me.minlength),
          me.getPatternEmail(),
        ],
      ],
    });
  }

  getErrorByField(controlName: string): string[] {
    const me = this;
    const controlErrors = me.formDoctor.get(controlName)?.errors;
    if (!controlErrors) {
      return [];
    }
    const errorKeys = Object.keys(controlErrors);
    if (errorKeys.length === 0) {
      return [];
    }
    let messageListErrors = errorKeys.map((currentKey: string) => {
      return me.messageList[currentKey];
    });

    return messageListErrors;
  }

  getPatternPhoneErr(fieldNameKeys: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!control.parent?.controls) {
        const patternPhone = new RegExp(
          /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
        );
        const _formGroup = control.parent as FormGroup;
        const controlPhone = _formGroup.get(fieldNameKeys.phone);
        console.log(controlPhone?.value);
        if (!!controlPhone && !patternPhone.test(controlPhone.value)) {
          return {
            phone: true,
          };
        }
      }
      return null;
    };
  }

  getPatternEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const me = this;
      if (!!control.parent?.controls) {
        const patternEmail = new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const _formGroup = control.parent as FormGroup;
        const controlEmail = _formGroup.get(me.fieldKeyNames.email);
        if (!patternEmail.test(controlEmail?.value)) {
          return {
            email: true,
          };
        }
      }
      return null;
    };
  }

  isInValid(controlName: string): boolean {
    const me = this;
    const control = me.formDoctor.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }
  handleDoctor(valueForm: any) {
    const me = this;

    console.log(valueForm);
    me.router.navigate(['doctors']);
  }
}
