import { Component } from '@angular/core';
import {ApiService} from './shared/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllFood();
  }

  allFood !: any;
  food={foodName:" ",days:0}
  newOne={newFoodName:" ", id:0};
  

  getFoodId(foodValue:any){
      this.food.foodName=foodValue;
  }
  getDaysId(dayValue:any){
      this.food.days=dayValue
  }
  addToList(){
      this.api.postFood(this.food).subscribe(()=>{ })
  }
  getAllFood(){
    this.api.getFood().subscribe((res)=>{
      this.allFood = res; // it is an array of obj
      console.log(this.allFood)
  })
  }
  delete(id:any){
    this.api.deleteFood(id).subscribe(()=>{ })
  }
  updateFoodId2(food2:any){
    this.newOne.newFoodName=food2;
  }
  updateFood2(id:any){
      this.newOne.id=id
      this.api.updateFood(this.newOne).subscribe(()=>{  })
  }
}
