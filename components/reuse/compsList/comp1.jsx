import Link from 'next/link'
import React from 'react'

const Comp1 = () => {
  return (
    <>
      <div className="comps comp1 LoadingUI">
        <h3 className='comps-h'>Comp-1 <span>(Loading UI)</span></h3>
        <ul>
          <li><Link href="/comps/comp1/Single-Intersection-Observer-Streaming">Single Intersection Observer Streaming</Link></li>
          {/* <li><Link href="/comps">Bulk Intersection Observer Streaming</Link></li> */}
        </ul>
      </div>
    </>
  )
}

export default Comp1
