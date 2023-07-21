import About from '../components/about/about.js';
import Home from '../components/home/home.js';
import Skill from '../components/skill/skill.js';
import style from './styleIndex.module.css';

function Index(){
    return (
    <div className={style.Index}>
        <Home/>
        <About/>
        <Skill/>
    </div>
    );
}

export default Index