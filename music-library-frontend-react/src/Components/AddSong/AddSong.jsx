import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddSong.css'


function AddSong() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://127.0.0.1:8000/api/music_library/", {
          method: "POST",
          body: JSON,
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setTitle("");
          setArtist("");
          setReleaseDate("");
          setAlbum("");
          setGenre("");
        } 
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="form-spacing">
        <header>
            <h3>Add Songs</h3>
        </header>
        <form onSubmit={handleSubmit}>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={artist}
                placeholder="Artist"
                onChange={(e) => setArtist(e.target.value)}
                className="form-group"
                />
            </div>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={release_date}
                placeholder="Year"
                onChange={(e) => setReleaseDate(e.target.value)}
                />
            </div>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={album}
                placeholder="Album"
                onChange={(e) => setAlbum(e.target.value)}
                />
            </div>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={genre}
                placeholder="Genre"
                onChange={(e) => setGenre(e.target.value)}
                />
            </div>
          
  
          <button  className='btn btn-primary' type="submit">Create</button>
  
          
        </form>
      </div>
    );
  }

  export default AddSong;