/* Modules */
// import {useState, useEffect } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Penguin from "./items/Penguin.js"
import Clone1 from "./items/Clone1.js"
import Clone2 from "./items/Clone2.js"
import Clone3 from "./items/Clone3.js"
import Movie from "./items/Movie.js"
import Mine from "./items/Mine.js"
import Card from "./items/Card.js"
import NodeCRUD from "./items/NodeCRUD.js"

/* css */
// import './reset.css';
import styles from './Works.module.css';

function Works(){
  return <div className={styles.wrap}>
    <section className={styles.list}>
      <ul>
      <li className={styles.penguin}>
          <Link className={styles.link} to="./penguin">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Party Invitation
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.css}></li>
                    <li className={styles.js}></li>
                    <li className={styles.text}>Key<br></br>frames</li>
                    <li className={styles.text}>Meadia<br></br>queary</li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
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
                    <li className={styles.css}></li>
                    <li className={styles.react}></li>
                    <li className={styles.text}>fetch<br></br>api</li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.mineSweeper}>
          <Link className={styles.link} to="./mine">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Mine Sweeper
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.js}></li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.cardFlip}>
          <Link className={styles.link} to="./card">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  Card Flip Game
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.js}></li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.nodejsCRUD}>
          <Link className={styles.link} to="./nodejsCRUD">
            <div className={styles.listWrap}>
              <div className={styles.listLeft}>
                <h3 className={styles.listTitle}>
                  CRUD using node.js
                </h3>
                <div className={styles.listTech}>
                  <ul>
                    <li className={styles.nodejs}></li>
                  </ul>
                </div>
              </div>
              <div className={styles.listRight}>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.content}>
      <p>:&#41;</p>
      <article className={styles.item}>
        <Routes>
          <Route path="penguin" element={<Penguin></Penguin>}></Route>
          <Route path="clone1" element={<Clone1></Clone1>}></Route>
          <Route path="clone2" element={<Clone2></Clone2>}></Route>
          <Route path="clone3" element={<Clone3></Clone3>}></Route>
          <Route path="movie" element={<Movie></Movie>}></Route>
          <Route path="mine" element={<Mine></Mine>}></Route>
          <Route path="card" element={<Card></Card>}></Route>
          <Route path="nodejsCRUD" element={<NodeCRUD></NodeCRUD>}></Route>
        </Routes>
      </article>
    </section>
  </div>
};

export default Works;