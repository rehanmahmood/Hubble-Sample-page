import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import { StyledIcon } from './styled/SocialIcon.style'

export default function SocialIcon() {
  return (
    <StyledIcon>
        <a href="https://www.facebook.com/">
            <FaFacebook />
        </a>
        <a href="https://www.instagram.com/">
            <FaInstagram />
        </a>
        <a href="https://www.twitter.com/">
            <FaTwitter />
        </a>

    </StyledIcon>
  )
}
