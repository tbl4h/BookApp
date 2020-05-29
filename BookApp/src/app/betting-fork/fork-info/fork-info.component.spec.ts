import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkInfoComponent } from './fork-info.component';

describe('ForkInfoComponent', () => {
  let component: ForkInfoComponent;
  let fixture: ComponentFixture<ForkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
