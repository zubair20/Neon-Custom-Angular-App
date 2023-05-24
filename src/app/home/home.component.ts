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
      class: "purple"
    },
    {
      class: "red"
    },
    {
      class: "white"
    },
    {
      class: "lemonyellow"
    },
    {
      class: "orange"
    },
    {
      class: "pink"
    },
    {
      class: "blue"
    },
    {
      class: "skyblue"
    },
    {
      class: "green"
    },
    {
      class: "goldenyellow"
    }
  ];
  
  sizes = [
    {
      name: "Small (Length:70 CM) ( Max 8 Characters )"
    },
    {
      name: "Medium (Length:90 CM) ( Max 10 Characters )"
    },
    {
      name: "Large (Length:120 CM) ( Max 12 Characters )"
    },
    {
      name: "X Large (Length:140 CM) ( Max 16 Characters )"
    }
  ];
  selectedBackground = this.backgrounds[0].bg;
  selectedFont = this.fonts[0].name;
  selectedColor = this.colors[0].class;
  selectedSize = this.sizes[0].name;
  
  constructor(){
  }

  changeNeonText(e:any){
    console.log(e.target.value);
    try {
      if(e.target.value){
        this.neonText = e.target.value;
      }else{
        this.neonText = "Your Text";
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
  changeSize(i:number){
    this.selectedSize = this.sizes[i].name;
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

  sendWhatsAppMessage() {
    const phoneNumber: string = '+923056000250';  
    const message: string = 'Hi,\nHere are my details for custom neon.\n\nText: '+this.neonText+ ' \nFont: '+ this.selectedFont + ' \nSize: '+ this.selectedSize;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

}
