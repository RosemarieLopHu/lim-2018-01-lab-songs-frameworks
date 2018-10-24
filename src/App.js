import React, { Component } from 'react';
import './App.css';
import ArtistList from './components/ArtistList'

class App extends Component {
  constructor(props){
    super(props);

    const groups = [
      {
        "key": "A0001",
        "name": "BIGBANG",
        "photo": "https://lastfm-img2.akamaized.net/i/u/770x0/4e35a9009004adfe10b1624de2c09171.jpg#4e35a9009004adfe10b1624de2c09171"
      },
      {
        "key": "A0002",
        "name": "GOT7",
        "photo": "https://lastfm-img2.akamaized.net/i/u/770x0/3efa8da6323b2294edf066bc05938434.jpg#3efa8da6323b2294edf066bc05938434"
    },
    {
      "key": "A0003",
      "name": "G-DRAGON",
      "photo": "https://lastfm-img2.akamaized.net/i/u/770x0/ff816cf987e76af74cc95f7f68ec1b20.jpg#ff816cf987e76af74cc95f7f68ec1b20"
  },
  {
    "key": "A0004",
    "name": "Cardi B",
    "photo": "https://lastfm-img2.akamaized.net/i/u/770x0/0a96110d2e2629a881e848c5958bbe7e.jpg#0a96110d2e2629a881e848c5958bbe7e"
},
    ]
    this.state={ rows: [
      <p key="1">Here is the artist</p>,
      <p key="2">Here is the artist</p>,
      <p key="3">Here is the artist</p>,
      <p key="4">Here is the artist</p>
    ]}
     var singers=[]
     groups.forEach((artist)=>{
       const singer = <table key={groups.key}>
         <tbody>
           <tr>
             <td>
               <img alt ="poster" width="100" src={groups.photo}/>
             </td>
           </tr>
         </tbody>
       </table>
       singers.push(<p> Artist Name: {artist.name}</p>)

     })
     this.state={rows: singers}

  }
//component for request
/*   componentDidMount()
  {
    fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=e941da3543824deaddb92310754b2a2d&format=json")
    .then((Response)=>Response.json())
    .then((findresponse)=>
    {
      console.log(findresponse.artist)
      this.setState({
        data: findresponse.artist,
      })
     
    })
  }
render()
{
  return(
    <div>
    {
      this.state.data.map((artistData,i)=>
      <div>

      </div>
      )
    }
    </div>
  )

}

} */

/* class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      data: '',
    }

)
  }
*/

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
