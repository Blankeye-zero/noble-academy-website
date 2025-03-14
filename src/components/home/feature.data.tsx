import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import { PersonAdd, PersonPinCircleRounded } from '@mui/icons-material'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Islamic Framework',
    description: 'Establish connections between contemporary academic disciplines and Islamic principles',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Ethical Principles',
    description: ' Apply Islamic ethical frameworks to modern challenges in professional fields',
    icon: <PersonAdd />,
  },
  {
    title: 'Historical Context',
    description: 'Highlight and demonstrate the achievements of the  Islamic civilization',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Critical Evaluation',
    description: 'Cultivate discernment rather than uncritical acceptance or rejection through an islamic lens',
    icon: <ContactSupportIcon />,
  },
]
