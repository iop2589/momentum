const quotes = [
    {
        "quote" : "침묵은 다른 방식으로 펼친 주장이다.",
        "author" : "체 게바라"
    },
    {
        "quote" : "과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
        "author" : "조지 산타야나"
    },
    {
        "quote" : "자연이 하는 일에는 쓸데 없는 것이 없다.",
        "author" : "아리스토텔레스"
    },
    {
        "quote" : "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
        "author" : "나폴레옹"
    },
    {
        "quote" : "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.",
        "author" : "메이벨 뉴컴버"
    },
    {
        "quote" : "인생을 다시 산다면 다음 번에는 더 많은 실수를 저지르리라.",
        "author" : "나딘 스테어"
    },
    {
        "quote" : "문제점을 찾지 말고 해결책을 찾으라.",
        "author" : "헨리포드"
    },
    {
        "quote" : "성공하려면 귀는 열고 입은 닫아라.",
        "author" : "존 데이비슨 록펠러"
    },
    {
        "quote" : "무조건 믿지마라. 검증하라.",
        "author" : "스티븐 D. 레빗"
    },
    {
        "quote" : "진정한 혁신이란 문제 해결사가 되는 것이다.",
        "author" : "헥터 루이즈"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;