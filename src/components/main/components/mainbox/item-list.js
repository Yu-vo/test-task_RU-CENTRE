import React, {useState} from 'react'
import {styled} from 'linaria/react'

import up from '@assets/up.svg'
import down from '@assets/down.svg'

import {Loader} from '@ui'

export const ItemList = ({list, setList}) => {
  const handleClick = id => {
    setList(list =>
      list.map(item =>
        item.id === id
          ? {
              id: item.id,
              title: item.title,
              text: item.text,
              active: !item.active,
            }
          : item
      )
    )
  }
  let items = null
  if (list)
    items = list.map(item => (
      <Item
        active={item.active}
        key={item.id + Date.now()}
        onClick={() => handleClick(item.id)}
      >
        <Block>
          <Wrapper>
            <Title>{item.title}</Title>
            <Indicator src={item.active ? down : up} />
          </Wrapper>
          <Article
            active={item.active}
            dangerouslySetInnerHTML={{__html: item.text}}
          ></Article>
        </Block>
      </Item>
    ))
  return items ? <List>{items}</List> : <Loader />
}

const List = styled.ul`
  padding: 0;
`
const Item = styled.li`
  padding: 0 40px;
  list-style-type: none;
  background-color: ${props => (props.active ? 'rgb(243,252,255)' : 'white')};
`
const Block = styled.div`
  border-bottom: solid 1px rgb(240, 240, 240);
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.p``
const Article = styled.article`
  display: ${props => (props.active ? 'block' : 'none')};
  margin-bottom: 20px;
  max-width: 1000px;
`
const Indicator = styled.img`
  width: 12px;
  height: 12px;

  color: rgb(61, 189, 246);
`
