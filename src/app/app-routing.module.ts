import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/HomePage/HomePage.module';
import { ErrorComponent } from './pages/Error/Error.component';
import { TypographyComponent } from './components/Typography/Typography.component';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./pages/ElectricityPage/ElectricityPage.module').then(
        (m) => m.ElectricityPageModule
      ),
  },
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [TypographyComponent, RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
