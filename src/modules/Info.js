/* Modules */
// import {useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* css */
// import './reset.css';
import styles from './Info.module.css';

function Info(){
  return <div className={styles.wrap}>
    <h2>Welcome Info!</h2>
    <p>I'm Yaro</p>
    <p>This is my portfolio</p>
    <p>Please Enjoy :&#41;</p>
    <a href="https://www.flaticon.com/kr/free-icons/css" title="css 아이콘">Css 아이콘  제작자: Pixel perfect - Flaticon</a>
  </div>
};

export default Info;