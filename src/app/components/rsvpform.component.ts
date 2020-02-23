import { Component, OnInit } from '@angular/core';
import { RSVPForm } from '../models/rsvpform';

@Component({
  selector: 'app-rsvpform',
  templateUrl: './rsvpform.component.html',
  styleUrls: ['./rsvpform.component.css']
})
export class RSVPFormComponent implements OnInit {

  title:string="RSVP Form";
  model:RSVPForm;
  attendance=[
    {value:true,label:"Yes"},
    {value:false,label:"No"}];
  constructor() {
    this.model=new RSVPForm('','','',false);
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.model.name);
    console.log(this.model.isAttending);
  }

}
