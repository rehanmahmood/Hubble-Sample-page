import React from 'react'
import { Container } from './styled/Container.styled'
import { StyledHeader, Nav, Logo, Image } from './styled/Header.styled'
import { Button } from './styled/Button.styled'
import { Flex } from './styled/Flex.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
        <Logo src='./images/HUBBLE.svg' alt='logo' />
        <Button>Try it free!</Button>
            </Nav>
            <Flex>
                <div>
                    <p>
                    Share your favorite star sighting spots with the world!
                    <br></br>
                    And discover new ones yourself!
                    </p>
                    <Button>
                        Sign Up For Free!
                    </Button>
                </div>
                <Image src='./images/stars.svg' alt='illustration' />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
