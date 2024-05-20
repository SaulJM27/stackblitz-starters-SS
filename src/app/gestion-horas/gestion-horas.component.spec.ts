import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHorasComponent } from './gestion-horas.component';

describe('GestionHorasComponent', () => {
  let component: GestionHorasComponent;
  let fixture: ComponentFixture<GestionHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
