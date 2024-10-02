import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Less3Component } from './less-3.component';

describe('Less3Component', () => {
  let component: Less3Component;
  let fixture: ComponentFixture<Less3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Less3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Less3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
