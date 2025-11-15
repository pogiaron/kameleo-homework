import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAccessPage } from './api-access-page';

describe('ApiAccessPage', () => {
  let component: ApiAccessPage;
  let fixture: ComponentFixture<ApiAccessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiAccessPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
