import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Action } from 'rxjs/internal/scheduler/Action';



@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  private itemsCollection: AngularFirestoreCollection<T>;
  collectionName: string ='';
  afs: AngularFirestore;

  constructor(afs: AngularFirestore) { 
    this.afs = afs;
  }

  getAll(collectionName: string):Observable<T[]>{
    if (!this.itemsCollection){
      this.collectionName = collectionName;
      this.itemsCollection = this.afs.collection<T>(this.collectionName);
    }

    return this.itemsCollection.snapshotChanges().pipe(
      map(Action => Action.map(a =>{
        const data = a.payload.doc.data();
        data['id']= a.payload.doc.id;
        return data;
      }))
    )
  }
}
