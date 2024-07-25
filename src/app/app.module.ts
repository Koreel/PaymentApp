import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({    // Global configuration options for ngx-toastr
      timeOut: 3000,          // Duration of the toast message
      positionClass: 'toast-top-right', // Position of the toast notifications
      preventDuplicates: true, // Prevents duplicate messages
    })
    
  ],
  providers: [provideHttpClient(), NgForm],
})
export class AppModule { }
