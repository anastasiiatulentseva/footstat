import React from 'react';
import $ from 'jquery';
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
        <table className="matches-table table-bordered">
          <thead>
            <tr className="match-list-header">
              <td>
                Date
              </td>
              <td>
                Teams
              </td>
              <td>
                Score
              </td>
            </tr>
          </thead>
          <tbody>
            {matches}
          </tbody>
        </table>
      </div>
    );
  }

  _fetchMatches() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/matches',
      success: (matches) => {
        this.setState({matches});
        console.log (matches);
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
