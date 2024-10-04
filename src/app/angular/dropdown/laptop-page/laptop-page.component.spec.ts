import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopPageComponent } from './laptop-page.component';

describe('LaptopPageComponent', () => {
  let component: LaptopPageComponent;
  let fixture: ComponentFixture<LaptopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
