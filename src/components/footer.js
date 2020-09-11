import React from 'react'
import {styled} from 'linaria/react'
import {css} from 'linaria'

export const Footer = () => {
  return (
    <Wrapper>
      <Info>
        <p>
          © 2001- 2018 ООО <span className={blueSelection}>"СпейсВеб"</span>
        </p>
        <p>Все права защищены.</p>
        <p>
          Лицензия <span className={blueSelection}>N˚163230</span>
        </p>
      </Info>
      <Contacts>
        <p>
          <span className={blueSelection}>+7 (812) 334-12-22 </span>(в
          Санкт-Петербурге)
        </p>
        <p>
          <span className={blueSelection}>+7 (495) 663-16-22 </span>(в
          Санкт-Петербурге)
        </p>
        <p>
          <span className={blueSelection}>(800) 100-16-25 </span>(бесплатно по
          России)
        </p>
      </Contacts>
    </Wrapper>
  )
}
const blueSelection = css`
  color: rgb(61, 189, 246);
`

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`
const Info = styled.div`
  margin: 10px;
  font-size: 0.6em;
`
const Contacts = styled.div`
  margin: 20px 40px;
  font-size: 0.6em;
`
