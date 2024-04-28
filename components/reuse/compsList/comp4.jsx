import Link from 'next/link'
import React from 'react'

const Comp4 = () => {
  return (
    <>
      <div className="comps comp4 Btn-v1">
      <h3 className='comps-h'>Comp-4 <span>(Button v1)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp4
