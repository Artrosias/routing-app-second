import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoxesService {
  myImageFox: string;
  imageReady: boolean;

  constructor(private httpClient: HttpClient) {
    this.myImageFox = '';
    this.imageReady = false;
  }

  foxFetcher(): void {
    this.httpClient.get('https://randomfox.ca/floof/').subscribe((res: any) => {
      this.myImageFox = res.image;
      this.imageReady = true;
      console.log(this.myImageFox);
    });
  }
}
