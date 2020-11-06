import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
export class User {
    
  username: string;

  constructor( username: string) {
   
    this.username = username;
  }
}





@Injectable({
  providedIn: 'root' // just before your class
})

export class AccessProviders{
 server:string='http://localhost:8000';
 currentUser: User;
 isLogged: Boolean = false;

   constructor(
       
       public http:HttpClient,
       
  ) { }
  
        /*postData(body){
            let headers=new HttpHeaders({
                'Content-Type':'applicationJson,charset-UTF-8'
            });
            let options={
                 headers:headers
            }
            
            return this.http.post(this.server+'/api/farmers',JSON.stringify(body),{
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
              }).timeout(59000)
            . map(res=>res);
            
            
        }*/

        postLogin(body){
          let headers=new HttpHeaders({
              'Content-Type':'applicationJson,charset-UTF-8'
          });
          let options={
              headers:headers
          }
          this.currentUser = new User(body.username);
          this.isLogged = true;
          return this.http.post(this.server+'/login',JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json'),
            })
          . map(res=>res
          );
          
          
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
     
        
}