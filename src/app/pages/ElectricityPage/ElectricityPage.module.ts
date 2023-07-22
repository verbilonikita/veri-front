import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentsModule } from 'src/app/components/FormComponents/FormComponents.module';
import { ElectricityPageComponent } from './ElectricityPage.component';
import { PlansListComponent } from './components/ElectricityRates/PlansList/PlansList.component';
import { PlanComponent } from './components/ElectricityRates/PlansList/Plan/Plan.component';
import { DividerComponent } from 'src/app/components/Divider/Divider.component';
import { ElectricityRatesService } from './services/ElectricityPage.service';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from 'src/app/components/Typography/Typography.component';
import { ElectricityFormComponent } from './components/ElectricityForm/ElectricityForm.component';
import { ElectricityRatesComponent } from './components/ElectricityRates/ElectricityRates.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerComponent } from '../../components/Spinner/Spinner.component';
import { EuroPipe } from 'src/app/pipes/Euro.pipe';

const routes: Routes = [{ path: '', component: ElectricityPageComponent }];

@NgModule({
  declarations: [
    ElectricityPageComponent,
    PlansListComponent,
    PlanComponent,
    ElectricityFormComponent,
    ElectricityRatesComponent,
    EuroPipe,
  ],
  imports: [
    FormComponentsModule,
    TypographyComponent,
    ReactiveFormsModule,
    SpinnerComponent,
    MatIconModule,
    CommonModule,
    DividerComponent,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [ElectricityRatesService],
})
export class ElectricityPageModule {}
