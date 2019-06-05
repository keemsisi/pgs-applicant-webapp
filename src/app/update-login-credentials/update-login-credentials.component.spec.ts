import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginCredentialsComponent } from './update-login-credentials.component';

describe('UpdateLoginCredentialsComponent', () => {
  let component: UpdateLoginCredentialsComponent;
  let fixture: ComponentFixture<UpdateLoginCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLoginCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
