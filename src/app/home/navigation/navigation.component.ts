import { Component, OnInit, ElementRef, Renderer2, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  //@ts-ignore
  @ViewChildren("changeColor") changeColor: QueryList<ElementRef>;

  showMore = false
  constructor() { }

  ngOnInit() {
  }

  hoverColor(number:Number){
    console.log(this.changeColor);
    
    this.changeColor.forEach((color: ElementRef, i) => { 
      //@ts-ignore
      if((number-1) === i){
        color.nativeElement.classList.add('hover-color') 
      }           
    }); 
  }
  orginalColor(){
    this.changeColor.forEach((color: ElementRef, i) => { 
      color.nativeElement.classList.remove('hover-color')            
    });
  }

  showDetails(){
    this.showMore = true
  }

  hideDetails(){
    this.showMore = false
  }

}
