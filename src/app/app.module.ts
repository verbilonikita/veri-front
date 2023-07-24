import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentsModule } from './components/FormComponents/FormComponents.module';
import { HeaderComponent } from './components/Header/Header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkComponent } from './components/Link/Link.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    FormComponentsModule,
    AppRoutingModule,
    LinkComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
