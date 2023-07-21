import style from './imgSkill.module.css';

function ImgSkill(props){
    return <img src={props.src} className={style.ImgSkill}></img>
}

export default ImgSkill