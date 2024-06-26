import React from 'react'


const Header = () => {
  return (
    <>
        <nav className='main-nav'>
            <h1><a href="/"><img src="/kImg/k-logo.png" alt="Komponents" /></a></h1>
            <h2>Next - Node Components<span>using Next.js 14</span></h2>
            <div>
              <a href="https://kval.vercel.app/" target='_blank'>Author <i className='mynaui--arrow-up-right'></i></a>
              <a href="https://github.com/keval-gohil" target='_blank'><i className='mdi--github'></i>&nbsp;GitHub</a>
            </div>
        </nav>
    </>
  )
}

export default Header
