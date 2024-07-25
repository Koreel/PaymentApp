import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-details.service';
import { FormsModule } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-details.model';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent, CommonModule,FormsModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit{

constructor(public service: PaymentDetailService){

}
  ngOnInit(): void {
    this.service.refreshList();
  }

  popuateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deletePaymenDetail(id)
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[]
  
      },
      error: err => {console.log(err)}
    })  
    }    
  }

}
