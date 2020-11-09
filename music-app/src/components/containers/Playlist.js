import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';
import PlaylistItem from '../PlaylistItem';

const Playlist = ({videos, active, nightModeCallback, nightMode}) => (
    <StyledPlaylist>
    <NightMode nightModeCallBack={nightModeCallback} nightMOde={nightMode}/>
    <PlaylistHeader active={active} total={videos.length}/>
    <PlaylistItem video={videos} active={active}/>
    </StyledPlaylist>
)
export default Playlist;