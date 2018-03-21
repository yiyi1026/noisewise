import React, { Component } from 'react';
import './weight_watcher.css';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import WeightForm from './weight_form.jsx';
import WeightDetailContainer from './weight_detail_container.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css";


class WeightWatcher extends Component {
  constructor(props){
    super(props);

    this.renderEditable = this.renderEditable.bind(this)
  }

  componentDidMount(){
    this.props.requestAllWeights();
  }

  renderEditable(row) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = row.original;
          data[row.column.id] = e.target.innerHTML;          
        }}

        dangerouslySetInnerHTML={{
          __html: row.original[row.column.id]
        }}
      />
    );
  }

  render() {
    let chart = '';
    let {createWeight} = this.props;
    let finalData = [];
    let table = '';

    if(this.props.byId){
      let data = Object.values(this.props.byId);
      let bighash = {};

      data.forEach(d => {
        if(!bighash[d.date]){
          bighash[d.date]={date: d.date, id: d.id}
        }
        bighash[d.date][d.user_id] = d.weight_value;
      });

      
      Object.keys(bighash).sort().forEach( d => {
        finalData.push(bighash[d])
      })
      let dataSorted = data.sort(function(a,b) { 
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
 
      table = (
        <ReactTable
          data={dataSorted}
          columns={[
            {
              Header: "Weight",
              columns: [
                {
                  Header: "User",
                  accessor: "user_id",
                  Cell: this.renderEditable,
                  width: 80
                },
                {
                  Header: "Value",
                  id: "weight_value",
                  accessor: d => d.weight_value,
                  Cell: this.renderEditable,
                  width: 200
                },{
                  Header: "Date",
                  accessor: "date",
                  Cell: this.renderEditable,
                  width: 250
                },{
                  Header: "Action",
                  Cell: row => {
                    return (
                      <WeightDetailContainer weight={row.original} />
                    )
                  }
                }
              ]
            }
          ]}
          defaultPageSize={30}
          className="-striped -highlight"
        />
      )

      chart = <LineChart width={600} height={300} data={finalData}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="date" type="category"/>
                <YAxis type="number" domain={['dataMin-10', 'dataMax+3']}/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="1" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="2" stroke="#ffc658" />
              </LineChart>
    }
    return (
      <div className="App container">
        <div className='row chart-name'><h3 className='col-lg-8'>Progress</h3></div>
        <div className='row'>{chart}</div>
        <div className='row'><WeightForm createWeight={ createWeight } /></div>
        <div className="row">
          <div className="col-lg-8">
            {table}
          </div>
        </div>
      </div>
    );
  }
}

export default WeightWatcher;
