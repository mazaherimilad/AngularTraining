import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JWTComponent } from './jwt.component';

describe('JWTComponent', () => {
  let component: JWTComponent;
  let fixture: ComponentFixture<JWTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JWTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JWTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
