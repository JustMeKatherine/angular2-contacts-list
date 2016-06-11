import {Component, OnInit} from '@angular/core';
import {ContactsService, Contact} from './contacts.service';
import {ContactsListComponent} from "./contacts-list/contacts-list.component";

@Component({
  moduleId: module.id,
  selector: 'typeofweb-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ContactsService],
  directives: [ContactsListComponent]
})
export class AppComponent implements OnInit {
  public contacts:Array<Contact>;

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  }

  log(val) {
    console.log(val);
  }

  constructor(private contactsService:ContactsService) {
  }
}
