import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  name: string;
  message: string;
  email: string;
  phone: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.name);
    console.log(this.message);
    console.log(this.email);
    console.log(this.phone);

  }

}
