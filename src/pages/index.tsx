import React from 'react'
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
// const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
// const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      {/* <DynamicHomePopularCourse /> */}
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      {/* <DynamicHomeOurMentors /> */}
      <Box sx={{backgroundColor: 'background.paper'}}><Box sx={{ pb: { xs: 100, md: "41%" },height: {xs: 30, md:50}, backgroundColor: 'background.paper', width: {xs: "100%", md:"100%"} }}><iframe height="800px" id='testimonialto-all-businesses-tag-all-light-animated' src="https://embed-v2.testimonial.to/w/all-businesses?animated=on&theme=light&shadowColor=000000&speed=1&tag=all&cc=off" style={{border:0}} width="100%"></iframe></Box></Box>
      <Box sx={{height:100, backgroundColor: 'primary.main'}}></Box>
      {/* <DynamicHomeNewsLetter /> */}
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
