import { WeatherAppAngular2Page } from './app.po';

describe('weather-app-angular2 App', function() {
  let page: WeatherAppAngular2Page;

  beforeEach(() => {
    page = new WeatherAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
