import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/HomePage/Home.module';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./pages/ElectricityRatesPage/ElectricityRates.module').then(
        (m) => m.ElectricityRatesModule
      ),
  },
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: '**',
    redirectTo: '/calculator',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
