import { NgModule } from '@angular/core';
import { HomeComponent } from './HomePageComponent/Home.component';
import { TypographyModule } from 'src/app/components/Typography/Typography.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [TypographyModule, RouterModule.forChild(routes)],
  providers: [],
})
export class HomePageModule {}
