import React, { useContext } from 'react'
import { MyContext } from '../useContext'

const CategorySelect = () => {  
  const { setCategory1, category1 } = useContext(MyContext)

  const handleCategory = (e) => {
    if (e.target.value === 'See All Posts') {
      setCategory1('')
    } else {
      setCategory1(e.target.value)
    }
  }
   
  return (
    <div>
      <select className='absolute mt-3 ml-8 w-[270px] xs:w-fill xs:ml-2 border border-black rounded-md' value={category1} 
      onChange={handleCategory}>
        <option value="" disabled selected>Select category</option>
        <option value='Sports'>Sports</option>
        <option value='Tech'>Tech</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Education'>Education</option>
        <option value='Food'>Food</option>
        <option value='Travel'>Travel</option>
        <option value='Music'>Music</option>
        <option value='Fitness'>Fitness</option>
        <option value='Fashion'>Fashion</option>
        <option value='Other'>Other</option>
        <option value='See All Posts'>See All Posts</option>
      </select>  
    </div>
  )
}

export default CategorySelect
