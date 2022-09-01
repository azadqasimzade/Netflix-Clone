import React,{ useState} from 'react'
import {Collapse} from 'react-collapse';
import { AiOutlinePlus } from 'react-icons/ai'

function QuestionsItem({title, items}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleButton = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <button className='w-full flex items-center justify-between bg-inputBg sm:p-4 p-2 mb-2' onClick={toggleButton}>{title} <span className='sm:text-4xl text-2xl'><AiOutlinePlus className={`${isOpen ? 'rotate-45' : ''} transition-all`}/></span></button>
        <ul>
            {
                items.map((item, index) =>(
                    <Collapse key={index} isOpened={isOpen}>
                        <li className='bg-inputBg mb-4 p-4'>
                            <div>{item.desc1}</div>
                            {
                                item.desc2 && <div className='mt-8'>{item.desc2}</div>
                            }
                        </li>
                    </Collapse>
                ))
            }
        </ul>
    </div>
  )
}

export default QuestionsItem