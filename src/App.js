/* Modules */
import {useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./modules/Home.js";
import Works from "./modules/Works.js";
import Info from "./modules/Info.js";

/* css */
import './reset.css';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(37.296606);
  const [lon, setLon] = useState(126.989027);
  const [weathJson, setWeathJson] = useState(
      {
        name: "Seoul-si",
        weather: [
          {
            main: "Clear",
            icon: "10d"
          }
        ],
        main: {
          temp: "273.15",
          humidity: "15",
        }
      }
    );

  async function getWether(){
    const _json = await(
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_openWeatherToken}&lang=en&units=metric`)
    ).json();
    const timer = function(time){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve(time);
        }, time);
      });
    };
    await timer(1000);
    setWeathJson(_json);
    setLoading(false);
  };
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    getWether();

  },[]);

  const bfLoad = <div className={styles.loadBody}>
    <div className={styles.loadingContainer}>
      <div className={styles.loading}></div>
      <div className={styles.loadingText}>loading</div>
    </div>
    <a className={styles.link} href="http://www.domsammut.com/about#utm_source=web&utm_medium=demo&utm_campaign=CodePen" title="domsammut.com">domsammut.com</a>
  </div>

  const afLoad = <div>
    <div className={styles.wrap}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header className={styles.headerWrap}>
        <nav className={styles.navBox}>
          <div className={styles.logo}></div>
          <div className={styles.headline}>
            <h1><Link className={styles.mainLogo} to="/">YaroWay</Link></h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/works/">Works</Link></li>
            <li><Link to="/info">Informations</Link></li>
          </ul>
        </nav>
        <div className={styles.weathBox}>
          <ul className="clear">
            <li>{weathJson.name}</li>
            <li>Temp: {weathJson.main.temp}&#8451;</li>
            <li>Hum: {weathJson.main.humidity}&#37;</li>
          </ul>
          <div className={styles.weathIcon}>
            <img src={`http://openweathermap.org/img/wn/${weathJson.weather[0].icon}@2x.png`} alt="" />
            <p>{weathJson.weather[0].main}</p>
          </div>
        </div>
      </header>
      <section className={styles.bodyWrap}>
        <div className={styles.routerBox}>
          <Routes >
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/works/*" element={<Works></Works>}></Route>
            <Route path="/info" element={<Info></Info>}></Route>
          </Routes>
        
        </div>
      </section>
    </BrowserRouter>
    </div>
  </div>;

  return (
    <div className="App">
      {loading?bfLoad:afLoad}
    </div>
  );
}

export default App;
