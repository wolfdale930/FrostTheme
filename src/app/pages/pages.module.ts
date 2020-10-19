import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from '../pages/pages.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from '../icons-provider.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, SettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    IconsProviderModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    ChartsModule
  ]
})
export class PagesModule { }
