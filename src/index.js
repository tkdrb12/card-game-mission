class Card {
  node;
  isWin;

  constructor(isWin) {
    this.node = document.createElement('button');
    this.node.style.height = '100px';
    this.node.style.width = '80px';
    this.node.innerText = '카드입니다';

    this.isWin = isWin;

    this.addTouchEvent();
  }

  selectCard() {
    if (this.isWin)
      return (document.querySelector('#contents').innerText = '당첨입니다');
    document.querySelector('#contents').innerText = '꽝입니다';
  }

  addTouchEvent() {
    this.node.addEventListener('click', () => {
      this.selectCard();
    });
  }
}

class Cards {
  deck;

  constructor(number) {
    this.createCards(number);
    this.shuffle();
  }

  createCards(number) {
    if (number < 2) return;

    this.deck = new Array(number - 1).fill(0).map(() => new Card(false));
    this.deck.push(new Card(true));
  }

  shuffle() {
    this.deck.sort(() => Math.random() - 0.5);
  }
}

// 실제 실행코드

const cards = new Cards(3);
document.querySelector('#contents').appendChild(cards.deck[0].node);
document.querySelector('#contents').appendChild(cards.deck[1].node);
document.querySelector('#contents').appendChild(cards.deck[2].node);
