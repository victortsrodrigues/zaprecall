import styled from "styled-components";
import seta from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import errado from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"
import { useState } from "react";

export default function Card({ question, answer, index, complete, setComplete }) {

  const cardFace = `Pergunta ${index + 1}`;
  const [textCard, setTextCard] = useState(cardFace);
  const [chosen, setChosen] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState([]);

  const [displayCardFace, setDisplayCardFace] = useState("flex");
  const [displayCardQuestion, setDisplayCardQuestion] = useState("none");
  const [displayCardAnswer, setDisplayCardAnswer] = useState("none");
  const [displayImgSeta, setDisplayImgSeta] = useState("");
  const [pDecoration, setPDecoration] = useState("");
  const [pColor, setPColor] = useState("#333333");
  const [displayGoodMemoryImg, setDisplayGoodMemoryImg] = useState("none");
  const [displayAlmostMemoryImg, setDisplayAlmostMemoryImg] = useState("none");
  const [displayBadMemoryImg, setDisplayBadMemoryImg] = useState("none");

  function chooseQuestion(chosenQuestion) {
    const newArray = [...chosen, chosenQuestion];
    setChosen(newArray)
    setTextCard(chosenQuestion);
    setDisplayCardFace("none");
    setDisplayCardQuestion("flex");
  }

  function seeAnswer(newAnswer) {
    const newArray = [...chosenAnswer, newAnswer];
    setChosenAnswer(newArray);
    setTextCard(newAnswer);
    setDisplayCardQuestion("none");
    setDisplayCardAnswer("flex");
  }

  function badMemory() {
    setDisplayCardAnswer("none");
    setDisplayCardFace("flex");
    setTextCard(cardFace);
    setDisplayImgSeta("none");
    setPDecoration("line-through");
    setPColor("#FF3030");
    setDisplayBadMemoryImg("");
    setComplete(complete+1);
  }

  function almostMemory() {
    setDisplayCardAnswer("none");
    setDisplayCardFace("flex");
    setTextCard(cardFace);
    setDisplayImgSeta("none");
    setPDecoration("line-through");
    setPColor("#FF922E");
    setDisplayAlmostMemoryImg("");
    setComplete(complete + 1);
  }

  function goodMemory() {
    setDisplayCardAnswer("none");
    setDisplayCardFace("flex");
    setTextCard(cardFace);
    setDisplayImgSeta("none");
    setPDecoration("line-through");
    setPColor("#2FBE34");
    setDisplayGoodMemoryImg("");
    setComplete(complete + 1);
  }

  return (
    <>
      <FlashCardFace display={displayCardFace}>
        <FlashCardFaceText textDecoration={pDecoration} color={pColor}>{cardFace}</FlashCardFaceText>
        <FlashCardFaceImg src={seta} alt="seta" onClick={() => chooseQuestion(question)} display={displayImgSeta}/>
        <MemoryImg src={errado} alt="errado" display={displayBadMemoryImg}/>
        <MemoryImg src={quase} alt="quase" display={displayAlmostMemoryImg}/>
        <MemoryImg src={certo} alt="certo" display={displayGoodMemoryImg}/>
      </FlashCardFace>
      <FlashCardQuestion display={displayCardQuestion}>
        <p>{textCard}</p>
        <img src={virar} alt="virar" onClick={() => seeAnswer(answer)} />
      </FlashCardQuestion>
      <FlashCardAnswer display={displayCardAnswer}>
        <p>{textCard}</p>
        <Possibilities>
          <BadMemory onClick={badMemory}>Não lembrei</BadMemory>
          <AlmostMemory onClick={almostMemory}>Quase não lembrei</AlmostMemory>
          <GoodMemory onClick={goodMemory}>Zap!</GoodMemory>
        </Possibilities>
      </FlashCardAnswer>
    </>
  )
}

const FlashCardFace = styled.div`
  width: 80%;
  height: 65px;
  border-radius: 5px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 5px 0px #00000015;
  display: ${props => props.display};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`
const FlashCardFaceImg = styled.img`
  display: ${props => props.display};
  width: 20px;
  height: 23px;
  /* position: "";
  right: "";
  bottom: ""; */
  margin-right: 15px;
`
const FlashCardFaceText = styled.p`
  font-family: "Recursive", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  color: ${props => props.color};
  margin-left: 15px;
  text-decoration: ${props => props.textDecoration};
`

const FlashCardQuestion = styled.div`
  width: 80%;
  min-height: 131px;
  border-radius: 5px;
  background-color: #FFFFD4;
  box-shadow: 0px 4px 5px 0px #00000015;
  display: ${props => props.display};
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  img {
    width: 30px;
    height: 20px;
    position: absolute;
    right: 12px;
    bottom: 8px;
  }
  p {
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: #333333;
    margin-top: 15px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const FlashCardAnswer = styled.div`
  width: 80%;
  min-height: 131px;
  border-radius: 5px;
  background-color: #FFFFD4;
  box-shadow: 0px 4px 5px 0px #00000015;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  p {
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: #333333;
    margin-top: 15px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`
const Possibilities = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
`
const BadMemory = styled.div`
  width: 80px;
  height: 37.17px;
  border-radius: 5px;
  background-color: #FF3030;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Recursive", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: white;
  text-align: center;
`
const AlmostMemory = styled.div`
  width: 80px;
  height: 37.17px;
  border-radius: 5px;
  background-color: #FF922E;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Recursive", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: white;
  text-align: center;
`
const GoodMemory = styled.div`
  width: 80px;
  height: 37.17px;
  border-radius: 5px;
  background-color: #2FBE34;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Recursive", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: white;
`
const MemoryImg = styled.img`
  display: ${props => props.display};
  width: 23px;
  height: 23px;
  margin-right: 15px;
`