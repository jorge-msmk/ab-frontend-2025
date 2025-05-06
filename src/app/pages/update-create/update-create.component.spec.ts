import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreateComponent } from './update-create.component';

describe('UpdateCreateComponent', () => {
  let component: UpdateCreateComponent;
  let fixture: ComponentFixture<UpdateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
