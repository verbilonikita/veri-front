import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentsModule } from 'src/app/components/FormComponents/FormComponents.module';
import { ElectricityRatesComponent } from './ElectricityRatesComponent/ElectricityRates.component';
import { LoadingComponent } from './ElectricityRatesComponent/Loading/Loading.component';
import { PlansListComponent } from './ElectricityRatesComponent/PlansList/PlansList.component';
import { MatIconModule } from '@angular/material/icon';
import { PlanComponent } from './ElectricityRatesComponent/PlansList/Plan/Plan.component';
import { DividerComponent } from 'src/app/components/Divider/Divider.component';
import { ElectricityRatesService } from './ElectricityRates.service';
import { TypographyModule } from 'src/app/components/Typography/Typography.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ElectricityRatesComponent }];

@NgModule({
  declarations: [
    ElectricityRatesComponent,
    LoadingComponent,
    PlansListComponent,
    PlansListComponent,
    PlanComponent,
    DividerComponent,
  ],
  imports: [
    FormComponentsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    TypographyModule,
    RouterModule.forChild(routes),
  ],
  providers: [ElectricityRatesService],
})
export class ElectricityRatesModule implements OnInit {
  ngOnInit(): void {
    console.log('loaded');
  }
}
