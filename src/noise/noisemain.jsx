import React, { Component } from 'react';
import './noisemain.css';
import Sound from './sound.jsx';


class NoiseMain extends Component {
  constructor(props){
    super(props);


 this.COLORS = ["#1abc9c","#3498db","#ea5b4d","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#f1c40f","#e67e22",
"#e74c3c","#f39c12","#d35400","#c0392b","#06b3db","#e3b63d","#dc3d66","#bd3559","#0082c8","#16528e",
"#e54b4b","#a2c5bf","#167c80","#72616e","#72BDC2","#F99899","#2C9AB7","#52BAD5","#6DC5DC","#B1E0EC",
"#449A88","#72C1B0","#95D1C4","#C5E5DE","#FEBE12","#FED156","#DB3A1B","#E85C41","#EE836E","#66CC99",
"#8A9BB1","#CC89A2","#C26787","#64AE60","#27695E","#993366","#8E368B","#345773","#E8755C","#DB334E",
"#98AE60","#78AD45","#547B30","#527D5A","#D83944","#993366","#782344","#8ADCB3"];

    this.state = {
      muted: false,
    };
    this.getRandomColor = this.getRandomColor.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.mute = this.mute.bind(this);

  }



  getRandomColor() {
    let idx = Math.floor(Math.random() * (this.COLORS.length));
    return this.COLORS[idx];
  }

  changeColor(color) {
    let body = document.getElementById('body');
    let cur_bgColor = body.style.backgroundColor;
    let new_color = this.getRandomColor();
    body.animate([{backgroundColor: cur_bgColor},{backgroundColor: new_color}], 10000);
    body.style.backgroundColor = new_color;
  };

  bgColorChange(interval) {
    let bgColor = this.getRandomColor();
    setInterval(() => {this.changeColor(bgColor)}, interval);
  };

  mute(e){
    e.preventDefault();
    if (this.state.muted === false){
      this.setState({muted: true});
    }else{
      this.setState({muted: false});
    }
  }


  render() {

    this.bgColorChange(42000);
    let opacity = "0.4";
    let mute_state;
    let muted = this.state.muted;
    
    if (muted === true){
      mute_state = "mute";
      opacity = "1";
    }else{
      mute_state = "unmute";
      opacity = "0.4";
    }

    return (
      <div className="App">
        <a onClick={(e) => this.mute(e)} href="#" className="mute-btn">
            <img alt="mute" id="mute-button" style={{opacity}} src={`./images/${mute_state}.png`} title={`${mute_state}`}/>
          </a>
        <div className="soundList container">
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="stream" muted={`${muted}`} />
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="wave" muted={`${muted}`}/>
          </div>
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="train" muted={`${muted}`}/>
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="fan" muted={`${muted}`}/>
            
          </div>
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="stream"muted={`${muted}`}/>
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="wave" muted={`${muted}`}/>
          </div>
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="train" muted={`${muted}`}/>
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="fan" muted={`${muted}`}/>
            
          </div>
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="stream" muted={`${muted}`}/>
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="wave" muted={`${muted}`}/>
          </div>
          <div className="row more-space">
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="train" muted={`${muted}`}/>
            <div className="col-lg-2 col-md-2 hiddne-sm hidden-xs"></div>
            <Sound name="fan" muted={`${muted}`}/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NoiseMain;
