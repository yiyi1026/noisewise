import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Range from 'react-range';
import './sound.css';

class Sound extends Component {
  constructor(props){
    super(props);
    let audio= new Audio(this.props.name+".mp3")
    audio.volume = 0.2
    this.state = {
      audio,
      toggle: false,
      volume: 0.2,
      visibility: 'hidden'
    };
  }

  visibility(toggle){
    if(toggle){
      // console.log('v');
      this.setState({visibility: 'visible'});
    }else{
      // console.log('h');
      this.setState({visibility: 'hidden'});;
    }
  };

  play(){
    if(this.state.toggle){
      this.state.audio.pause();
      this.setState({toggle: false}, () => this.visibility(this.state.toggle));
    } else {
      this.state.audio.play();
      this.setState({toggle: true}, () => this.visibility(this.state.toggle));
    }
    // this.visibility(this.state.toggle);
  }

  volumeAdjust(e) {
    let audio = this.state.audio;
    audio.volume = e.target.value;
    this.setState({
      audio,
      volume: audio.volume
    });

  }

  render() {
    let opacity = {opacity: "1"};
    if(this.state.visibility == 'hidden'){
      opacity = {opacity: "0.5"};
    }
    // console.log(this.props.name);
    return (
      <div className="sound">
      <a onClick={() => this.play()} style={opacity} href="#dryer" >
        <img alt="Dryer" src={"./images/" + this.props.name + ".png"} id='dryer' /> 
       
      </a>
        <Range min={0} max={1} step={0.1} className={`slider ${this.state.visibility}`}value={this.state.volume} onChange={(e) => this.volumeAdjust(e)}/>
      </div>
    );
  }
}

export default Sound;
