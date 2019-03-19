import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFullInfoComponent } from './item-full-info.component';

describe('ItemFullInfoComponent', () => {
  let component: ItemFullInfoComponent;
  let fixture: ComponentFixture<ItemFullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
