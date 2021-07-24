import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDataGridComponent } from './tweet-data-grid.component';

describe('TweetDataGridComponent', () => {
  let component: TweetDataGridComponent;
  let fixture: ComponentFixture<TweetDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
