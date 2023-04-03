import React, { useState } from 'react';
import axios from 'axios';

function SongForm() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    release_date: '',
    genre: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/songs/', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    

    <div className="form-spacing">
            <header>
                <h3>Add Songs</h3>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='form-group group-margin'>
                    <input
                    type="text"
                    value={formData.title}
                    placeholder="Title"
                    onChange={handleChange}
                    />
                </div>
                <div className='form-group group-margin'>
                    <input
                    type="text"
                    value={formData.artist}
                    placeholder="Artist"
                    className="form-group"
                    onChange={handleChange}
                    />
                </div>
                <div className='form-group group-margin'>
                    <input
                    type="text"
                    value={formData.release_date}
                    placeholder="Year"
                    onChange={handleChange}
                    />
                </div>
                <div className='form-group group-margin'>
                    <input
                    type="text"
                    value={formData.album}
                    placeholder="Album"
                    onChange={handleChange}
                    />
                </div>
                <div className='form-group group-margin'>
                    <input
                    type="text"
                    value={formData.genre}
                    placeholder="Genre"
                    onChange={handleChange}
                    />
                </div>
            
    
            <button  className='btn btn-primary' type="submit">Create</button>
    
            
            </form>
        </div>
  )
    
}

export default SongForm;
