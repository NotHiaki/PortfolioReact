import style from './title.module.css';

function Title(props){
    return <h1 className={style.Title}>{props.text}</h1>
}

export default Title;