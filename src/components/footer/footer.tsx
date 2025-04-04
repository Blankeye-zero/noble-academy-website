import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container sx={{mx: {md: '40%', xs: '5%'} }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 }, textAlign:'center'}}>
              <Typography component="h1" variant="h1" sx={{ mb: 2 }}>
                Noble Academy
              </Typography>
              <Typography component="h3" sx={{ letterSpacing: 1, mb: 2 }}>
                No.5, Tholkappier Street, Pammal, Chennai - 600070
                <br />
                +91 9884595100 || +91 9962786863
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
