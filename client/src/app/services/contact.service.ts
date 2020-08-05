import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // postURL = 'http://localhost:3000/api/response';
  postURL = '/api/response';

  constructor(private http: HttpClient) {}

  postMessage(data: Message) {
    this.http.post<any>(this.postURL, data).subscribe((res) => {
      console.log(res);
    });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class ContactService {
//   private api = '';

//   constructor(private http: HttpClient) {}

//   postMessage(input: any) {
//     return this.http.post(this.api, input, { responseType: 'text' }).pipe(
//       map(
//         (response) => {
//           if (response) {
//             return response;
//           }
//         },
//         (error: any) => {
//           return error;
//         }
//       )
//     );
//   }
// }
