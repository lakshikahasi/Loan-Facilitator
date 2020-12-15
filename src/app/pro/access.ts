import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { strict } from 'assert';
export class User {
    
  bank_id: string;

  constructor( bank_id: string) {
   
    this.bank_id = bank_id;
  }
}

export class Borrower {
    
  nic: string;

  constructor( nic: string) {
   
    this.nic = nic;
  }
}

/* export class UpdBorrower {
  loan_id: string;
  constructor(loan_id:string){
    this.loan_id = loan_id;
  }
} */

@Injectable({
  providedIn: 'root' // just before your class
})

export class AccessProviders{

 public static server:string='http://localhost:8000';
 currentUser: User;
 nic:Borrower;
 isLogged: Boolean = false;
 //loan_id:UpdBorrower;
 loan_id;
  
   constructor(
       
       public http:HttpClient,
       
  ) { }
  
  postData(body){
    let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
    });
    let options={
      headers:headers
    }
            
    /* return this.http.post(this.server+'/createLoan',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
   }).timeout(59000)
 */
    return this.http.post(AccessProviders.server+'/createLoan',JSON.stringify(body),{
       headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
    . map(res=>res);                   
  }

        postLogin(body){
          let headers=new HttpHeaders({
              'Content-Type':'applicationJson,charset-UTF-8'
          });
          let options={
              headers:headers
          }
          this.currentUser = new User(body.bank_id);
          this.isLogged = true;
          return this.http.post(AccessProviders.server+'/login',JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json'),
            })
          . map(res=>res);
                   
      }

  postSearch(body){
    let headers = new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
    });
    let options={
      headers:headers
    }
    this.nic=new Borrower(body.nic);
    //this.isLogged = true;
    return this.http.post(AccessProviders.server+'/getFarmerLoans/'+this.nic, JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(res=>res);
  }

      /*postDetails(body){
        let headers=new HttpHeaders({
            'Content-Type':'applicationJson,charset-UTF-8'
        });
        let options={
             headers:headers
        }
        
        return this.http.post(this.server+'/editDetails',JSON.stringify(body),{
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          }).timeout(59000)
        . map(res=>res);
        
        
    }*/
    
    /*postChangepw(body,id){
      let headers=new HttpHeaders({
          'Content-Type':'applicationJson,charset-UTF-8'
      });
      let options={
           headers:headers
      }
      
      return this.http.post(this.server+'/update/'+id,JSON.stringify(body),{
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }).timeout(59000)
      . map(res=>res);
      
      
  }*/

  postreasonapp(body){
    let headers=new HttpHeaders({
        'Content-Type':'applicationJson,charset-UTF-8'
    });
    let options={
         headers:headers
    }
    
    return this.http.post(AccessProviders.server+'/approveloan',JSON.stringify(body),{
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }).timeout(59000)
    . map(res=>res);
    
    
}


postLoanUpdate(body, loan_id){
  let headers=new HttpHeaders({
    'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
    headers:headers
  }
          
  /* return this.http.post(this.server+'/createLoan',JSON.stringify(body),{
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
 }).timeout(59000)
*/
  return this.http.post(AccessProviders.server+'/updateLoan/'+loan_id,JSON.stringify(body),{
     headers: new HttpHeaders().set('Content-Type', 'application/json'),
  })//.timeout(59000)
  . map(res=>res);
}     


postBorrower(body, nic, bank_id){
  let headers=new HttpHeaders({
    'Content-Type':'applicationJson,charset-UTF-8'
});
let options={
    headers:headers
}
this.currentUser = new User(body.nic);
this.isLogged = true;
return this.http.post(AccessProviders.server+'/getFarmerLoans/'+nic+'/'+bank_id, JSON.stringify(body),{
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  })
. map(res=>res);
}
        
}