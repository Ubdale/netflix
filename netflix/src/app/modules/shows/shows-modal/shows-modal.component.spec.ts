import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsModalComponent } from './shows-modal.component';

describe('ShowsModalComponent', () => {
  let component: ShowsModalComponent;
  let fixture: ComponentFixture<ShowsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
