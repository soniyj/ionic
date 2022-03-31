import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcoPage } from './marco.page';

describe('MarcoPage', () => {
  let component: MarcoPage;
  let fixture: ComponentFixture<MarcoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
