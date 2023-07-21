import Link from 'react-scroll';
import dynamic from 'next/dynamic';
import CanvasBackground from '../canvasBackground/canvasBackground';
import Social from '../social/social';
import Title from '../title/title';
import style from './home.module.css';


function Home(){
    const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), {
        ssr: false
      });
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
                    <Link to='BreakScroll' smooth={true} duration={500}>
                        <Social src="/assets/arrowWhite.png"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home