// make shopping list
let shoppingList = [
    { 
        for: 'Mike',
        gift: 'Bag'
    },

    { 
        for: 'Rio',
        gift: 'Watch'
    },

    { 
        for: 'Chris',
        gift: 'Shoes'
    },

    { 
        for: 'Mary',
        gift: 'Sunglasses'
    },

    { 
        for: 'Tom',
        gift: 'T-Shirt'
    },

    { 
        for: 'Sakura',
        gift: 'Jewery'
    },

]

const info = document.querySelector('#info');
let list = shoppingList.map(function(shopping) {
    return(
        
        `<div> I plan to buy ${shopping.gift} for ${shopping.for} for Christmas present.</div>`
    )
})

info.innerHTML = list.join('\n');