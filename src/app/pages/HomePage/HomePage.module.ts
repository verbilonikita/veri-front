import { NgModule } from '@angular/core';
import { HomeComponent } from './Home.component';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from 'src/app/components/Typography/Typography.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [TypographyComponent, RouterModule.forChild(routes)],
  providers: [],
})
export class HomePageModule {}
