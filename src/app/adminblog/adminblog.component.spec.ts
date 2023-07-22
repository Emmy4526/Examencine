import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminblogComponent } from './adminblog.component';

describe('AdminblogComponent', () => {
  let component: AdminblogComponent;
  let fixture: ComponentFixture<AdminblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminblogComponent]
    });
    fixture = TestBed.createComponent(AdminblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
