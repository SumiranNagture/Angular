import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetssComponent } from './assetss.component';

describe('AssetssComponent', () => {
  let component: AssetssComponent;
  let fixture: ComponentFixture<AssetssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
