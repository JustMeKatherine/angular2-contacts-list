import {Injectable} from '@angular/core';

export interface Contact {
  id:number;
  name:string;
  age:number;
  email:string;
}

@Injectable()
export class ContactsService {
  contacts:Array<Contact> = [{
    id: 1,
    name: 'Michał',
    age: 24,
    email: 'michal@mmiszy.pl'
  }, {
    id: 2,
    name: 'Tester',
    age: 99,
    email: 'randomemail@com.pl'
  }, {
    id: 3,
    name: 'Testish',
    age: 15,
    email: 'legal@com.pl'
  }];

  constructor() {
  }
}
