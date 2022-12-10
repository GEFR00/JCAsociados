import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  public btnSolicitar: any;  
  public form: any;

  constructor() { 

  }

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
