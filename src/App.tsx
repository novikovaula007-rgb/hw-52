import './App.css'
import Card from './components/Card/Card.tsx'
import type {ICard} from './types'
import {useState} from "react";
import CardDeck from "./lib/CardDeck.ts";


function App() {
    const [myHand, setMyHand] = useState<ICard[]>([])
    const [Deck, setDeck] = useState(new CardDeck())
    let buttonState: string

    if (Deck.cardDeck.length > 0) {
        buttonState = 'Взять 5 карт'
    } else {
        buttonState = 'Раздать карты'
    }

    const loadCards = () => {
        if (Deck.cardDeck.length > 0) {
            const cardsToHand = Deck.getCards(5)
            setMyHand(cardsToHand)
        } else {
            setDeck(new CardDeck())
            setMyHand([])
        }
    }

    return (
        <>
            <p>Cards count: {Deck.cardDeck.length}</p>
            {Deck.cardDeck.length > 0?
                <>
                    <button onClick={loadCards}>{buttonState}</button>
                    <div className="playingCards faceImages">
                        {myHand.map((card: ICard, index) => (
                            <Card key={index} rank={card.rank} suit={card.suit}/>
                        ))}
                    </div>
                </>
                :
                <>
                    <p>Колода пустая</p>
                    <button onClick={loadCards}>{buttonState}</button>
                </>
            }
        </>
    )
}

export default App
