import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisPorductoComponent } from './pais-porducto.component';

describe('PaisPorductoComponent', () => {
  let component: PaisPorductoComponent;
  let fixture: ComponentFixture<PaisPorductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisPorductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisPorductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
