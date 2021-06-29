import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';



@Component({
  selector: 'wa-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  public items: any;
  tokenData;
  constructor(
    private userService: UserService
  ) { 
    this.tokenData = <string>localStorage.getItem('tokenData');
    
    this.tokenData = JSON.parse(this.tokenData);

    this.getFavourite()
  }

  ngOnInit(): void {

    
  }

  getFavourite() {
    let data = {
      api_key: this.tokenData.api_key
    }

    this.userService.getFav(data).subscribe( res => {
      console.log("=====>", res);
      this.items = res;
      
    });
  }

}
