import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShoeConfiguratorComponent } from './custom-shoe-configurator.component';

describe('CustomShoeConfiguratorComponent', () => {
  let component: CustomShoeConfiguratorComponent;
  let fixture: ComponentFixture<CustomShoeConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomShoeConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomShoeConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
