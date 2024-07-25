import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-details.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string = environment.apiBaseUri + '/PaymentDetail'
  list:PaymentDetail[] = [];
  formData : PaymentDetail = new PaymentDetail();
  formSubmitted: boolean=false;
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res =>{
       this.list = res as PaymentDetail[]
        
      },
      error: err => {console.log(err)}
    })
  }
postPaymentDetail(){
  return this.http.post(this.url,this.formData)
}

putPaymenDetail(){
  return this.http.put(this.url+'/'+this.formData.
    paymentDetailID,this.formData)
}

deletePaymenDetail(id: number){
  return this.http.delete(this.url+'/'+ id)
}

resetForm(form:NgForm){
  form.form.reset()
  this.formData = new PaymentDetail()
  this.formSubmitted = false
}

}
