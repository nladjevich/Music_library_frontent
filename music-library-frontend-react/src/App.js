import React, { useState, useEffect } from 'react';
import MusicTable from './Components/Music-Table/MusicTable';
import './App.css'
import AddSong from './Components/AddSong/AddSong';
import SongForm from './Components/AddSong/AddSong2';
import TableSearch from './Components/Music-Table/TableSearch';


function App() {
  return (
    <div>
      <header className='header-margin'>
        <h1>Music Library</h1>
        <h6>by Nicholas Ladjevich</h6>
        <hr></hr>
      </header>
      <MusicTable></MusicTable>
      <SongForm></SongForm>
      
    </div>
  );
}

export default App;
