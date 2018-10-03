import {Component} from '@angular/core';

import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})

export class AppComponent {
  title = 'JavaSampleApproach';
  description = 'Angular4-Firebase Demo';

  itemValue = '';
  // items: any = [];
  items: FirebaseListObservable<any[]>;

  // constructor(db: AngularFireDatabase) {
  //   this.items = db.list('/items');
  //   console.log(this.items, '1111111111');
  // }
  constructor(afDb: AngularFireDatabase) {
      afDb.list<Item>('items').valueChanges().subscribe((res) => {
      console.log(res);
      this.items = res;
    });
    console.log(this.items, '1111111111');
  }


  onSubmit() {
    this.items.push({content: this.itemValue});
    this.itemValue = '';
  }
}
