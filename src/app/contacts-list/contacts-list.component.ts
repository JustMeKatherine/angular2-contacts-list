import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../contacts.service";
import {ContactItemComponent} from "../contact-item/contact-item.component";

@Component({
  moduleId: module.id,
  selector: 'typeofweb-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css'],
  directives: [ContactItemComponent]
})
export class ContactsListComponent {
  @Input() contacts:Array<Contact>;
}
