import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MatchStatsItem from "./match_stats_item";
import MatchStats from "./match_stats";

export default class Match extends React.Component {

  constructor() {
    super();
    this.state = {
      matchStats: []
    };
  }

  render() {
    return (
      <tr className="match-list-item" key={this.props.id}>
        <td>
          {this.props.played_on}
        </td>
        <td>
          <a onClick={this._fetchMatchStats.bind(this)}>
            {this.props.team1} - {this.props.team2}
          </a>
        </td>
        <td>
          {this.props.score}
        </td>
      </tr>
    );
  }

  _fetchMatchStats() {
    $.ajax({
      method: 'GET',
      url: this.props.stats_url,
      success: (matchStats) => {
        this.setState({matchStats});
      }
    });
    console.log(this);
    ReactDOM.render(
      <MatchStats matchID={this.props.id}/>,
      document.getElementById('match_stats')
    );
  }

  _getMatchStats() {
    return this.state.matchStats.map((stats) => {
      console.log("stats", stats);
      return <MatchStatsItem
        {...stats}
        key={stats.id}
      />
    });

  }
}
