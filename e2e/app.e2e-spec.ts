import { LvlartClientPage } from './app.po';

describe('lvlart-client App', () => {
  let page: LvlartClientPage;

  beforeEach(() => {
    page = new LvlartClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
