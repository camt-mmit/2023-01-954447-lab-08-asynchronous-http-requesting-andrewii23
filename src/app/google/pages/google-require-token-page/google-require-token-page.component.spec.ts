import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRequireTokenPageComponent } from './google-require-token-page.component';

describe('GoogleRequireTokenPageComponent', () => {
  let component: GoogleRequireTokenPageComponent;
  let fixture: ComponentFixture<GoogleRequireTokenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoogleRequireTokenPageComponent]
    });
    fixture = TestBed.createComponent(GoogleRequireTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
