/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './NodeCRUD.module.css';

function NodeCRUD(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>CRUD with Node.js</h3>
        <p>
          이고잉님의 강의를 참고하여 만든 <strong>node.js CRUD</strong> 페이지입니다. <br /><br />
          <strong>Node.js</strong>만을 사용하여 제작했습니다.

        </p>
        <span><a href='https://github.com/yarohover/nodejs-crud' target='_blank'>github</a></span>
      </div>
      
    </div>
  </div>
};

export default NodeCRUD;