import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public projects = [];
  public val = 'assets/img/clinical/ventilator.jpg'
  public val2 = 'assets/img/name.jpg'
  constructor() { }

  ngOnInit() {
   this.projects.push({
         id:1,
         heading:"ECG",
         image:'assets/img/clinical/ECG.jpg',
         content:"इलेक्ट्रोकार्डियोग्राम(Electrocardiogram/ECG) आपके हार्ट की लय(rhythm) तथा विद्युतीय क्रियाओं को जांचने का एक सामान्य टेस्ट है। त्वचा से जुड़े संवेदकों(Sensors) का प्रयोग आपके हृदय के हर बार धड़कने से उत्पन्न विद्युतीय संकेतों का पता लगाने के लिए किया जाता है।"
     },{
      id:1,
      heading:"EEG",
      image:'assets/img/clinical/EEG.jpg',
      content:"इलेक्ट्रोइन्सेफलोग्राम (EEG) तकनीक की मदद से मस्तिष्क की गतिविधियों के आधार पर मानसिक अवस्था की सामान्य और असामान्य स्थिति का पता लगाया जाता है। इस तकनीक में बहुत ही पतले तारो की छोटी छोटी डिस्क जिनको इलेक्ट्रोड भी कहा जाता है , को खोपड़ी के हर एक भाग पर रखा जाता जाता हैं।"
     },
     {
      id:1,
      heading:"X-RAY",
      image:'assets/img/clinical/xray.jpg',
      content:"एक्स-रे इमेजिंग आपके शरीर के अंदर की तस्वीरें बनाती है। छवियां आपके शरीर के अंगों को काले और सफेद रंग के विभिन्न रंगों में दिखाती हैं। ... एक्स-रे का सबसे परिचित उपयोग फ्रैक्चर (टूटी हुई हड्डियों) की जांच करना है, लेकिन एक्स-रे का उपयोग अन्य तरीकों से भी किया जाता है।"
      }
    )
  }

}
