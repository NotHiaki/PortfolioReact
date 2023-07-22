import style from './skill.module.css'
import Title from '../title/title';
import ImgSkill from '../imgSkill/imgSkill';

function Skill(){
    return (
        <div className={style.Skill}>
            <Title text="SKILLS"/>
            <div className={style.imgSkillArea}>
                <ImgSkill src="/assets/nextjs.svg" title="next.js"/>
                <ImgSkill src="/assets/react.svg" title="react"/>
                <ImgSkill src="/assets/js.svg" title="javascript"/>
                <ImgSkill src="/assets/tailwind.svg" title="tailwind"/>
                <ImgSkill src="/assets/git.svg" title="git"/>
                <ImgSkill src="/assets/vscode.svg" title="vs code"/>
            </div>
        </div>
    );
}

export default Skill