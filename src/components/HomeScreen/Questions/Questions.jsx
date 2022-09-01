import React from 'react'
import Email from '../Email/Email';
import QuestionsItem from './QuestionsItem';

function Questions() {
    const questions = [
        {   
            id:1, 
            title:'What is Netflix',
            items:[
                {   
                    desc1: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
                    desc2: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'
                }                
            ]
            
        },
        {   
            id:2, 
            title:'How much does Netflix cost?',
            items:[
                {   
                    desc1: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.',
                }                
            ]
            
        }
        ,
        {   
            id:3, 
            title:'Where can I watch?',
            items:[
                {   
                    desc1: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
                    desc2: 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
                }                
            ]
        },
        {   
            id:4, 
            title:'How do I cancel?',
            items:[
                {   
                    desc1: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
                }                
            ]
           
        },
        {   
            id:5, 
            title:'What can I watch on Netflix?',
            items:[
                {   
                    desc1: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
                }                
            ]
            
        },
        {   
            id:6, 
            title:'Is Netflix good for kids?',
            items:[
                {   
                    desc1: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
                    desc2: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
                }                
            ]
            
        },
        {   
            id:7, 
            title:'Why am I seeing this languaege?',
            items:[
                {   
                    desc1: 'Your browser preferences determine the language shown here.',
                }                
            ]
            
        }

    ]

  return (
    <>
        <div className='max-w-[78rem] mx-auto flex flex-col items-center lg:px-16 sm:px-6 px-0'>
            <h1 className='lg:text-[3.125rem] md:text-[2.5rem] text-2xl lg:mb-16 mb-5 font-bold text-white text-center px-4'>Frequently Asked Questions</h1>
            <div className='lg:w-[75%] md:w-[90%] w-full text-white lg:text-[1.625rem] md:text-xl text-lg'>
                {
                    questions.map(menu => <QuestionsItem key={menu.id} {...menu}/>)
                }
            </div>
        </div>
        <div className='max-w-[59.375rem] w-full mx-auto md:px-20 px-6 lg:mt-14 mt-4 text-white text-center'>
            <Email/>
        </div>
    </>
  )
}

export default Questions