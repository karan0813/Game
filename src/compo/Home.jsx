import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./home.css"

const Home = ({ gameover, gameoverg2, gameoverg3, gameoverg4, gameoverg5, count1, count2, player2data, player1data, player1datag2, player2datag2, player1datag3, player2datag3, player1datag4, player2datag4, player1datag5, player2datag5 }) => {
    return <>

        <h1 className='tittle'>SHOOTING-GAME <img className='title__img' src='https://freepngimg.com/thumb/categories/1756.png' alt='...' /></h1>
        <div >


            <table className="customers" style={{ width: "80%", margin: "auto" }}>
                <h3 style={{ color: "white" }}>Scoore-Bord</h3>
                <tr>
                    <th>Round</th>
                    <th>winner</th>
                    <th>action</th>
                </tr>
                {<tr>
                    <td className='round'>Round-1</td>
                    <td ><h4 className='table__winner'> {player2data === 0 && "Player One is the Winner🏆"}{player1data === 0 && "Player Two is the Winner🏆"}</h4></td>
                    <td className='round'><NavLink to="/game1">Start....Game</NavLink></td>
                </tr>}
                {gameover === true && <tr>
                    <td className='round'>Round-2</td>
                    <td><h4 className='table__winner'>{player2datag2 === 0 && "Player One is the Winner🏆"}{player1datag2 === 0 && "Player Two is the Winner🏆"}</h4></td>
                    <td className='round'><NavLink to="/game2">Start....Game</NavLink></td>
                </tr>}
                {gameoverg2 === true && <tr>
                    <td className='round'>Round-3</td>
                    <td><h4 className='table__winner'>{player2datag3 === 0 && "Player One is the Winner🏆"}{player1datag3 === 0 && "Player Two is the Winner🏆"}</h4></td>
                    <td className='round'><NavLink to="/game3">Start....Game</NavLink></td>
                </tr>}
                {gameoverg3 === true && <tr>
                    <td className='round'>Round-4</td>
                    <td><h4 className='table__winner'>{player2datag4 === 0 && "Player One is the Winner🏆"}{player1datag4 === 0 && "Player Two is the Winner🏆"}</h4></td>
                    <td className='round'><NavLink to="/game4">Start....Game</NavLink></td>
                </tr>}
                {gameoverg4 === true && <tr>
                    <td className='round'>Round-5</td>
                    <td><h4 className='table__winner'>{player2datag5 === 0 && "Player One is the Winner🏆"}{player1datag5 === 0 && "Player Two is the Winner🏆"}</h4></td>
                    <td className='round'><NavLink to="/game5">Start...Game</NavLink></td>
                </tr>}


            </table>

        </div>;
        {<h1 className='result' >
            {count1 >= 3 && <h1 className='win'>congress Player-1 won the Series</h1>}
            {count2 >= 3 && <h1 className='win'>congress Player-2 won the Series</h1>}
        </h1>}
    </>
};

export default Home;
