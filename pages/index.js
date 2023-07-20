import CanvasBackground from '../public/components/canvasBackground/canvasBackground';
import style from './styleIndex.module.css';

function Home(){
    return (
        <div className={style.Home}>
            <CanvasBackground/>
        </div>
    );
}

export default Home