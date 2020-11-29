import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainedPage } from './obtained.page';

describe('ObtainedPage', () => {
  let component: ObtainedPage;
  let fixture: ComponentFixture<ObtainedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
