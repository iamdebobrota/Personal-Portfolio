import React from 'react'
import { skill } from './Skill'
import './skill.css'
const SkillCard = () => {
 
  return (
    <div className='grid'>
       {
           skill.map(( item, index)=>(
               <div key={index} className='skill_child'>
<img src={item.img} alt="a" className='grid_img'/>
<p>{item.title}</p>

                   </div>
           ))
       }
    </div>
  )
}

export default SkillCard