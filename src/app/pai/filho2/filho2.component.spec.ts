import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho2Component } from './filho2.component';

describe('Filho2Component', () => {
  let component: Filho2Component;
  let fixture: ComponentFixture<Filho2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Filho2Component]
    });
    fixture = TestBed.createComponent(Filho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
