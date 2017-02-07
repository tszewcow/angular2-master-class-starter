import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contact-details-view',
  templateUrl: './contact-details-view.component.html',
  styleUrls: ['./contact-details-view.component.css']
})
export class ContactDetailsViewComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe((contact) => {
      this.contact = contact
    }
    );
  }


  navigateToEditor(): void { 
    this.router.navigate(['/contact-details', this.contact.id, 'edit']);
  }

  navigateToList(): void {
    this.router.navigate(['/contact-list']);
  }

}
