import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main" sx={{backgroundColor: 'background.paper'}}>

      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
