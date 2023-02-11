/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Movie.module.css';

function Movie(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>Movie Rating Page</h3>
        <p>
          노마드코더님의 react강의를 따라 만든 <br />
          Movie Rating 웹페이지입니다.<br /><br />
          <strong>React 기본 문법</strong>과, 그속에서 <br />
          <strong>자바스크립트 효과</strong>를 구현하는대<br />
          중점을 두었습니다.<br /><br />
          <strong>Promise 객체, fetch api</strong>의 사용법과 <strong>css스타일링</strong>에<br></br>
          대한 지식도 얻을 수 있었습니다.
        </p>
        <span><a href='https://yarohover.github.io/nomad-react-app1/' target='_blank'>Visit</a></span>
      </div>
      
    </div>
  </div>
};

export default Movie;