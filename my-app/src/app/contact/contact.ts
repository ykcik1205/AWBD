import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact_name: string = 'Vicky Phan';
  contact_email: string = 'khuyenptn234112e@st.uel.edu.vn';
  contact_phone: string = '0123456789';
  sendContact(name:string):void
  {
    alert("Do ["+name+"] want to send contact");
  }
}