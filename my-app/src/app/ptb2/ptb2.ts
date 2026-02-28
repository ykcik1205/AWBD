import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  standalone: false,
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  a_number:number=5
  b_number:number=3
  c_number:number=1
  result:string="..."
  get_solution()
  {
    if(this.a_number==0)
      {
        if(this.b_number==0 && this.c_number==0)
        {
          this.result='Phương trình vô số nghiệm'
        }
      }
    else if(this.a_number==0 && this.b_number!=0)
      {
        this.result='Phương trình vô nghiệm'
      }
    else
      {
        let x=-this.c_number/this.b_number
        this.result="Phương trình có nghiệm x ="+x
      }
  }
}
