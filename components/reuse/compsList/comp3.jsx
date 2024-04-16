import Link from 'next/link'
import React from 'react'

const Comp3 = () => {
  return (
    <>
      <div className="comps comp3">
      <h3 className='comps-h'>Component-1 <span>(Lazy-Loading...)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp3