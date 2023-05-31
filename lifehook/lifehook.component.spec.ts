import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehookComponent } from './lifehook.component';

describe('LifehookComponent', () => {
  let component: LifehookComponent;
  let fixture: ComponentFixture<LifehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifehookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
