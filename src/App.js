import React, { Component } from 'react';
import './App.css';
import ArtistRow from './components/ArtistRow'
import $ from 'jquery'


class App extends Component {

  constructor (props){
    super(props)
    this.state = {}


    this.performSearch()
  }   
  performSearch() {
      console.log('searching')
      const urlString ="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=e941da3543824deaddb92310754b2a2d&format=json"
      $.ajax({
        url: urlString,
        success:(searchResults) => { 
          console.log('fetch data') 
          //console.log(searchResults);
          const result= searchResults.result

          var artistRows=[]

        /*   result.forEach((artist)=>{
            console.log(artist.name);
            const artistRow= <ArtistRow artist= {artist}/>
            artistRows.push(artistRow)
          }) */

          this.setState({rows: artistRows})
    
        },
        error: (xhr, status, err)=>{
          console.log('failed fetch'); 
        }
      })
  }


  render () {
    return (
      <div>
      <table className="titleBar" >
        <tbody>
          <tr>
            <td>
              <img alt="icon" width ="50" src="spotify-brands.svg" />
            </td>
            <td width="20"/>
            <td>
              <h2>Ranking Artist</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <input className="imput" placeholder="Busca a tu artista"/>
      {this.state.rows}
      </div>
    );
  };
  
}

export default App;
