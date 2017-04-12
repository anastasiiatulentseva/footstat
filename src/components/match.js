import React from 'react';

export default class Match extends React.Component {

  render() {
    return (
      <tr className="match-list-item" key={this.props.key}>
        <td>
          {this.props.played_on}
        </td>
        <td>
          <a>
            {this.props.team1} - {this.props.team2}
          </a>
        </td>
        <td>
          {this.props.score}
        </td>
      </tr>
    );
  }

}
