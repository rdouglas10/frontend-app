import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretoraComponent } from './corretora.component';

describe('CorretoraComponent', () => {
  let component: CorretoraComponent;
  let fixture: ComponentFixture<CorretoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
