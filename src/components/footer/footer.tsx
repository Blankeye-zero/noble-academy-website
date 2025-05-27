import React, { FC } from 'react'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container sx={{width:'100%'}}>
       
          <Container sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 }, textAlign:'center'}}>
              <Typography component="h1" variant="h1" sx={{ mb: 2, fontSize:40 }}>
                Noble Academy
              </Typography>
              <Typography component="h3" sx={{ letterSpacing: 1, mb: 2, fontSize:20 }}>
                No.5, Tholkappier Street, Pammal, Chennai - 600070
                <br />
                <br />
                +91 9884595100 || +91 9962786863
              </Typography>
              <Container sx={{mt:5}}></Container>
              <FooterSocialLinks />
            </Box>
          </Container>
          <Container sx={{display:'flex', justifyContent:'center'}}>
            <FooterNavigation />
          </Container>
       
      </Container>
    </Box>
  )
}

export default Footer
