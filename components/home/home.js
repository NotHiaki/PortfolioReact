import CanvasBackground from '../canvasBackground/canvasBackground';
import Social from '../social/social';
import Title from '../title/title';
import style from './home.module.css';


function Home(){
    return (
        <div className={style.Home}>
            <CanvasBackground/>
            <div className={style.TitleAll}>
                <div className={style.TitleTop}>
                    <Title text="CELSO"/>
                    <Social src="/assets/githubWhite.svg" lk="https://github.com/NotHiaki"/>
                    <Social src="/assets/linkedinWhite.svg" lk="https://www.linkedin.com/in/hiaki/"/>
                </div>
                <div className={style.TitleBot}>
                    <Title text="HENRIQUE"/>
                    <Social src="/assets/arrowWhite.png"/>
                </div>
            </div>
        </div>
    );
}

export default Home