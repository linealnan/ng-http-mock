import { Observable } from "rxjs/internal/Observable";

export class MockHttpService {
  min: number
  max: number;
  
  constructor(param: { minTimeInterval?: number; maxTimeInterval?: number; } = { minTimeInterval: 200, maxTimeInterval: 500 }) {
    this.min = param.minTimeInterval;
    this.max = param.maxTimeInterval;
  }

  randInt = (min:number, max:number) => min + Math.floor((max - min) * Math.random());

  get<T>(answer: any): Observable<T> {
    return new Observable<any>(observer => {
        setTimeout(() => observer.next(answer), this.randInt(this.min, this.max));
    });
  }

  getComplete<T>(answer: any): Observable<T> {
    return new Observable<any>(observer => {

      setTimeout(() => {
        observer.next(answer);
        observer.complete();
      }, this.randInt(this.min, this.max));
    });
  }

  post<T>(answer: any, data: any): Observable<T> {
    return new Observable<any>(observer => {
        setTimeout(() => observer.next(answer), this.randInt(this.min, this.max));
    });
  }
}
