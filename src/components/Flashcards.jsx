import Card from "./Card";

export default function Flashcards({ deck, complete, setComplete }) {

  return (
    <>
      {deck.map((element, index) => <Card key={index} question={element.question} answer={element.answer} complete={complete} setComplete={setComplete} index={index} />)}
    </>
  )
}