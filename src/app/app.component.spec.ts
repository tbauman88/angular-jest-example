import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyAwesomeLibModule } from '../../projects/my-awesome-lib/src/lib/my-awesome-lib.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ MyAwesomeLibModule ]
    }).compileComponents();
  }));
  test('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  test(`should have as title 'angular-jest-example'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-jest-example');
  }));
  test('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-jest-example!');
  }));
});
