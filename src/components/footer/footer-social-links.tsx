import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://instagram.com/nobleschoollife',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'Google Maps',
    link: 'https://maps.app.goo.gl/cAvFzMaEsaUQNQoy8',
    icon: '/images/icons/google-maps.svg',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/@NobleAcademyPammal',
    icon: '/images/icons/youtube.svg',
  }
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 50,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
          display:'flex',
          justifyContent:'space-around'
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Box>
    </Box>
  )
}

export default SocialLinks
