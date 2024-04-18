import Link from 'next/link'
import React from 'react'

const Comp6 = () => {
  return (
    <>
      <div className="comps comp6">
      <h3 className='comps-h'>Comp-6 <span>(Hover On)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp6
