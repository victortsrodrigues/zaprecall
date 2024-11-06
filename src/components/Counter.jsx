import styled from "styled-components"

export default function Counter({ deck, complete }) {
  return (
    <CounterFooter>{`${complete}/${deck.length} CONCLUÍDOS`}</CounterFooter>
  )
}

const CounterFooter = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0px -4px 6px 0px #00000005;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
`