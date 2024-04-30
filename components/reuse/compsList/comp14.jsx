import Link from 'next/link'
import React from 'react'

const Comp14 = () => {
  return (
    <>
      <div className="comps comp14 Widget">
      <h3 className='comps-h'>Comp-14 <span>(Widget)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp14
