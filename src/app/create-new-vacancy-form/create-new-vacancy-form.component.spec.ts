import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewVacancyFormComponent } from './create-new-vacancy-form.component';

describe('CreateNewVacancyFormComponent', () => {
  let component: CreateNewVacancyFormComponent;
  let fixture: ComponentFixture<CreateNewVacancyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewVacancyFormComponent]
    });
    fixture = TestBed.createComponent(CreateNewVacancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
