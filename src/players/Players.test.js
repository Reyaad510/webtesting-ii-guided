import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players.js';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
// below will clean things up for us
import '@testing-library/react/cleanup-after-each';

it('should render', () => {
    render(<Players />)
});

it('should display default message with no players', () => {
    
    
    const { queryByText } = render(<Players />);

    const defaultMessage = queryByText(/no players/i);

    expect(defaultMessage).toBeInTheDocument();
})

it('should display players', () => {
    const players = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Greg' },
    { id: 3, name: 'Bobby-Joe' },
    ];

    const playerNames = players.map(p => p.name )

    const { getByText, getAllByTestId } = render(<Players players={players} />);
    
    // See that header exists
    getByText(/player list/i);

    // Below is array of players 
    const playerDivs = getAllByTestId('player-name');

    // comparing # elements of dom with the players array of objects are equal
    expect(playerDivs.length).toBe(players.length);

    // array containing text content of the divs
   const divTexts = playerDivs.map(d => d.textContent);

   // ust toequal when comparing things not primitive
   expect(playerNames).toEqual(divTexts);
})
