import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../contacts.service";
import {GravatarComponent} from "../gravatar/gravatar.component";

@Component({
  moduleId: module.id,
  selector: 'typeofweb-contact-item',
  templateUrl: 'contact-item.component.html',
  styleUrls: ['contact-item.component.css'],
  directives: [GravatarComponent]
})
export class ContactItemComponent {
  @Input() contact:Contact;
}
