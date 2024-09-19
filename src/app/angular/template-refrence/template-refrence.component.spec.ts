import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefrenceComponent } from './template-refrence.component';

describe('TemplateRefrenceComponent', () => {
  let component: TemplateRefrenceComponent;
  let fixture: ComponentFixture<TemplateRefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateRefrenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateRefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
