import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../pages/appointment/list-appointment/list-item';

import {
  provideFirestore,
  getFirestore,
  Firestore,
  collectionData,
  collection,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

@Injectable()
export class AppointmentsService {
  constructor(private http: HttpClient, public fireStore: Firestore) {}
  getListAppoint() {
    return collectionData(collection(this.fireStore, 'list-assignment'), {
      idField: 'id',
    }) as Observable<Item[]>;
  }

  addApponintment(data: Item) {
    const me = this;
    addDoc(collection(me.fireStore, 'list-assignment'), {
      ...data,
      active: true,
    });
  }

  getAppoint(id: string) {
    const me = this;
    let $appointRef = doc(me.fireStore, 'list-assignment/' + id);
    return docData($appointRef, { idField: 'id' }) as Observable<Item>;
  }

  deleteAppoint(id: string) {
    const me = this;
    let $appointRef = doc(me.fireStore, 'list-assignment/' + id);
    return deleteDoc($appointRef);
  }

  updateAppoint(id: any, dataAppoint: Item) {
    const me = this;
    let $appointRef = doc(me.fireStore, 'list-assignment/' + id);
    return setDoc($appointRef, dataAppoint);
  }

  changeStatusAppoint(dataItem: any) {
    const me = this;
    let $appointRef = doc(me.fireStore, 'list-assignment/' + dataItem.id);
    return setDoc($appointRef, { ...dataItem, active: !dataItem?.active });
  }
}
