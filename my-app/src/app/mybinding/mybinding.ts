import { Component } from '@angular/core';

@Component({
  selector: 'app-mybinding',
  standalone: false,
  templateUrl: './mybinding.html',
  styleUrl: './mybinding.css',
})
export class Mybinding {
  public full_name:string="Vicky"
  public email:string="vickyphan1212@gmail.com"
  public is_readonly:boolean=true
  public personal_style={
    color:'blue',
    fontSize:'20px',
    fontStyle:'italic',
  }
  get_fullname(
    fn:string,
    mn:string,
    ln:string,
    tdfn:HTMLElement)
  {
    tdfn.innerHTML=fn+" "+mn+" "+ln
  }
}
