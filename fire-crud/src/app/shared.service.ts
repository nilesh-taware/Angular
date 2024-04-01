import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fireInstance:Firestore) { }

  getNotes()
  {
    let notesCollection=collection(this.fireInstance,'notes');
    return collectionData(notesCollection,{idField:'id'});

  }
  addNote(desc:string)
  {
    let data={description:desc};
    let notesCollection=collection(this.fireInstance,'notes');
    return addDoc(notesCollection,data);
  }
  deleteNote(id:string)
  {
    let docRefrence=doc(this.fireInstance,'notes/'+id);
    return deleteDoc(docRefrence);

  }
}
