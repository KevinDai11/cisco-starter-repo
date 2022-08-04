import React, { setState } from 'react'
import { Menu } from 'semantic-ui-react'

const header = () => {
  const state = {}

  const handleItemClick = (e, { name }) => setState({ activeItem: name })
  const { activeItem } = state
  return( 

      <Menu>
        <Menu.Item
          name='Sextant'
          active={activeItem === 'editorials'}
          onClick={handleItemClick}
        >
        </Menu.Item>

        </Menu>
  )
}

export default header;
