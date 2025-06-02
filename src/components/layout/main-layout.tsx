import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { GoogleTagManager } from '@next/third-parties/google'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main" sx={{backgroundColor: 'background.paper'}}>
<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID : ''} />
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
