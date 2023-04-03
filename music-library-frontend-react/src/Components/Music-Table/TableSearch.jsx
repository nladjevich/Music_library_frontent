import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableSearch() {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTableData, setFilteredTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/music_library/');
      setTableData(response.data);
    }
    fetchData();
  }, []);

  const filterTableData = (query) => {
    return tableData.filter((row) => {
      return row.title.includes(query) || row.artist.includes(query) || row.album.includes(query) || row.release_date.includes(query) || row.genre.includes(query);
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setFilteredTableData(filterTableData(searchQuery))}>Search</button>
      </form>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            </thead>
        </table>
    </div>
  );

}

export default TableSearch;