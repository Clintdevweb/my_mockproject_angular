import {
  AbstractControl,
  Form,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _location: Location,
    private appointSer: AppointmentsService
  ) {}
  countries!: any[];

  selectedCity: any = 'Selected';
  public formAppointment!: FormGroup;

  public fieldKeyNames = {
    username: 'name',
    times: 'time',
    date: 'date',
    gender: 'gender',
    phonenumber: 'phone',
  };
  
  public value!: any;
  private minlength = 9;
  public messageError: any = {
    required: ' You must enter this field',
    minlength: `Must be at least ${this.minlength} characters`,
    numberPhone: 'You must enter phone number this field',
  };
  ngOnInit() {
    const me = this;
    me.buildForm();
    me.buildDataSelect();
  }

  buildDataSelect() {
    const me = this;
    me.countries = [
      {
        name: 'Australia',
        code: 'AU',
      },
      {
        name: 'Canada',
        code: 'CA',
      },
      {
        name: 'United States',
        code: 'US',
      },
    ];
  }

  buildForm() {
    const me = this;
    me.formAppointment = me.fb.group({
      [me.fieldKeyNames.username]: [
        '',
        [Validators.required, Validators.minLength(me.minlength)],
      ],
      [me.fieldKeyNames.times]: ['', Validators.required],
      [me.fieldKeyNames.date]: ['', Validators.required],
      [me.fieldKeyNames.gender]: ['', Validators.required],
      [me.fieldKeyNames.phonenumber]: [
        '',
        [Validators.required, me.getPatternPhoneErr(me.fieldKeyNames)],
      ],
    });
  }

  focusElementInvalid() {
    const ListInputInvalid = document.querySelectorAll('input.ng-invalid');

    if (ListInputInvalid) {
      for (let i = 0; i < ListInputInvalid.length; i++) {
        (ListInputInvalid[i] as HTMLElement)?.focus();
        return;
      }
    }
  }

  getErrorByField(controlName: string): string[] {
    const me = this;
    const errorObj = me.formAppointment.get(controlName)?.errors;
    if (!errorObj) {
      return [];
    }
    const errorKeys = Object.keys(errorObj || {});
    if (errorKeys.length === 0) {
      return [];
    }
    console.log(errorKeys);
    const msgList = errorKeys.map((currentKey: string) => {
      return me.messageError[currentKey];
    });
    console.log(msgList);
    return msgList;
  }

  getPatternPhoneErr(fieldNameKeys: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!!control.parent?.controls) {
        const patternPhone = new RegExp(
          /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
        );
        const _formGroup = control.parent as FormGroup;
        const controlPhone = _formGroup.get(fieldNameKeys.phonenumber);
        if (!!controlPhone && !patternPhone.test(controlPhone.value)) {
          return {
            numberPhone: true,
          };
        }
      }
      return null;
    };
  }

  isInValid(controlName: string) {
    const me = this;
    const control = me.formAppointment.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched);
  }

  handleAppointment() {
    const me = this;
    const isFormValid = me.formAppointment.valid;
    const valueOfForm = me.formAppointment.getRawValue();
    console.log(me.formAppointment);
    Object.keys(me.formAppointment.controls).map((controlName) => {
      const control = me.formAppointment.get(controlName);
      control?.markAsDirty();
      control?.markAllAsTouched();
      control?.updateValueAndValidity();
    });

    console.log(valueOfForm);
    if (isFormValid) {
      me.appointSer.addApponintment(valueOfForm);
      me._location.back();
    }
    me.focusElementInvalid();
    // me.router.navigate(['appointment']);
  }
}
