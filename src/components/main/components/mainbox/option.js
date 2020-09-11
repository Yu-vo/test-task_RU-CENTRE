import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {styled} from 'linaria/react'
import {css} from 'linaria'

export const Option = () => {
  const [option, setOption] = useState([
    {title: 'Заявка', to: '/help/request', active: false},
    {title: 'Шаблоны', to: '/help/template', active: false},
    {title: 'История заявок', to: '/help/history', active: false},
  ])

  const handleClick = (to, active) => {
    setOption(items =>
      items.map(item =>
        item.to === to && active === true
          ? item
          : item.to === to
          ? {title: item.title, to: item.to, active: true}
          : {title: item.title, to: item.to, active: false}
      )
    )
  }
  const items = option.map(item => (
    <Item
      key={item.title + Date.now()}
      onClick={() => handleClick(item.to, item.active)}
    >
      <Link className={styledLink} to={item.to}>
        <Title active={item.active}>{item.title}</Title>
      </Link>
    </Item>
  ))
  return <List>{items}</List>
}

const Item = styled.div`
  margin-right: 100px;
`
const List = styled.ul`
  display: flex;
`
const Title = styled.p`
  border-bottom: ${props =>
    props.active ? 'none' : '2px dashed rgb(61, 189, 246)'};
  color: ${props => (props.active ? 'black' : 'rgb(61, 189, 246)')};
  font-weight: ${props => (props.active ? 'bold' : 100)};
  font-size: 0.9em;
`
const styledLink = css`
  text-decoration: none;
`
