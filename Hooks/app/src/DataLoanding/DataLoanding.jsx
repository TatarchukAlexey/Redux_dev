import React,{useState,useEffect} from 'react';
import useFetch from '../useFetch'

// data - попадет стейт
// setData - функция которая перезапишет стейт дата  
// принимает 2 аргумента 
const DataLoanding = () => {
    // const [data,setData] = useState ([]); 

    // useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(result => setData(result));
    // console.log('fetch');
    
    // },[])

  const data = useFetch('https://jsonplaceholder.typicode.com/users');
    return (
    <ul>
       {data.map(el=><li key={el.id}>{el.name}</li>)} 
    </ul>
    );
};

export default DataLoanding;