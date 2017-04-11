import React from 'react';

export default class Match extends React.Component {

  render () {
    return(
      <tr className="match-list-item" key={this.props.key}>
        <td>
          {this.props.played_on}
        </td>
        <td>
          {this.props.team1_name} - {this.props.team2_name}
        </td>
        <td>
          {this.props.score}
        </td>
      </tr>
    );
  }
}
