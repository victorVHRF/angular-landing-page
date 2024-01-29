import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpoint = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/"

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string):Observable<NewsLetterResponse> {
    const data = { name, email }

    return this.http.post<NewsLetterResponse>(this.endpoint, data)
  }
}
