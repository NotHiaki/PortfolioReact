import style from './skill.module.css'
import Title from '../title/title';
import ImgSkill from '../imgSkill/imgSkill';

function Skill(){
    return (
        <div className={style.Skill}>
            <Title text="SKILLS"/>
            <div className={style.imgSkillArea}>
                <ImgSkill src="/assets/nextjs.svg"/>
                <ImgSkill src="/assets/js.svg"/>
                <ImgSkill src="/assets/git.svg"/>
                <ImgSkill src="/assets/vscode.svg"/>
            </div>
        </div>
    );
}

export default Skill