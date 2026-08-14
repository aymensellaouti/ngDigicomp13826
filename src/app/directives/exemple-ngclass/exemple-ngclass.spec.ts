import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgclass } from './exemple-ngclass';

describe('ExempleNgclass', () => {
  let component: ExempleNgclass;
  let fixture: ComponentFixture<ExempleNgclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleNgclass],
    }).compileComponents();

    fixture = TestBed.createComponent(ExempleNgclass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
