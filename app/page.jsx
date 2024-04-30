import React from 'react'
import '@/components/reuse/styles/style.css'
import '@/components/reuse/styles/responsive.css?var=1.4'
import Background from '@/components/reuse/background'
import Header from '@/components/reuse/header'
import MainSection from '@/components/reuse/mainSection'
import Footer from '@/components/reuse/footer'
import ScrollableTabsContainer from '@/components/reuse/catTags'

const page = () => {
  return (
    <>
      <Background />
      <Header />
      <ScrollableTabsContainer />
      <MainSection />
      <Footer />
    </>
  )
}

export default page
