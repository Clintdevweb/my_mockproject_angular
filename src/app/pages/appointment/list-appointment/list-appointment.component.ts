import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { takeUntil, tap } from 'rxjs';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { Item } from './list-item';
import { object } from 'rxfire/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent extends BaseComponent implements OnInit {
  // form
  public formAppointmentUpdate!: FormGroup;

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

  // isValid
  isInValid(controlName: string) {
    const me = this;
    const control = me.formAppointmentUpdate.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched);
  }

  getErrorByField(controlName: string): string[] {
    const me = this;
    const ObjectErr = me.formAppointmentUpdate.get(controlName)?.errors;
    if (!ObjectErr) {
      return [];
    }
    const errorKeys = Object.keys(ObjectErr);
    if (errorKeys.length === 0) {
      return [];
    }
    const msgList = errorKeys.map((errorKey) => {
      return me.messageError[errorKey];
    });

    return msgList;
  }

  getPatternPhoneErr(fieldNameKeys: any) {
    return (control: AbstractControl) => {
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

  // buildForm
  buildForm() {
    const me = this;
    me.formAppointmentUpdate = me.fb.group({
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

  // Items
  listItems: Item[] = [];
  Item!: Item;
  display: boolean = false;
  displayUpdate: boolean = false;
  constructor(
    private apppointServices: AppointmentsService,
    private fb: FormBuilder,
    private _location: Location
  ) {
    super();
  }

  OnDestroy() {
    alert('You want to leave this pages');
  }
  ngOnInit() {
    const me = this;
    me.apppointServices
      .getListAppoint()
      .pipe(tap(), takeUntil(me.destroy$))
      .subscribe((listItem: any) => {
        me.listItems = listItem;
        // console.log(listItem);
      });
    me.buildForm();
  }

  focusElementInvalid() {
    const ListInputInvalid = document.querySelectorAll('input.ng-invalid');

    if (!!ListInputInvalid) {
      for (let i = 0; i < ListInputInvalid.length; i++) {
        (ListInputInvalid[i] as HTMLElement)?.focus();
        return;
      }
    }
  }

  handleAppointmentUpdate() {
    const me = this;
    const isFormValid = me.formAppointmentUpdate.valid;
    const valueOfForm = me.formAppointmentUpdate.getRawValue();
    Object.keys(me.formAppointmentUpdate.controls).map(
      (controlName: string) => {
        const control = me.formAppointmentUpdate.get(controlName);
        control?.markAsDirty();
        control?.markAllAsTouched();
        control?.updateValueAndValidity();
      }
    );
    if (isFormValid) {
      me.apppointServices.addApponintment(valueOfForm);
      me._location.back();
    }
    me.focusElementInvalid();
  }

  showAppointment(id: string) {
    const me = this;
    me.display = true;
    me.apppointServices.getAppoint(id).subscribe((item) => {
      me.Item = item;
    });
  }

  updateAppointment(id: string) {
    const me = this;
    me.displayUpdate = true;
  }
}
