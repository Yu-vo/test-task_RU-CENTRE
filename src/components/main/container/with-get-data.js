import React, {useState, useEffect} from 'react'

export function withGetData(WrappedComponent) {
  return function () {
    const [list, setList] = useState()
    useEffect(() => {
      fetch('https://sweb.ru/export/turbojournal/')
        .then(res => res.text())
        .then(data => {
          const parser = new DOMParser()
          const xml = parser.parseFromString(data, 'text/xml')
          const topic = Array.from(xml.getElementsByTagName('turbo:topic'))
          setList(
            Array.from(xml.getElementsByTagName('turbo:content')).map(
              (item, index) => ({
                id: Date.now() + index,
                title: topic[index].innerHTML,
                text: item.lastChild.data,
                active: false,
              })
            )
          )
          // setContent(
          //   Array.from(xml.getElementsByTagName('turbo:content')).map(
          //     item => item.innerHTML
          //   )
          // )
        })
        .catch(err => console.log(err))
    }, [])
    return <WrappedComponent list={list} setList={setList} />
  }
}
