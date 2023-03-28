import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTeamsComponent } from './work-teams.component';

describe('WorkTeamsComponent', () => {
  let component: WorkTeamsComponent;
  let fixture: ComponentFixture<WorkTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
