import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Sidebar, Menu, menuClasses, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Image } from 'react-bootstrap'
import { FaT, FaH, FaV } from 'react-icons/fa6'
import { TfiLayoutSlider } from 'react-icons/tfi'
import { clickModelPostion } from '../../store'

import factoryFacility from '../../db/factoryFacility.json'

const LeftSidebar = () => {
  const { collapseSidebar } = useProSidebar()
  const { setModelPartName, setLerping, setCameraMove, setPosition} = clickModelPostion((state) => state)
  const nav = useNavigate()

  const logoClickEventHandler = () => {
    setModelPartName('')
  }

  const moveFacilityClickEventHandler = (e) => {
    nav('/dashboard')
    setModelPartName(e.target.innerText)
    setLerping(true)
    setCameraMove(true)
    
    factoryFacility.filter((facility) => {
      if (facility.title === e.target.innerText) {
        setPosition(facility.modelPosition) 
      }
    })
  }

  return (
    <Sidebar className="app" backgroundColor="rgb(0, 0, 0)" style={{ borderColor: 'black' }}>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                color: disabled ? '#eee' : '#455A64',
                backgroundColor: active ? '#fff' : undefined,
                '&:hover': {
                  backgroundColor: '#335B8C !important',
                  color: 'white !important',
                  borderRadius: '8px !important',
                  fontWeight: 'bold !important'
                }
              }
            }
          },
        }}>
        <MenuItem
          className="menu1"
          icon={
            <TfiLayoutSlider
              style={{ color: 'white' }}
              onClick={() => {
                collapseSidebar()
              }}
            />
          }
          style={{ marginBottom: '40px', marginTop: '20px' }}
          component={<Link to="/" />}
          onClick={logoClickEventHandler}
        >
          <Image src="./images/logo.png" />
        </MenuItem>
        <Menu
          rootStyles={{
            ['.' + menuClasses.subMenuContent]: {
              backgroundColor: 'black',
              color: 'white'
            },
            ['.' + menuClasses.button]: {
              '&:hover': {
                backgroundColor: '#335B8C !important',
                color: 'white !important',
                borderRadius: '8px !important',
                fontWeight: 'bold !important'
              }
            }
          }}>
          <SubMenu label="Tester" icon={<FaT />} style={{ backgroundColor: 'black', color: 'white' }}>
            <MenuItem onClick={(e) => moveFacilityClickEventHandler(e)}>BlueBox</MenuItem>
            <MenuItem onClick={(e) => moveFacilityClickEventHandler(e)}>RedBox</MenuItem>
            <MenuItem onClick={(e) => moveFacilityClickEventHandler(e)}>GreenBox</MenuItem>
          </SubMenu>
        </Menu>

        <MenuItem component={<Link to="/dashboard" />} icon={<FaH />} style={{ color: 'white' }}>
          Handler
        </MenuItem>
        <MenuItem component={<Link to="/dashboard" />} icon={<FaV />} style={{ color: 'white' }}>
          Visual
          <br />
          Inspect
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar
