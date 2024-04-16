import React from 'react'
import "../globals.css"
import '@/components/reuse/styles/style.css'
import '@/components/reuse/styles/responsive.css'
import Background from '@/components/reuse/background'
import Link from 'next/link'


const CompsPage = () => {
  return (
    <>
        <Background />
        <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: '2rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484V17.5c0 .534-.208 1.036-.586 1.414c-.756.756-2.077.751-2.823.005l-6.293-6.207a1 1 0 0 1 0-1.425l6.288-6.203c.754-.755 2.073-.756 2.829.001c.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1a.999.999 0 0 1-1.836.548m-7.141-5.536c2.207.056 4.638.394 6.758 2.121a7.985 7.985 0 0 0-6.893-6.08C11.384 9.996 11 10 11 10V6.503l-5.576 5.496l5.576 5.5V14z"/></svg>
        &nbsp;Go to Komponents</Link>
    </>
  )
}

export default CompsPage
