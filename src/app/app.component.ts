import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework 1';

  firstName:string;
  lastName:string;
  address:string;
  qty:number;
  category:string;
  customerInfo: object;
  customerAd:boolean = false;
  added:boolean = false;
  price:number;
  items:Array<any>;
  totalAmount:any;
  taxes:any;
  totalCheque:any;

  constructor(){
    this.items = [];
    this.addItem();
    this.totalAmount;
    this.taxes;
    this.totalCheque;
  
  }

  submitAll(){
    this.customerInfo = {firstName: this.firstName , lastName: this.lastName, address: this.address};
    console.log(this.customerInfo);
    this.customerAd = true;
    return this.customerInfo, this.customerAd
  }
  
  addItem(){
      let products = [{'item': 'apple', 'price' : 1.99, 'qty': 0, 'amount': 0},
                      {'item': 'peaches', 'price' : 2.99, 'qty': 0, 'amount': 0},
                      {'item': 'pears', 'price' : 3.99, 'qty': 0, 'amount': 0},
                      {'item': 'plum', 'price' : 4.99, 'qty': 0, 'amount': 0}];

       this.added = true;
       if(this.category == products[0].item){
        let amount = parseFloat((this.qty  * products[0].price).toFixed(2))
        let newItem = {'item': this.category, 'price': products[0].price ,'qty':this.qty, 'amount':amount }
        this.items.push(newItem);
       }
       else if(this.category == products[1].item){
        let amount = parseFloat((this.qty  * products[1].price).toFixed(2))
        let newItem = {'item': this.category, 'price': products[1].price ,'qty':this.qty, 'amount':amount }
        this.items.push(newItem);

       }
        else if(this.category == products[2].item){
        let amount = parseFloat((this.qty  * products[2].price).toFixed(2))
        let newItem = {'item': this.category, 'price': products[2].price ,'qty':this.qty, 'amount':amount }
        this.items.push(newItem);

       }
       else if(this.category == products[3].item){
        let amount = parseFloat((this.qty  * products[3].price).toFixed(2))
        let newItem = {'item': this.category, 'price': products[3].price ,'qty':this.qty, 'amount':amount }
        this.items.push(newItem);
       }      

       if(typeof(this.items) != "undefined"){
        var total:number = 0
         Array.prototype.sum = function(prop){
          for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
         return total ;
         }  
          this.totalAmount = ((this.items).sum('amount')).toFixed(2);
          this.taxes = parseFloat(((this.totalAmount)*0.07).toFixed(2))
          this.totalCheque = (parseFloat(this.totalAmount) + parseFloat(this.taxes)).toFixed(2);
       }
       
  }

  removeItem(item) {
    
    for(var i = 0 ; i<this.items.length; i++){
      if(this.items[i].item == item.item){
        this.totalAmount =  (this.totalAmount -= this.items[i].price).toFixed(2);
        this.taxes = (parseFloat(this.totalAmount)*0.07).toFixed(2);
        this.totalCheque = (parseFloat(this.totalAmount) + parseFloat(this.taxes)).toFixed(2);
        this.items.splice(i,1)
        break;
      }
      
    }
  }
}
