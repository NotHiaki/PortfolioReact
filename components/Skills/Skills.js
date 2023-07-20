import style from './Skills.module.css';

function Skills(props){
    return <img src={props.src} className={style.Skills}></img>
}

export default Skills