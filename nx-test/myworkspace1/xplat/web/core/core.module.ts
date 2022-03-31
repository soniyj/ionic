import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// libs
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { throwIfAlreadyLoaded } from '@myworkspace1/utils';
import {
  CoreModule,
  PlatformLanguageToken,
  PlatformWindowToken,
} from '@myworkspace1/core';

import { NbThemeModule } from '@nebular/theme';

// bring in custom web services here...

// factories
export function winFactory() {
  return window;
}

export function platformLangFactory() {
  const browserLang = window.navigator.language || 'en'; // fallback English
  // browser language has 2 codes, ex: 'en-US'
  return browserLang.split('-')[0];
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot([
      {
        provide: PlatformLanguageToken,
        useFactory: platformLangFactory,
      },
      {
        provide: PlatformWindowToken,
        useFactory: winFactory,
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NbThemeModule.forRoot(),
  ],
})
export class Myworkspace1CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: Myworkspace1CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'Myworkspace1CoreModule');
  }
}
