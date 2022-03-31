import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { HomeComponent } from 'src/home/home.component';
import { PublicComponent } from 'src/public/public.component';
import { HasRoleDirective } from './authorization/has-role.directive';
import { HttpClientModule } from '@angular/common/http';

const keycloakService = new KeycloakService();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicComponent,
    HasRoleDirective
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    keycloakService
      .init({
        config: environment.keycloak,
        initOptions: {
          onLoad: 'check-sso', // onLoad: 'login-required',
          checkLoginIframe: false
        },
        // loadUserProfileAtStartUp: true,
        // enableBearerInterceptor: true,
        bearerExcludedUrls: [
          '/assets/test.json'
        ]
      })
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');

        appRef.bootstrap(AppComponent);
      })
      .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  }

}
