import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {styled} from 'linaria/react'
import {css} from 'linaria'

import {SpanBlock} from '@ui'
import logo from '@assets/logo.svg'
import acc from '@assets/acc.svg'
import domen from '@assets/domen.svg'
import help from '@assets/help.svg'
import vps from '@assets/vps.svg'

export const Navbar = () => {
  const [links, setLinks] = useState([
    {title: 'АККАУНТ', icon: acc, to: '/acc', active: false},
    {title: 'VPS', icon: vps, to: '/vps', active: false},
    {title: 'ДОМЕНЫ', icon: domen, to: '/domen', active: false},
    {title: 'ПОДДЕРЖКА', icon: help, to: '/help', active: false},
  ])
  const handleClick = (to, active) => {
    setLinks(items =>
      items.map(item =>
        item.to === to && active === true
          ? item
          : item.to === to
          ? {title: item.title, icon: item.icon, to: item.to, active: true}
          : {title: item.title, icon: item.icon, to: item.to, active: false}
      )
    )
  }
  const items = links.map(item => (
    <Item
      active={item.active}
      key={item.title + Date.now()}
      onClick={() => handleClick(item.to, item.active)}
    >
      <SpanBlock />
      <Link className={styledLink} to={item.to} alt="">
        <Icon src={item.icon} />
        {item.title}
      </Link>
    </Item>
  ))
  return (
    <Wrapped>
      <Logo src={logo} />
      <List>{items}</List>
    </Wrapped>
  )
}
const Wrapped = styled.nav`
  background-color: rgb(6, 36, 54);
  max-width: 25vw;
`
const Logo = styled.img`
  width: 50%;
  margin: 40px;
`
const List = styled.ul`
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;

  margin-top: 20%;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 25px;
`
const styledLink = css`
  text-decoration: none;
  color: white;
  padding: 20px;

  display: flex;
  align-items: center;

  font-weight: 500;
  ${'' /* font-size: 0.8em; */}
`
const Item = styled.li`
  display: flex;
  &:hover {
    background-color: rgb(21, 82, 106);
    ${SpanBlock} {
      visibility: visible;
    }
  }
  background-color: ${props =>
    props.active ? 'rgb(21, 82, 106)' : 'rgb(6, 36, 54)'};
  ${SpanBlock} {
    visibility: ${props => (props.active ? 'visible' : 'hidden')}
`
