import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixShowsModalComponent } from './netflix-shows-modal.component';

describe('NetflixShowsModalComponent', () => {
  let component: NetflixShowsModalComponent;
  let fixture: ComponentFixture<NetflixShowsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetflixShowsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixShowsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
