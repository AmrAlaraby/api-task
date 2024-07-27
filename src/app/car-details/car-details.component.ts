import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit{
  myId:string=''
  car:any={}
  constructor(private activatedRoute:ActivatedRoute,
    private apiService :ApiService
  ){}
ngOnInit(): void {
  this.activatedRoute.params.subscribe((param:any)=>{
    console.log(param);
    this.myId=param.id
    this.apiService.getCarById(this.myId).subscribe({
      next : (res) =>{
        console.log(res);
        this.car=res


        

      },
      error : (err) =>{
        console.log(err);
        
      },
      complete : ()=>{
        console.log('completed');
        
      }
    })

  })
}
}
