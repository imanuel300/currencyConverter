import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './Home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currency-exchange'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('currency-exchange');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('currency-exchange app is running!');
  });
});
