import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  public btnSolicitar: any;  
  public form: any;

  constructor() { }

  ngOnInit(): void {
  }

  dirigeForm() {
    
    this.btnSolicitar = document.querySelector('#btn-home-service') as HTMLButtonElement;
    this.form = document.querySelector('#app-form')  as HTMLDivElement;

    if( this.btnSolicitar ) {
      this.btnSolicitar.addEventListener('click', (e: any) => {
        this.form.scrollIntoView(true)
      })
    }
    
  }

}
