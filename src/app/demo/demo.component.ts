import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Demo { name: string; email: string; msg: string; }


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [inEffect]
})
export class DemoComponent implements OnInit {

  sendSuccess = false;
  private itemsCollection: AngularFirestoreCollection<any>;

  msg = {
    name: '',
    email: '',
    msg: ''
  };
  constructor(private afs: AngularFirestore) {
  }

  addmsg(msg) {
    this.itemsCollection.add(msg);
  }

  schedule(msg, name, email) {
    if (msg.length > 0 || name.length > 0 || email.length > 0 ) {
      this.itemsCollection = this.afs.collection<any>('requests');
      this.msg.msg = msg;
      this.msg.name = name;
      this.msg.email = email;
      this.itemsCollection.valueChanges();
      this.addmsg(this.msg);
      this.sendSuccess = true;
    }
  }
  ngOnInit() {
  }
}
