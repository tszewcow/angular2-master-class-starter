import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {

  messages = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any){
    this.messages.next({
      type: eventType,
      data: data
    })
  }

  observe(eventType: string): Observable<any>{
    return this.messages.filter(x => {
      console.log(x);
      return x.type === eventType});
  }

}

class EventBusArgs {
  type: string;
  data: any;
}
