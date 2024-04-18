import Link from 'next/link'
import React from 'react'

const Comp5 = () => {
  return (
    <>
      <div className="comps comp5">
      <h3 className='comps-h'>Comp-5 <span>(Button v2)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp5
