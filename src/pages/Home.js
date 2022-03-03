import styles from './Home.module.css';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';
import HomeCard from '../components/home/HomeCard';
import { useState } from 'react';

const target = ['전체', 'Music', 'Entertainment', 'Comedy'];

function Home() {
  const [filter, setFilter] = useState('전체');

  function mapFunc(data, index) {
    function category(e){
      if(e.target.innerHTML==='전체'){
        setFilter("");
      } else{
        setFilter(e.target.innerHTML)
      }
    }
    return (
      <ul className={styles.cate}>
          {target.map((data,index)=>(
            <li onClick={category} key={`cate-${index}`} className={filter === data
            ? styles.setCate
            : null
          }>{data}</li>
            ))}
        </ul>
    );
  }

  function filterFunc(data) {
    if (filter === '전체' || data.category === filter) return true;
    return false;
  }
  return (
    <Layout activeMenu="home">
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {youtubeData['data'].filter(filterFunc).map(HomeCard)}
        </div>
      </div>
    </Layout>
  );
}

export default Home;