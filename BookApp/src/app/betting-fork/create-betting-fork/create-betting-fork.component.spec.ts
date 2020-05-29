import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBettingForkComponent } from './create-betting-fork.component';

describe('CreateBettingForkComponent', () => {
  let component: CreateBettingForkComponent;
  let fixture: ComponentFixture<CreateBettingForkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBettingForkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBettingForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
