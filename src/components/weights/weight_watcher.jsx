import React, { Component } from 'react';
import './weight_watcher.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class WeightWatcher extends Component {
  constructor(props){
    super(props);

    this.state = {
      muted: false,
    };
  
    
  }

  componentDidMount(){
    this.props.requestAllWeights();
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    let chart = '';
    if(this.props.byId){
      let data = Object.values(this.props.byId);
      let bighash = {};

      data.forEach(d => {
        if(!bighash[d.date]){
          bighash[d.date]={date: d.date, id: d.id}
        }
        bighash[d.date][d.user_id] = d.weight;
      });

      let finalData = []
      Object.keys(bighash).sort().forEach( d => {
        finalData.push(bighash[d])
      })

      // console.log(finalData)
      chart = <LineChart width={600} height={300} data={finalData}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="date" type="category"/>
                <YAxis type="number" domain={['dataMin-10', 'dataMax+3']}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="1" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="2" stroke="#ffc658" />
              </LineChart>
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {chart}
      </div>
    );
  }
}

export default WeightWatcher;
