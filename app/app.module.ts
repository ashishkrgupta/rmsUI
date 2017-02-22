import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, OverlayContainer } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { InvoiceComponent} from './component/invoice.component';
import { LoginComponent} from './component/login.component';
import { DashboardComponent } from './component/dashboard.component';
import { OrderComponent } from './component/order.component';
import { PageNotFoundComponent } from './component/pagenotfound.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order',      component: OrderComponent },
  { path: '',
    component: LoginComponent,
    data: { title: 'Heroes List' }
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports:      [ BrowserModule, MaterialModule.forRoot(), 
                  FormsModule, RouterModule.forRoot(appRoutes), 
                   ],
  declarations: [ AppComponent, InvoiceComponent, LoginComponent, DashboardComponent, OrderComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ MaterialModule ]
})
export class AppModule { }
