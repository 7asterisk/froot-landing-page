import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



export interface Demo { name: string; email: string; msg: string; }


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [inEffect]
})
export class DemoComponent implements OnInit {

  sendSuccess = false;
  // private itemsCollection: AngularFirestoreCollection<any>;

  msg = {
    name: '',
    email: '',
    msg: ''
  };
  constructor(private http: HttpClient) {
  }

  // addmsg(msg) {
  //   this.itemsCollection.add(msg);
  // }

  schedule(msg, name, email) {
    if (msg.length > 0 || name.length > 0 || email.length > 0) {


      const body = {
        msg: msg, name: name, email: email
      };
      const url = `https://us-central1-froot-co-in.cloudfunctions.net/sendMail`;
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };

      return this.http.post(url, body, headers)
        .toPromise()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          this.sendSuccess = true;
          console.log(this.sendSuccess);
          console.log(err);
        });

      // this.itemsCollection = this.afs.collection<any>('requests');
      // this.msg.msg = msg;
      // this.msg.name = name;
      // this.msg.email = email;
      // this.itemsCollection.valueChanges();
      // this.addmsg(this.msg);

    }
  }
  ngOnInit() {
  }
}
