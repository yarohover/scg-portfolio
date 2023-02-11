/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Info.module.css';

function Info(){
  return <div className={styles.wrap}>
    <h2>Informations</h2>
    <article className={`${styles.personal} clear`}>
      <div className={`${styles.face} clear`}></div>
      <p className={styles.life}>
        이름: 김석현<br />
        생년: 2000년<br />
        소속: 성균관대학교<br />
        전공: 전자전기공학부<br />
        학번: 2018년<br />
      </p>
      <div className={`${styles.icons} clear`}>
        <span className={styles.icon}>
          <a href="https://github.com/yarohover">
            <i className='icon-github-circled'></i>
            <span>github</span>
          </a>
        </span>
        <span className={styles.icon}>
          <a href="https://www.instagram.com/sokiohnkim_/">
            <i className='icon-instagram'></i>
            <span>instagram</span>
          </a>
        </span>
        <span className={styles.icon}>
          <a href="https://www.youtube.com/@sokhionkim">
            <i className='icon-youtube-play'></i>
            <span>Youtube</span>
          </a>
        </span>
      </div>
      <div className={styles.introduce}>
          <h3>소개</h3>
          <p>
            안녕하세요.<br/>
            약 9개월 정도 프론트엔드 기술을 공부하고 있는<br/>
            Yaro 김석현입니다. <br/><br/>
            현재까지 html, css, js, react 를 위주로 공부를 진행했고,<br/>
            python, p2p, http, Server-Client, DNS,<br/>
            Node.js, npm, REST api, fetch, Database 등<br/>
            기타 개념들에 대한 이해도 가지고 있습니다.<br/><br/>
            앞으로 프론트엔드 뿐만아니라 백엔드 기술까지 공부하여<br/>
            풀스택 개발자가 되는 것이 목표입니다.<br/><br/>
            SCG에 들어가서 현장에서 사용되는 기술들과<br/>
            작업 메커니즘에 대해 배우고 싶습니다.<br/><br/>
            웹개발 뿐만아니라 디자인에도 관심이 있어 포토샵과 일러스트레이터 1급 자격증을 획득했고,<br/>
            몇가지 로고 작업물을 만들어 본 경험이 있습니다.<br/><br/>
            잘부탁드립니다. 감사합니다.
          </p>
      </div>
      <div className={styles.youtube}>
        <h3>Youtube</h3>
        <div className={styles.video}>
          <iframe src="https://www.youtube.com/embed/T27nFdUusaU" title="“Married Life” - Michael Giacchino, with South Korea" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className={styles.design}>
        <h3>디자인</h3>
        <div className={styles.logo}>
          <div><div className={styles.logo1}></div></div>
          <div><div className={styles.logo2}></div></div>
          <div><div className={styles.logo3}></div></div>
          <div><div className={styles.logo4}></div></div>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>연락처</h3>
        <p>
          Phone: 010-3092-2127<br/>
          eMail: skhn00j@gmail.com
        </p>
      </div>
    </article>
    <footer>
      <span>made by Yaro.</span>
      <span>Copyright 2023. Yaro. All rights reserved.</span>
      <a href="https://www.flaticon.com/kr/free-icons/css" title="css 아이콘">html, css, js, react, nodesjs<br/>아이콘 제작자:Pixel perfect-Flaticon.</a>
      <span>Thank You.</span>

    </footer>
  </div>
};

export default Info;