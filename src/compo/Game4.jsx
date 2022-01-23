import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Game4 = ({ tittle, clickedcount1, clickedcount2, gameoverg4, player1lifeg4, player2lifeg4, player1datag4, player2datag4 }) => {

    return (
        <>
            <div className='main' >
                <h3 className='h1'>{tittle}</h3>
                <div className='container'>
                    <div className='container_plyer'>
                        <h3 style={{ color: "white", marginTop: 10 }}>PIKACHU</h3>
                        <img className='pikachu' src='https://clipart.world/wp-content/uploads/2021/01/Happy-Pikachu-clipart-transparent-1.png' alt='' />
                        <h2 style={{ color: "white" }}>{player1datag4} <FavoriteBorderIcon /></h2>
                        <button className='btnp1' disabled={gameoverg4} onClick={player1lifeg4}>SHOOT🔫</button>
                    </div>


                    <div className='container_plyer'>
                        <h3 style={{ color: "white", marginTop: 10 }}>BULBASAUR</h3>
                        <img className='pikachu' src='https://pngimg.com/uploads/pokemon/pokemon_PNG52.png' alt='..' />
                        <h2 style={{ color: "white" }}>{player2datag4} <FavoriteBorderIcon /></h2>
                        <button className='btnp1' disabled={gameoverg4} onClick={player2lifeg4}>SHOOT🔫</button>
                    </div>
                </div>
                <div className='gameover'>
                    {player2datag4 === 0 && <h4 style={{ margin: 5, paddingRight: 4 }}><h1 style={{ color: "white" }}>PIKACHU</h1> WON...MATCH    <button className="btn4" onClick={clickedcount1} ><span></span><NavLink to="/">Click me To continue...</NavLink></button></h4>}

                    {player1datag4 === 0 && <h4 style={{ margin: 5, paddingRight: 4 }}><h1 style={{ color: "white" }}>BULBASAUR</h1>  WON...MATCH    <button className="btn4" onClick={clickedcount2}><span></span><NavLink to="/">Click me To continue...</NavLink></button></h4>}

                </div>

            </div>
        </>
    );
};

export default Game4;
