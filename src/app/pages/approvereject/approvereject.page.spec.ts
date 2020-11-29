import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproverejectPage } from './approvereject.page';

describe('ApproverejectPage', () => {
  let component: ApproverejectPage;
  let fixture: ComponentFixture<ApproverejectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverejectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproverejectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
