import style from './imgSkill.module.css';

function ImgSkill(props){
    return <img src={props.src} title={props.title} className={style.ImgSkill}></img>
}

export default ImgSkill