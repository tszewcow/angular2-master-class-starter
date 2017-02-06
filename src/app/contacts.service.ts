import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

    constructor(private http: Http){}

    getContacts(): Observable<Contact[]> {
        // return CONTACT_DATA;
        return this.http.get('http://localhost:4201/api/contacts')
            .map(res => res.json())
            .map(data => data.items);
    }

    getContact(id: string): Observable<Contact> {
        // return CONTACT_DATA.find(contact => contact.id.toString() === id);
        return this.http.get(`http://localhost:4201/api/contacts/${id}`)
            .map(res => res.json())
            .map(data => data.item);
    }

    update(contact: Contact):Observable<any>{
        return this.http.put(`http://localhost:4201/api/contacts/${contact.id}`, contact)
            .map((res) => {
                return res.status;
            });
    }
}