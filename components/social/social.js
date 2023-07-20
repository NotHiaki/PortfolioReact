import style from './social.module.css';

function Social(props){
    return (
    <a href={props.lk} >
        <img src={props.src} className={style.Social}></img>
    </a>
    );
}

export default Social