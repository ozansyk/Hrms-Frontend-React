import React from 'react'
import ChooseCity from './ChooseCity'
import SearchText from './SearchText'
import { Menu } from 'semantic-ui-react'

export default function SearchBox() {
    return (
        <div>
            <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='enterprise'
            />
            <Menu.Item
              name='consumer'
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
            />
            <Menu.Item
              name='python'
            />
            <Menu.Item
              name='php'
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
            />
            <Menu.Item
              name='dedicated'
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='email'
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name='faq'
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
        </div>
    )
}
