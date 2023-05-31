import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmessageComponent } from './cmessage.component';

describe('CmessageComponent', () => {
  let component: CmessageComponent;
  let fixture: ComponentFixture<CmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
