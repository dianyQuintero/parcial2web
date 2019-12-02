import React from 'react';
import {FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';
import MovieDetail from "./movieDetail";


export default class Movie extends React.Component {

    
    getMillion = ()=>{
		if (this.props.movie.budget === 1){
			return <FormattedMessage id="Million"/>
		}
		else{
			return <FormattedMessage id="Millions"/>
		}
    }
    
  	render() {
  		return (
                <tr>
  				<th scope="row">{this.props.movie.id}</th>
      			<td>{this.props.movie.name}</td>
  				<td>{this.props.movie.directedBy}</td>
                <td>{this.props.movie.country}</td>
      			<td>{this.props.movie.budget} <FormattedPlural value = {this.props.movie.salary} one={this.getMillion()} other={this.getMillion()}/>   </td>
      			<td>
					<FormattedDate
						value={new Date(this.props.movie.date)}
						year='numeric'
						month='numeric'
						day='numeric'
					/>
				</td>
				<td> <FormattedNumber value={this.props.movie.views}/></td>
                <td> 
                    <button className="btn btn-primary" >
                        <FormattedMessage id="but"/>
                    </button>
                </td>
  			    </tr>
  		);
	}
}