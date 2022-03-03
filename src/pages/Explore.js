// src/pages/Explore.js
import Layout from '../components/shared/Layout';
import styles from './Explore.module.css';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from '../components/shared/HorizontalCard';
import React, { useState } from 'react';

function Explore() {
  
  const [filter,setFilter] = useState('')
  const list = ['전체','BTS','LISA','아이폰']
  function category(e){
    if(e.target.innerHTML==='전체'){
      setFilter("");
    } else{
      setFilter(e.target.innerHTML)
    }
  }
  
  return (
    <Layout activeMenu="explore">
      <ul className={styles.cate}>
          {list.map((data,index)=>(
            <li onClick={category} key={index} className={filter === data
            ? styles.setCate
            : null
          }>{data}</li>
            ))}
        </ul>
      <ContentsLayout>
        {youtubeData['data'].filter((data)=>data.title.includes(filter)).map(function (data, index) {
          return <HorizontalCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Explore;