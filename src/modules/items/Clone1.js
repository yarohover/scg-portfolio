/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Clone1.module.css';

function Clone1(){
  return <div className={styles.wrap}>
    <div className={styles.container}>
      <div className={styles.wrap2}>
        <h3>Portfolio Clone</h3>
        <p>
          &#32;구글에서 찾은 『주혜지』님의 포트폴리오를 <br />
          클론 코딩하였습니다.<br></br><br></br>
          css 라이브러리를 사용하지 않고, <br />
          <strong>바닐라 자바스크립트</strong>만을 이용하여 
          코딩했습니다.<br></br> <br />
          때문에 몇가지 한계점이 있었지만 <br />
          다양한 css, js 테크닉들을 배울 수 있었습니다. <br></br><br></br>
          특히 css key-frames를 이용한 <strong> 애니메이션</strong> 구현과,<br></br>
          js를 이용한 <strong>스크롤링 효과</strong>에 대해 많이 공부할 수 있었습니다.
        </p>
        <span><a href='https://yarohover.github.io/zezihi-copy/' target='_blank'>Visit</a></span>
        <span><a href='https://youtu.be/bPrFBcUm83E?t=278' target='_blank'>Original</a></span>
      </div>
      
    </div>
  </div>
};

export default Clone1;