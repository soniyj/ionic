import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZazaPage } from './zaza.page';

describe('ZazaPage', () => {
  let component: ZazaPage;
  let fixture: ComponentFixture<ZazaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZazaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZazaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
