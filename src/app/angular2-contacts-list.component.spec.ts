import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2ContactsListAppComponent } from '../app/angular2-contacts-list.component';

beforeEachProviders(() => [Angular2ContactsListAppComponent]);

describe('App: Angular2ContactsList', () => {
  it('should create the app',
      inject([Angular2ContactsListAppComponent], (app: Angular2ContactsListAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-contacts-list works!\'',
      inject([Angular2ContactsListAppComponent], (app: Angular2ContactsListAppComponent) => {
    expect(app.title).toEqual('angular2-contacts-list works!');
  }));
});
