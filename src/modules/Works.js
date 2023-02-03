/* Modules */
// import {useState, useEffect } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Clone1 from "./items/Clone1.js"

/* css */
// import './reset.css';
import styles from './Works.module.css';

function Works(){
  return <div className={styles.wrap}>
    <section className={styles.list}>
      <ul>
        <li className={styles.clone1}>
          <Link className={styles.link} to="./clone1">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Portfolio Clone
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.html}></li>
                    <li className={styles.css}></li>
                    <li className={styles.js}></li>
                    <li className={styles.text}>Key<br></br>frames</li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.clone2}>
          <Link className={styles.link} to="./clone2">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Example Page Clone
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.html}></li>
                    <li className={styles.css}></li>
                    <li className={styles.js}></li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.clone3}>
          <Link className={styles.link} to="./clone3">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Responsive Web Clone
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.html}></li>
                    <li className={styles.css}></li>
                    <li className={styles.js}></li>
                    <li className={styles.text}>Meadia<br></br>Queary</li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.movie}>
          <Link className={styles.link} to="./movie">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Movie Rating Page
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.html}></li>
                    <li className={styles.css}></li>
                    <li className={styles.js}></li>
                    <li className={styles.react}></li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
    <section className={styles.content}>
      <p>:&#41;</p>
      <article className={styles.item}>
        <Routes>
          <Route path="clone1" element={<Clone1></Clone1>}></Route>
        </Routes>
      </article>
    </section>
  </div>
};

export default Works;