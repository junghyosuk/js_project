const quotes = [
    {
        quote: "삶은 우리가 만드는 것이다.",
        author: "존 업다이크"
    },
    {
        quote: "가장 큰 영광은 결코 실패하지 않는 것이 아니라, 실패할 때마다 일어서는 것이다.",
        author: "넬슨 만델라"
    },
    {
        quote: "행동이 결과를 만든다.",
        author: "마하트마 간디"
    },
    {
        quote: "성공은 최종적인 것이 아니고, 실패는 치명적인 것이 아니다. 중요한 것은 계속하는 용기이다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "우리가 가장 두려워하는 것은 실패가 아니라, 성공이다.",
        author: "마리안 윌리엄슨"
    },
    {
        quote: "당신이 할 수 있다고 믿으면, 당신은 할 수 있다.",
        author: "헨리 포드"
    },
    {
        quote: "어둠 속에서도 별은 빛난다.",
        author: "오스카 와일드"
    },
    {
        quote: "우리가 원하는 것을 이루기 위해서는 먼저 그것을 꿈꿔야 한다.",
        author: "오프라 윈프리"
    },
    {
        quote: "가장 어두운 밤에도 별은 빛난다.",
        author: "안나 프랑크"
    },
    {
        quote: "성공은 준비가 기회를 만나는 것이다.",
        author: "세네카"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;