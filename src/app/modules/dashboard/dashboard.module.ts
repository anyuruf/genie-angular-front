import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ForceDirectedGraphComponent } from 'src/app/components/d3force/models/graph.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ForceDirectedGraphComponent 
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent,
    ForceDirectedGraphComponent
  ]
})
export class DashboardModule { }
