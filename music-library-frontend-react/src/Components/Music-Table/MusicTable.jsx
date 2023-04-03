import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MusicTable.css'


class MusicTable extends React.Component {

    state = { details: [], }

    componentDidMount() {

        let data;
        axios.get('http://127.0.0.1:8000/api/music_library/')
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {  })
    }


    


    render() {
        return (
            <div>
        <form>
            <input
            type="text"
            
            />
        <button>Search</button>
        </form>
                <table className='table table-hover  table-striped table-responsive-sm table-margin'>
                    <thead>
                        <tr>
                            <th className='col'>#</th>
                            <th className='col'>Title</th>
                            <th className='col'>Artist</th>
                            <th className='col'>Album</th>
                            <th className='col'>Year</th>
                            <th className='col'>Genre</th>
                        </tr>
                    </thead>
                    {this.state.details.map((output, id) => (
                            <tbody key={id}>
                                <tr>
                                    <th className='row'>{output.id}</th>
                                    <td>{output.title}</td>
                                    <td>{output.artist}</td>
                                    <td>{output.album}</td>
                                    <td>{output.release_date}</td>
                                    <td>{output.genre}</td>
                                </tr>
                            </tbody>
                    ))}
                </table>
                <hr />
            </div>
        )
    }
};

 
export default MusicTable;
