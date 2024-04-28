import Link from 'next/link'
import React from 'react'

const Comp7 = () => {
  return (
    <>
      <div className="comps comp7 Tooltip">
      <h3 className='comps-h'>Comp-7 <span>(Tooltip)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp7
