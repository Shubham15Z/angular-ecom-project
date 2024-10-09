import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string = 'default';
  sellerName: string = '';
  constructor(private route: Router) {}

  ngOnInit(): void {

    this.route.events.subscribe((val: any) => {
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.log("In seller area")
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStorage = localStorage.getItem('seller');
            let sellerData = sellerStorage && JSON.parse(sellerStorage)[0];
            this.sellerName = sellerData.name;
          }
        }
        else{
          // console.log("Outside seller")
          this.menuType = 'default'
        }
      }
      
    });
  };

  logout(): void {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
