import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-localize-expressions';

  baseString = "BaseString";

  variable1 = "Default";
  variable2 = "Default";
  variable3 = 0;

  localizedString1 = $localize`:SomeID:String with Variable1 - ${this.variable1}`;
  localizedString2 = $localize`:SomeID:String with Variable2 - ${this.variable2}`;

  constructor() {
    this.variable1 = $localize`:AnotherID: Some Words`;
  }

  ngOnInit() {
    this.incrementValue()
  }

  private incrementValue(){
    setTimeout(() =>{
      this.variable3++
      this.variable2 = this.baseString + this.variable3.toString()
      console.log(this.variable2)
      console.log(this.localizedString2)
      this.incrementValue()
    }, 1000)
  }
}
