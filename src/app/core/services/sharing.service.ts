import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Persona {
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private sharingObservablePrivate:BehaviorSubject<Persona>=
   new BehaviorSubject<Persona>({name:'Jose programing'})

  constructor() { }

  get sharingObservable(){
return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data:Persona){
    this.sharingObservablePrivate.next(data)
  }
}
