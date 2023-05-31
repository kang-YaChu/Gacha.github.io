const cardPool = [
    { name: "八重神子", rarity: "SSR", imageUrl: "https://patchwiki.biligame.com/images/ys/3/3d/hy9x8mzx00o8oj5iysddzh36r460eo5.png" },
    { name: "重雲", rarity: "R", imageUrl: "https://patchwiki.biligame.com/images/ys/7/73/gqa6ud0np0ji3nti05q4e8tb8e28tyv.png" },
    { name: "五郎", rarity: "R", imageUrl: "https://patchwiki.biligame.com/images/ys/2/20/698pw3rhtlv98wk2nft8lsujnhaaca2.png" },
    { name: "流浪者", rarity: "SR", imageUrl: "https://patchwiki.biligame.com/images/ys/b/b5/f03xcrwm24uxfs27ltplpdmaimdm5uv.png" },
    { name: "雷澤", rarity: "R", imageUrl: "https://patchwiki.biligame.com/images/ys/9/9c/mxymdg9m3yq7apxr2hri4e874s9e3vz.png" },
    { name: "公子", rarity: "SR", imageUrl: "https://patchwiki.biligame.com/images/ys/5/5c/tjyrx11nxzxb9ngcgespv2neij7ezdb.png" },
];

const bag = [];

function drawCard() {
    const randomNumber = Math.random() * 100;

    if (randomNumber <= 5.0) {
        return cardPool.filter((card) => card.rarity === "SSR")[0];
    } else if (randomNumber <= 25) {
        const srCards = cardPool.filter((card) => card.rarity === "SR");
        return srCards[Math.floor(Math.random() * srCards.length)];
    } else {
        const rCards = cardPool.filter((card) => card.rarity === "R");
        return rCards[Math.floor(Math.random() * rCards.length)];
    }
}

document.getElementById("drawCardBtn").addEventListener("click", function () {
    const selectedCard = drawCard();
    document.getElementById("cardName").textContent = `${selectedCard.name} (${selectedCard.rarity})`;
    document.getElementById("cardImage").src = selectedCard.imageUrl;

    const existingCard = bag.find((card) => card.name === selectedCard.name);
    if (existingCard) {
        existingCard.count += 1;
    } else {
        bag.push({ ...selectedCard, count: 1 });
    }
});

document.getElementById("showBagBtn").addEventListener("click", function () {
    document.getElementById("drawCardContainer").style.display = "none";
    document.getElementById("bagContainer").style.display = "block";

    const bagContent = document.getElementById("bagContent");
    bagContent.innerHTML = "";

    bag.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.textContent = `${card.name} (${card.rarity}) - 數量：${card.count}`;
        bagContent.appendChild(cardElement);
    });
});

document.getElementById("showDrawCardBtn").addEventListener("click", function () {
    document.getElementById("drawCardContainer").style.display = "block";
    document.getElementById("bagContainer").style.display = "none";
});
