export class Angular2ContactsListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-contacts-list-app h1')).getText();
  }
}
