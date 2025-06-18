import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransictionHistory } from './transiction-history';

describe('TransictionHistory', () => {
  let component: TransictionHistory;
  let fixture: ComponentFixture<TransictionHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransictionHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransictionHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
