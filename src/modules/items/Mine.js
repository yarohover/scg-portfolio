/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Mine.module.css';

function Mine(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>Mine Sweeper</h3>
        <p>
          제로초님의 강의를 참고하여 만든 <strong>지뢰찾기</strong> 게임입니다. <br /><br />
          <strong>바닐라 자바스크립트</strong>만을 사용하여 제작했습니다.

        </p>
        <span><a href='https://yarohover.github.io/js-games/mine-sweeper/mine_sweeper.html' target='_blank'>Visit</a></span>
      </div>
      
    </div>
  </div>
};

export default Mine;