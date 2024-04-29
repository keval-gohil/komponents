import React from 'react'
import "@/app/globals.css"
import '@/components/reuse/styles/style.css'
import '@/components/reuse/styles/responsive.css'
import Background from '@/components/reuse/background'
import Footer from '@/components/reuse/footer'
import BackToBtn from '@/components/reuse/backToBtn'
import Comp1 from '@/components/reuse/compsList/comp1'

const comp1LUI = () => {
    return (
        <>
            <Background />

            <nav className='main-nav'>
                <h1><a href="/"><img src="/kImg/k-logo.png" alt="Komponents" /></a></h1>
                <h2>Component-1 (Loading UI)<span>React-Next client components</span></h2>
                <div>
                    <a href="#" style={{ display: 'none' }}></a>
                    <a href="https://github.com/keval-gohil" target='_blank'><i className='mdi--github'></i>&nbsp;GitHub Code</a>
                </div>
            </nav>

            
           <BackToBtn />

            <div className="main-sec main-sec-comp">
                <Comp1 />
            </div>
            
            <Footer />
        </>
    )
}

export default comp1LUI
