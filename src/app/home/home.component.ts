import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

declare function abc(): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  neonText = "Your Text";
  backgrounds = [
    {
      bg: "assets/img/background1.png"
    },
    {
      bg: "assets/img/background2.png"
    },
    {
      bg: "assets/img/background3.png"
    },
    {
      bg: "assets/img/background4.png"
    },
    {
      bg: "assets/img/background5.png"
    },
    {
      bg: "assets/img/background6.png"
    },
    {
      bg: "assets/img/background7.png"
    }
  ];
  fonts = [
    {
      name: "Amsterdam"
    },
    {
      name: "Northwell"
    },
    {
      name: "NeonTubes2"
    },
    {
      name: "Darlington Demo"
    },
    {
      name: "Handletterydemo Regular"
    },
    {
      name: "Red Velvet"
    },
    {
      name: "Rocket Clouds"
    },
  ];
  colors = [
    {
      class: "orange"
    },
    {
      class: "white"
    },
    {
      class: "yellow"
    }
  ];
  selectedBackground = this.backgrounds[0].bg;
  selectedFont = this.fonts[0].name;
  selectedColor = this.colors[0].class;
  
  constructor(){
  }

  changeNeonText(e:any){
    console.log(e.target.value);
    try {
      if(e.target.value){
        this.neonText = e.target.value;
      }else{
        this.neonText = "My Text";
      }
      
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  changeBg(i:number){
    this.selectedBackground = this.backgrounds[i].bg;
  }
  changeFont(i:number){
    this.selectedFont = this.fonts[i].name;
  }
  changeColor(i:number){
    this.selectedColor = this.colors[i].class;
  }

  downloadAsPNG() {
    const container = document.getElementById('container');
    if (container) {
      html2canvas(container).then(function(canvas) { // convert the container to a canvas
        var link = document.createElement('a');
        link.download = 'example.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  }

}
