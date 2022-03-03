// src/pages/Explore.js
import React, { useState } from 'react';
import Layout from '../components/shared/Layout';
import '../App.css'

function Assignment() {

const [check,useCheck]=useState(true);
  function Onclick(){
    useCheck(check=>!check)//클릭때마다 ! not 실행
  }

  return (
    <div className='box'>
        {/* {check && <div>true!</div>} */}
        {check === true
        ?<div className='true'>true</div>
        :<div className='false'>false</div>
        }
        <button onClick={Onclick}>click!</button>
    </div>
  );
}

export default Assignment;