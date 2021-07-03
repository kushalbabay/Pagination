import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import Pagination from './Pagination';

function App() {
  const [currPage,setCurrPage] = useState(1)
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  const minPage = 1
  const maxPage = 2

  useEffect(() => {
    setLoading(true)
    axios.get(`https://reqres.in/api/users?page=${currPage}`)
      .then(res => {
        let data = res.data.data;
        setData(data)
        setLoading(false)
      })
      .catch(()=> setLoading(false))
  },[currPage])
  return (
    <div className="App">
      <div className="output">

        {
          loading ? 
          "Loading..."
          :
          data.length===0 ? 
          "No Data Found..."
          :
        data.map(item => <Card key={item.id} {...item} />)}
      </div>
      <Pagination maxPage={maxPage} minPage={minPage} currPage={currPage} setPage={setCurrPage} />
    </div>
  );
}

export default App;
