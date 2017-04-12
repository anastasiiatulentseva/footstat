import React from 'react';
import { Table } from 'react-bootstrap';
import MatchStatsItem from "./match_stats_item";

export default class MatchStats extends React.Component {

  render () {
    return (
      <div className="matches">
        <Table className="table match-stats-table table-hover">
          <caption>
            {this.props.team1} - {this.props.team2} statistics
          </caption>
          <thead>
            <tr className="match-list-header">
              <th>
              Date
            </th>
              <th>
                Team1
              </th>
              <th>
                Team2
              </th>
              <th>
                Score
              </th>
              <th>
                Duration
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
                Referee
              </th>
              <th>
                Tournament
              </th>
            </tr>
          </thead>
          <tbody>
            <MatchStatsItem />
          </tbody>
        </Table>
      </div>
    );
  }
}
