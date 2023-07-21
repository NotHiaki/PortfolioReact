import style from '../about/about.module.css';
import AboutText from '../aboutText/aboutText';
import Title from '../title/title';

function About(){
    return (
    <div className={style.About} id='BreakScroll'>
        <div className={style.AboutContent}>
            <Title text="ABOUT ME"/>
            <AboutText/>
        </div>
    </div>
    );
}

export default About