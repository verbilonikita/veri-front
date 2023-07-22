import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/HomePage/HomePage.module';

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
    redirectTo: '/calculator',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
