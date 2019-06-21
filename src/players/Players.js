import React from 'react';

function Players(props) {
    // default players to empty array and pull it from props
    const { players = [] } = props;

    if(!players || !players.length) {
        return <h3>No players available!</h3>
    }

    return (
        <>
        <h3>Player List</h3>
        {players.map( p => (
            <div data-testid='player-name' key={p.id}>{p.name}</div>
        ))}
        </>
    );
}


export default Players;