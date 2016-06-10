import { Angular2ContactsListPage } from './app.po';

describe('angular2-contacts-list App', function() {
  let page: Angular2ContactsListPage;

  beforeEach(() => {
    page = new Angular2ContactsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-contacts-list works!');
  });
});
