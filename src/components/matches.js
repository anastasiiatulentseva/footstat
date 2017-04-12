import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';
import Match from "./match";

export default class Matches extends React.Component {

  constructor() {
    super();
    this.state = {
     matches: []
    };
}

  componentWillMount() {
    this._fetchMatches();
  }

  componentDidMount() {
    this._timer = setInterval(
      ()=> this._fetchMatches(),
      20000
    );
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  render () {
    const matches = this._getMatches();
    return (
      <div className="matches">
        <Table className="table matches-table table-hover">
          <thead>
            <tr className="match-list-header">
              <th>
                Date
              </th>
              <th>
                Teams
              </th>
              <th>
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {matches}
          </tbody>
        </Table>
      </div>
    );
  }

  _fetchMatches() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/matches',
      success: (matches) => {
        this.setState({matches});
      }
    });
  }

  _getMatches() {
    return this.state.matches.map((match) => {
      return <Match
        key={match.id}
        {...match}
      />
    });
  }
}
