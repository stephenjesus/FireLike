import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaSampleApproach';
  description = 'Angular4-Firebase Demo';

  itemValue = '';
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onSubmit() {
    this.items.push({content: this.itemValue});
    this.itemValue = '';
  }
}
