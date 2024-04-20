import React from 'react'
import hooks from './hooks.png'
import { BiColor } from 'react-icons/bi'
import python from './python.webp'
import html from './html.webp'

export default function Page7() {
  return (
    <>
    
    <div className='box-8'>

        <h1 className='blog-h'>My Favourite</h1>
        <p className='blog-p'>I love to do these concepts to move the project faster with a less number of coding.</p>

    </div>
<div className='flex-8'>
    <div className='blog-box1'>
      <img className='hooks-img' src={hooks}></img>
      <h2 className='hooks-h'>What is the importance of hooks in ReactJS ?</h2>
      <p className='hooks-p'>In this article, you will learn what are hooks in ReactJS ? and when to use react hooks ? ReactJS is developed by facebook in the year 2013. There are many students and the new developer who have confusion between react and hooks in react. Well, it is not different, react is a programming language and hooks is ...</p>
      <button className='hooks-b'><a   href='https://www.freecodecamp.org/news/react-hooks-every-project-should-use/'  >Read more</a></button>
    </div>
    <div className='blog-box2'>
      <img className='python-img' src={python}></img>
      <h2 className='python-h'>What is the importance of oops in Python?</h2>
      <p className='python-p'>Object-oriented programming is a programming paradigm that provides a means of structuring programs so that properties and behaviors are bundled into individual objects. object-oriented programming is an approach for modeling concrete, real-world things, like cars, as well as relations between things, like companies and employees or students and teachers...</p>
       <button className='python-b'><a href='https://realpython.com/python3-object-oriented-programming/'>Read more</a></button>  
    </div> 
    <div className='blog-box3'>
    <img className='html-img' src={html}></img>
    <h2 className='html-h'>How To Style Figure and Image HTML Elements with CSS ?</h2>
    <p className='html-p'>When styling images on a web page with CSS, there are many important ideas to keep in mind. By default, web browsers display images in a raw format at their default size. This can lead to images being larger than the rest of the content. This tutorial will lead you through examples of image styling for web pages... </p>
     <button className='html-b'><a href='https://www.digitalocean.com/community/tutorials/how-to-style-figure-and-image-html-elements-with-css'>Read more</a></button>
    </div>
</div>

    </>

  )
}
