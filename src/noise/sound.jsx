import React, { Component } from 'react';
import Range from 'react-range';
// import './sound.css';

class Sound extends Component {
  constructor(props){
    super(props);
    
    let audio= new Audio(`/../sounds/${this.props.name}.mp3`);
    audio.volume = 0.2;

    this.state = {
      audio,
      toggle: false,
      volume: 0.2,
      visibility: "hidden"
    };
  }

  componentWillReceiveProps(nextProps){
    let next_muted = nextProps.muted;

    if (this.props.muted === next_muted){
      return;
    }else{
      let audio = this.state.audio;
      audio.muted = !audio.muted;
    }
  }

  visibility(toggle){
    let visibility;
    if (toggle){
      visibility = "visible";
    }else{
      visibility = "hidden";
    }
    this.setState({visibility});

  };

  play(e){
    e.preventDefault();
    // console.log('click play')
    let audio = this.state.audio;
    let toggle = this.state.toggle;
    if(toggle){
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({toggle: !toggle}, () => this.visibility(this.state.toggle));
    // console.log('finish play')
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
    let name = this.props.name;
    let opacity = "1";

    if(this.state.visibility === "hidden"){
      opacity = "0.4";
    }

    return (
      <div className="sound col-lg-2 col-md-2 col-sm-3 col-xs-3">
        <div className="col-centered">
          <a onClick={(e) => this.play(e)} style={{opacity}} href="#" className="sound-btn">
            <img alt={`${name}`} src={`./images/${name}.png`} id={`${name}`} /> 
          </a>
          <Range min={0} max={1} step={0.1} className={`slider ${this.state.visibility}`} value={this.state.volume} onChange={(e) => this.volumeAdjust(e)}/>
        </div> 
      </div>
    );
  }
}

export default Sound;
