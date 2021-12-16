const listMenu = document.getElementsByClassName('section-center')[0];
const all = document.getElementsByClassName("all")[0];
const breakfast = document.getElementsByClassName("breakfast")[0];
const lunch = document.getElementsByClassName("lunch")[0];
const shakes = document.getElementsByClassName("shakes")[0];
const dinner = document.getElementsByClassName("dinner")[0];
const mang = document.getElementsByTagName("button")
const menu =[
    {
        id : 1,
        title : "buttermilk pancakes",
        category: "breakfast",
        price : 15.99,
        img: "./images/item-1.jpeg",
        desc :`I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`
    },
    {
        id : 2,
        title : "diner double",
        category: "lunch",
        price : 13.99,
        img: "./images/item-2.jpeg",
        desc :`vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
    },
    {
        id : 3,
        title : "godzilla milkshake",
        category: "shakes",
        price : 6.99,
        img: "./images/item-2.jpeg",
        desc :`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    },
    {
        id : 4,
        title : "country delight",
        category: "breakfast",
        price : 20.99,
        img: "./images/item-4.jpeg",
        desc :`Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`
    },
    {
        id : 5,
        title : "egg attack",
        category: "lunch",
        price : 22.99,
        img: "./images/item-5.jpeg",
        desc :`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
    },
    {
        id : 6,
        title : "buttermilk pancakes",
        price : 18.99,
        img: "./images/item-6.jpeg",
        desc :`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
]
function load(){
    let a = menu.map( function(element){
        return`
            <article class="menu-item">
                <img src="${element.img}" alt="" class="photo">
                <div class="item-inf">
                    <header>
                        <h4>${element.title}</h4>
                        <h4 class="price">$${element.price}</h4>
                    </header>
                    <p class="item-text">${element.desc}</p>
                </div>
            </article>       
            
        `
    });
    listMenu.innerHTML = a.join("\n");
}
// thuc thi ham render luon di nhe
// thuc hien noi cac phan tu lai voi nhau la duoc nhe anh em
/*
them phan tu div cho no la duoc dung khong anh em
// cu mo mon thi them mot the arci
*/
window.onload = function(){
    load();
}
// console.log( mang)
for( let i = 0; i < mang.length; ++i){
    mang[i].addEventListener( "click", function(){
        let dk = mang[i].value;
        if( dk == "all"){
            load();
            return;
        }
        let a = menu.map( function(element){
            if( dk == element.category)
            return`
                <article class="menu-item">
                    <img src="${element.img}" alt="" class="photo">
                    <div class="item-inf">
                        <header>
                            <h4>${element.title}</h4>
                            <h4 class="price">$${element.price}</h4>
                        </header>
                        <p class="item-text">${element.desc}</p>
                    </div>
                </article>       
            `
            else return "";
        });
        listMenu.innerHTML = a.join("\n");
    })
}
