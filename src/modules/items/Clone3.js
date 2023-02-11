/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Clone3.module.css';

function Clone3(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>Responsive Web Clone</h3>
        <p>
          웹스토리보이님의 웹스탠다드2 강의를 따라 만든 <br />
          <strong>Holi Grail Layout Responsive</strong> 웹페이지입니다.<br /><br />
          강의에서 사용하는 jquery를 사용하지 않고 <br />
          <strong>바닐라 자바스크립트와 css</strong>만을 이용해 구현해봤습니다.<br /><br />
          기본적인 웹의 <strong>medai queary</strong>를 이용한 <br />
          <strong>반응형 웹</strong>에 대한 기본적인 <br /> 지식을 얻을 수 있었습니다.
        </p>
        <span><a href='https://yarohover.github.io/zezihi-copy/' target='_blank'>Visit</a></span>
      </div>
      
    </div>
  </div>
};

export default Clone3;