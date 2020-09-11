import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedProductListModule } from '@products/shared/product-list';
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule,
    SharedProductListModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled', useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
