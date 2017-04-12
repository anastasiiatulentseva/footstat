import React from 'react';
import { Table } from 'react-bootstrap';

export default class MatchStats extends React.Component {

  render () {
    const matchStatsData = (
      <tr>
        <td>{this.props.statsData.played_on}</td>
        <td>{this.props.statsData.score}</td>
        <td>{this.props.statsData.duration}</td>
        <td>{this.props.statsData.referee}</td>
        <td>Y: {this.props.statsData.yellow_cards} / R: {this.props.statsData.red_cards}</td>
        <td>{this.props.statsData.substitutions}</td>
        <td>{this.props.statsData.city}</td>
        <td>{this.props.statsData.tournament}</td>
      </tr>
    );
    return (
      <div className="matches">
        <Table className="table match-stats-table table-hover">
          <caption className="match-stats-caption">
            <h3>Match statistics</h3>
            <small>{this.props.statsData.team1} - {this.props.statsData.team2}</small>
          </caption>
          <thead>
            <tr className="match-list-header">
              <th>
                Date
              </th>
              <th>
                Score
              </th>
              <th>
                Duration
              </th>
              <th>
                Referee
              </th>
              <th>
                Cards given
              </th>
              <th>
                Substitutions
              </th>
              <th>
                City
              </th>
              <th>
                Tournament
              </th>
            </tr>
          </thead>
          <tbody>
            {matchStatsData}
          </tbody>
        </Table>
      </div>
    );
  }
}
