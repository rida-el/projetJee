import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetcollabComponent } from './projetcollab.component';

describe('ProjetcollabComponent', () => {
  let component: ProjetcollabComponent;
  let fixture: ComponentFixture<ProjetcollabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetcollabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetcollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
