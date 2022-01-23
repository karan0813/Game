
import { useState } from 'react/cjs/react.development';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Game1 from './compo/Game1';
import Game2 from './compo/Game2';
import Game3 from './compo/Game3';
import Game4 from './compo/Game4';
import Game5 from './compo/Game5';
import Home from './compo/Home';

function App() {
  const [count1, setcount1] = useState(0)
  const [count2, setcount2] = useState(0)
  // .......................
  const [player2data, setplayer2data] = useState(100)
  const [player1data, setplayer1data] = useState(100)
  const [player2datag2, setplayer2datag2] = useState(100)
  const [player1datag2, setplayer1datag2] = useState(100)
  const [player2datag3, setplayer2datag3] = useState(100)
  const [player1datag3, setplayer1datag3] = useState(100)
  const [player2datag4, setplayer2datag4] = useState(100)
  const [player1datag4, setplayer1datag4] = useState(100)
  const [player2datag5, setplayer2datag5] = useState(100)
  const [player1datag5, setplayer1datag5] = useState(100)
  const [gameover, setgameover] = useState(false)
  const [gameoverg2, setgameoverg2] = useState(false)
  const [gameoverg3, setgameoverg3] = useState(false)
  const [gameoverg4, setgameoverg4] = useState(false)
  const [gameoverg5, setgameoverg5] = useState(false)





//  plyer 1
  const player1life = () => {
      const rendom = Math.floor(Math.random() * 6)
      if (player2data <= 0) {
          setplayer2data(0)
          setgameover(true)
      } else {

          if (player2data <= 6) {
              setplayer2data(player2data - 1)
          } else {
              setplayer2data(player2data - rendom)
          }


      }

  }
  const player2life = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player1data <= 0) {
        setplayer1data(0)
        setgameover(true)
    } else {
        if (player1data <= 6) {
            setplayer1data(player1data - 1)
        } else {
            setplayer1data(player1data - rendom)
        }


    }

  }
  // plyer 1 end
  // plyer 2
  const player1lifeg2 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player2datag2 <= 0) {
      setplayer2datag2(0)
        setgameoverg2(true)
    } else {

        if (player2datag2 <= 6) {
          setplayer2datag2(player2datag2 - 1)
        } else {
          setplayer2datag2(player2datag2 - rendom)
        }


    }

  }
  const player2lifeg2 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player1datag2 <= 0) {
      setplayer1datag2(0)
        setgameoverg2(true)
    } else {
        if (player1datag2 <= 6) {
          setplayer1datag2(player1datag2 - 1)
        } else {
          setplayer1datag2(player1datag2 - rendom)
        }


    }

}
// player 2 end
  // player 3
  const player1lifeg3 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player2datag3 <= 0) {
      setplayer2datag3(0)
        setgameoverg3(true)
    } else {

        if (player2datag3 <= 6) {
          setplayer2datag3(player2datag3 - 1)
        } else {
          setplayer2datag3(player2datag3 - rendom)
        }


    }

  }
  const player2lifeg3 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player1datag3 <= 0) {
      setplayer1datag3(0)
        setgameoverg3(true)
    } else {
        if (player1datag3 <= 6) {
          setplayer1datag3(player1datag3 - 1)
        } else {
          setplayer1datag3(player1datag3 - rendom)
        }


    }

}
// plyer 3 end
  // player 4
  const player1lifeg4 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player2datag4 <= 0) {
      setplayer2datag4(0)
        setgameoverg4(true)
    } else {

        if (player2datag4 <= 6) {
          setplayer2datag4(player2datag4 - 1)
        } else {
          setplayer2datag4(player2datag4 - rendom)
        }


    }

  }
  const player2lifeg4 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player1datag4 <= 0) {
      setplayer1datag4(0)
        setgameoverg4(true)
    } else {
        if (player1datag4 <= 6) {
          setplayer1datag4(player1datag4 - 1)
        } else {
          setplayer1datag4(player1datag4 - rendom)
        }


    }

  }
  

  // plyer 4 end
  // player 5
  const player1lifeg5 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player2datag5 <= 0) {
      setplayer2datag5(0)
        setgameoverg5(true)
    } else {

        if (player2datag5 <= 6) {
          setplayer2datag5(player2datag5 - 1)
        } else {
          setplayer2datag5(player2datag5 - rendom)
        }


    }

  }
  const player2lifeg5 = () => {
    const rendom = Math.floor(Math.random() * 6)
    if (player1datag5 <= 0) {
      setplayer1datag5(0)
        setgameoverg5(true)
    } else {
        if (player1datag5 <= 6) {
          setplayer1datag5(player1datag5 - 1)
        } else {
          setplayer1datag5(player1datag5 - rendom)
        }


    }

  }
  
  // player 5 end

  


  
 
  const clickedcount1 = () => {
    setcount1(count1 +1)  
  }
 
  const clickedcount2 = () => {
    setcount2(count2 +1)
  }
    
  return (
    <div className='main__container'>
      
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home
              count1={count1}
              count2={count2}
              clickedcount2={clickedcount2}
              clickedcount1={clickedcount1}
              gameover={gameover}
              gameoverg2={gameoverg2}
              gameoverg3={gameoverg3}
              gameoverg4={gameoverg4}
              gameoverg5={gameoverg5}
              player2data={player2data}
              player1data={player1data}
              player2datag2={player2datag2}
              player1datag2={player1datag2}
              player2datag3={player2datag3}
              player1datag3={player1datag3}
              player2datag4={player2datag4}
              player1datag4={player1datag4}
               player2datag5={player2datag5}
              player1datag5={player1datag5}
            />
          </Route>
          <Route path="/game1" exact>
            <Game1 tittle="Round-1"
              clickedcount1={clickedcount1}
              player2data={player2data}
              player1data={player1data}
              clickedcount2={clickedcount2}
              player1life={player1life}
              player2life={player2life}
              gameover={gameover} />
          </Route>
          <Route path="/game2" exact>
            <Game2 tittle="Round-2"
              clickedcount1={clickedcount1}
              player2datag2={player2datag2}
              player1datag2={player1datag2}
              clickedcount2={clickedcount2}
              player1lifeg2={player1lifeg2}
              player2lifeg2={player2lifeg2}
              gameoverg2={gameoverg2} />
          </Route>
          <Route path="/game3" exact>
            <Game3 tittle="Round-3"
              clickedcount1={clickedcount1}
              player2datag3={player2datag3}
              player1datag3={player1datag3}
              clickedcount2={clickedcount2}
              player1lifeg3={player1lifeg3}
              player2lifeg3={player2lifeg3}
              gameoverg3={gameoverg3} />
          </Route>
          <Route path="/game4" exact>
            <Game4 tittle="Round-4"
              clickedcount1={clickedcount1}
              player2datag4={player2datag4}
              player1datag4={player1datag4}
              clickedcount2={clickedcount2}
              player1lifeg4={player1lifeg4}
              player2lifeg4={player2lifeg4}
              gameoverg4={gameoverg4} />
          </Route>
          <Route path="/game5" exact>
            <Game5 tittle="Round-5"
              clickedcount1={clickedcount1}
              player2datag5={player2datag5}
              player1datag5={player1datag5}
              clickedcount2={clickedcount2}
              player1lifeg5={player1lifeg5}
              player2lifeg5={player2lifeg5}
              gameoverg5={gameoverg5} />
          </Route>
         
        </Switch>
     </Router>

      
      
      
      
      
    
    </div>
  );
}

export default App;