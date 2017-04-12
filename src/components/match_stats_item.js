import React from 'react';

export default class MatchStatsItem extends React.Component {

  render() {
    return (
      <tr className="match-stats-item" key={this.props.id}>
        <td>
          {this.props.played_on}
        </td>
        <td>
          <a>
            {this.props.team1}
          </a>
        </td>
        <td>
          <a>
            {this.props.team2}
          </a>
        </td>
        <td>
          {this.props.score}
        </td>
        <td>
          {this.props.score}
        </td>
        <td>
          {this.props.yellow_cards} / {this.props.red_cards}
        </td>
        <td>
          {this.props.substitutions}
        </td>
        <td>
          {this.props.city}
        </td>
        <td>
          {this.props.referee}
        </td>
        <td>
          {this.props.tournament}
        </td>
      </tr>
    )
  };
}
