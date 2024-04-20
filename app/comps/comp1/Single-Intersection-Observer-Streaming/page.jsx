import React from 'react'
import "@/app/globals.css"
import '@/components/reuse/styles/style.css'
import '@/components/reuse/styles/responsive.css'
import Background from '@/components/reuse/background'
import Footer from '@/components/reuse/footer'
import BackTobtn from '@/components/reuse/backTobtn'

const SingleIOStreaming = () => {
    return (
        <>
            <Background />
            <nav className='main-nav'>
                <h1><a href="/"><img src="/kImg/k-logo.png" alt="Komponents" /></a></h1>
                <h2>Intersection Observer Streaming<span>Next.js 14 single client component</span></h2>
                <div>
                    <a href="#" style={{ display: 'none' }}></a>
                    <a href="https://github.com/keval-gohil" target='_blank'><i className='mdi--github'></i>&nbsp;GitHub Code</a>
                </div>
            </nav>
           <BackTobtn />
            <Footer />
        </>
    )
}

export default SingleIOStreaming
