import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWebComponent } from './angular-web.component';

describe('AngularWebComponent', () => {
  let component: AngularWebComponent;
  let fixture: ComponentFixture<AngularWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
