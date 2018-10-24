import React, { Component } from 'react'
import Task from './Task';

class ArtistList extends Component {

  state = {
    artistas: [
      {
        "key": "A0001",
        "name": "BIGBANG",
        "photo": "https://lastfm-img2.akamaized.net/i/u/770x0/4e35a9009004adfe10b1624de2c09171.jpg#4e35a9009004adfe10b1624de2c09171"
      },
    ]
  }
  render() {
    return (
      <div className="ArtistList">
      {this.state.artistas.map((artista, index)=>{
        return(
          <Task
            key={index}
            artista={artista}
          />
        )
      })}
      </div>
    )
  }
}


export default ArtistList;
























/* import React from 'react'

class ArtistRow extends React.Component {
  render() {
    return  <table key={this.props.artist.id}>
        <tbody>
          <tr>
            <td>
              <img alt = "poster" width="400" src={this.props.artist.photo} />
            </td>
            <td>
              {this.props.artist.name}
              <p>{this.props.artist.overview}</p>
            </td>
          </tr>
        </tbody>
      </table> 
 
  }
}

export default ArtistRow */