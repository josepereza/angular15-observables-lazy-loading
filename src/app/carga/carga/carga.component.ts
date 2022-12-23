import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/core/services/sharing.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit{

  miname = new FormControl('');
  constructor(private sharingService:SharingService){
    this.miname.valueChanges.subscribe(data=>{
      console.log(data)
      this.sharingService.sharingObservableData={name:data!}
      //this.sharingService.sharingObservableData=data
     })
  }
  ngOnInit(): void {
  }

}
