import React from 'react';
import StylePlaylistHeader from './styles/StylePlaylistHeader';
import StyledJourney from './styles/StyledJourney';


const StyledPlaylistHeader=({active, total})=>(
    <StyledPlaylistHeader>
        <p>{active.title}</p>
        <StyledJourney>
            {active.num} / {total}
        </StyledJourney>
    </StyledPlaylistHeader>
)
export default StylePlaylistHeader;