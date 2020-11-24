import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
export class User {
    
  bank_id: string;

  constructor( bank_id: string) {
   
    this.bank_id = bank_id;
  }
}





@Injectable({
  providedIn: 'root' // just before your class
})

export class AccessProviders{
 public static server:string='http://localhost:8000';
 currentUser: User;
 isLogged: Boolean = false;

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

      postreason(body){
        let headers=new HttpHeaders({
            'Content-Type':'applicationJson,charset-UTF-8'
        });
        let options={
             headers:headers
        }
        
        return this.http.post(AccessProviders.server+'/rejectedloan',JSON.stringify(body),{
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          }).timeout(59000)
        . map(res=>res);
        
        
    }

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
  
    
  
     
        
}