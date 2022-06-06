import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'base',
  template: '',
  styles: [],
})
export abstract class BaseComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  abstract OnDestroy(): void;
  ngOnDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
    me.OnDestroy();
  }
}
