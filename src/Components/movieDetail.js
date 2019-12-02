import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class MovieDetail extends React.Component {

  	render() {
  		return (
        <div className="card">
            <img src={this.props.poster} className="card-img-top" alt="poster"></img>
            <div class="card-body">
              <h5 class="card-title">
                <FormattedMessage id="description"/>
              </h5>
              <p class="card-text">
                  {this.props.description}
              </p>
              <p class="card-text">
                <FormattedMessage id="cast"/>: {this.props.cast}
              </p>
            </div>
        </div>
  		);
	}
}