import { PdaoWebNg4Page } from './app.po';

describe('pdao-web-ng4 App', () => {
  let page: PdaoWebNg4Page;

  beforeEach(() => {
    page = new PdaoWebNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
