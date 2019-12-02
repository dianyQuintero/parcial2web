import React from 'react';
import Movie from "./movie";
import * as d3 from 'd3';

import {FormattedMessage} from 'react-intl';

export default class MoviesList extends React.Component {
    constructor(){
        super();
        this.state={
            movies:[],
            act:{}
        }
    }
    componentDidMount(){

        if(navigator.language==="es"){
            fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState({ movies: res });
                this.drawChart(this.state.movies);  
                localStorage.setItem('movies', res);
            });
            
        }
        else if(navigator.language==="en"){
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState({ movies: res });
                this.drawChart(this.state.movies);
                localStorage.setItem('movies', res);  
            });  
            
        }
        
    }
    drawChart(data) {
        console.log(data);
        const width = 700;
        const height = 500;
        const margin = { top:10, left:100, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;
        const svg = d3.select(this.refs.canvas).append("svg");

        svg.attr("width", width);
        svg.attr("height", height);

        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear() 
            .domain([0, 10000000])
            .range([iheight, 0]);

        const x = d3.scaleBand()
        .domain(data.map(d => d.id) ) 
        .range([0, iwidth])
        .padding(0.1); 

        const bars = g.selectAll("rect").data(data);

        bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "red")
        .attr("x", d => x(d.id))
        .attr("y", d => y(d.views))
        .attr("height", d => iheight - y(d.views))
        .attr("width", x.bandwidth())  

        g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);  

        g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
    }
  render() {
   
        return (
            <div ref ="canvas" className="container">
                <div className="row">
                <div className="col-9">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"><FormattedMessage id="name"/></th>
                      <th scope="col"><FormattedMessage id="directedBy"/></th>
                      <th scope="col"><FormattedMessage id="country"/></th>
                      <th scope="col"><FormattedMessage id="budget"/></th>
                      <th scope="col"><FormattedMessage id="releaseDate"/> </th>
                      <th scope="col"><FormattedMessage id="views"/></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.movies.map( (e,i) => <Movie key={i} movie={e}/>)}
                  </tbody>
                </table>
              </div>
         </div>
        </div>
              
    );
  }
}