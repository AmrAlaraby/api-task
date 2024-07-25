import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rental-deals',
  templateUrl: './rental-deals.component.html',
  styleUrls: ['./rental-deals.component.scss']
})
export class RentalDealsComponent  implements OnInit{
  constructor(private apiService:ApiService){}

  cars:Array<any>=[];
  fourCars:Array<any>=[];
  
  ngOnInit(): void {
    this.apiService.getAllCars().subscribe({
      next : (res) =>{
        console.log(res);
        this.cars=res
        this.fourCars = res.slice(0, 4);

        

      },
      error : (err) =>{
        console.log(err);
        
      },
      complete : ()=>{
        console.log('completed');
        
      }
    })
  }
}
