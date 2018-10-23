import React from 'react'

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

export default ArtistRow