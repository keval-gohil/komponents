import Link from 'next/link'
import React from 'react'

const Comp12 = () => {
  return (
    <>
      <div className="comps comp12">
      <h3 className='comps-h'>Comp-12 <span>(Gallery)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp12
