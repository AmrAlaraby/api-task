import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-car-display',
  templateUrl: './all-car-display.component.html',
  styleUrls: ['./all-car-display.component.scss']
})
export class AllCarDisplayComponent implements OnInit{
  constructor(private apiService:ApiService,private router:Router){}

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

  navToDetails(id:number){
    this.router.navigate([`car-details/${id}`])
  }

}
