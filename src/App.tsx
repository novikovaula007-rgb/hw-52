import './App.css'
import Card from './components/Card/Card.tsx'
import type {ICard} from './types'
import {useState} from "react";
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from "./lib/PokerHand.ts";


function App() {
    const [myHand, setMyHand] = useState<ICard[]>([])
    const [Deck, setDeck] = useState(new CardDeck())
    const [combination, setCombination] = useState<string>('')

    const loadCards = () => {
        if (Deck.cardDeck.length <= 0) {
            setDeck(new CardDeck())
            setMyHand([])
            setCombination('')
        }
    }

    const takeFiveCards = () => {
        if (Deck.cardDeck.length > 0) {
            const cardsToHand = Deck.getCards(5)
            setMyHand(cardsToHand)
            if (cardsToHand.length === 5) {
                const pokerHand = new PokerHand(cardsToHand)
                const pokerCombination = pokerHand.getOutcome()
                setCombination(pokerCombination)
            }
        }
    }



    return (
        <>
            <p>Cards count: {Deck.cardDeck.length}</p>
            {Deck.cardDeck.length > 0?
                <>
                    <p>Combination of round: {combination}</p>
                    <button onClick={takeFiveCards}>Взять 5 карт</button>
                    <div className="playingCards faceImages">
                        {myHand.map((card: ICard, index) => (
                            <Card key={index} rank={card.rank} suit={card.suit}/>
                        ))}
                    </div>
                </>
                :
                <>
                    <p>Колода пустая</p>
                    <button onClick={loadCards}>Раздать карты</button>
                </>
            }
        </>
    )
}

export default App
