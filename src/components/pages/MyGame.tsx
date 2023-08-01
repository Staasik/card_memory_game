import { useState } from 'react';
import { HtmlWrapper, GameDiv, Text, GameItem, Restart } from '../../styles/MyGame'

const INITIAL_CARDS = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
const ICONS = ["🐼️", "🐹", "🦝", "🦄", "🐺", "🐱", "🐴", "🐷"];

interface CardItem {
    value: number;
    index: number;
}

function MyGame() {
    function randomSort(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function updateCard(Element: HTMLElement, color: string, cursor: string, textContent: string){
        Element.style.backgroundColor = color;
        Element.style.cursor = cursor;
        Element.textContent = textContent;
    }

    const [gameOver, setGameOver] = useState(false);
    const [numbersArray, setNumbersArray] = useState<number[]>(randomSort(INITIAL_CARDS));

    const pair: CardItem[] = [];
    const all_pair: number[] = [];

    function Check(value: number,index: number) {  
        const foundResult = all_pair.find((el) => el === index);
        if(!foundResult) {
            const El = document.getElementById(String(index));  
            if (El && pair.length<2) {
                updateCard(El,'#DA70D6','default',ICONS[value-1])
                pair.push({value,index}) 
            }    
        }        
   
        setTimeout(() => {
            if(pair.length==2){
                for(let i=0;i<2;i++){
                    const El = document.getElementById(String(pair[i].index)); 
                    if(pair[0].value==pair[1].value){
                        if (El) {
                            updateCard(El,'#F08080','default',ICONS[pair[i].value-1])
                        } 
                        all_pair.push(pair[i].index)
                    } 
                    else {                        
                        if (El) {
                            updateCard(El,'#9370DB','pointer','')
                        } 
                    }
                }
                pair.length=0
            }
            if (all_pair.length === 16){
                setGameOver(true)
            }
        }, 1500);
    }

    function Restarting(){     
        setGameOver(false)
        setNumbersArray([...randomSort(numbersArray)])
        pair.length=0; all_pair.length=0
        for (let i = 0; i < 16; i++) {
            const El = document.getElementById(String(i));
            if (El) {
                updateCard(El,'#9370DB','pointer','')
            }
        } 
    }

    return (
    <HtmlWrapper>
        <Text id="text">{gameOver ? 'CONGRATULATIONS!!!' : 'MATCHING GAME'}</Text>
        <Restart onClick={Restarting}>Restart</Restart> 
        <GameDiv>
            {
                numbersArray.map((value, index) => (<GameItem id={String(index)} key={index} onClick={() => Check(value,index)}></GameItem>))
            }
        </GameDiv>      
    </HtmlWrapper>
  );
}

export default MyGame;
