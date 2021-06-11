import React from 'react'
import CvButton from './CvButton'
import Logo from './Logo'
import ProfileButton from './ProfileButton'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Menu stackable>

                <Container>
                    <Logo />

                    <CvButton />

                    <ProfileButton />

                    <Menu.Item position="right">
                        Sign up
                    </Menu.Item>

                    <Menu.Item name='signin'>
                        <Button>Sign in</Button>
                    </Menu.Item>
                </Container>

            </Menu>
        </div>
    )
}
