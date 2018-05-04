import { UserService } from './service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  transactions=[];


  getAllTransactions() {   
    
  }

  constructor(private user:UserService) {
    this.user.login().toPromise()
    .then(
      res=> {
        localStorage.setItem('access_token', res['id'])
        console.log(localStorage.getItem('access_token'));
        this.user.getAllTransaction().toPromise()
        .then(
          (res:any) => {
           for(var i=0; i<res.length; i++){
             console.log(res[i]);
             this.transactions.push (
               { no: 3, propName: res[i]['otp']['property'], lastModified: res[i]['otp']['completionDate'], status: res[i]['auditRecords'] }
             )
           }
          }
        )
        .then(
          function() {
            console.log(this.transactions);
          }
        )
      }
    )
  }

  
}
