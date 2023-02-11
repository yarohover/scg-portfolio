/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Penguin.module.css';

function Penguin(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>First Penguins Party Invitaion</h3>
        <p>
          모두가 머뭇거리고 눈치만 볼 때 가장 먼저 바다로 뛰어드는 펭귄과 같이,<br></br>
          새로운 아이디어나 기술력을 갖고 새 시장에 과감히 뛰어드는 사람들을 위한 파티<br></br>
          <strong>『퍼스트 펭귄스 파티』</strong>의 초대장 제작을 의뢰받아 제작한 웹페이지 입니다.

        </p>
        <span><a href='https://yarohover.github.io/first-penguin-invite' target='_blank'>Visit</a></span>
      </div>
      
    </div>
  </div>
};

export default Penguin;