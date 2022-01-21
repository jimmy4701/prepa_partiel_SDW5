
var total_cookies = 0;
var cookies_per_second = 0;
var multiplicator = 1

const main_container = document.getElementById('main-container')

const cookies_count_span = document.getElementById('cookie-count')
const cookies_per_second_span = document.getElementById('cookie-per-second')
const cookie_image = document.getElementById('cookie')
const shop_container = document.getElementById('shop-container')

const shop = [
    {label: "cursor", price: 10, cookies_per_second: 0.1, total: 1},
    {label: "grandma", price: 100, cookies_per_second: 1, total: 0},
    {label: "farm", price: 1000, cookies_per_second: 10, total: 0},
    {label: "mine", price: 10000, cookies_per_second: 100, total: 0},
    {label: "factory", price: 100000, cookies_per_second: 1000, total: 0},
]

const init_cookies = () => {
    console.log("Initialized cookies")
    update_interface()
    update_shop()
    cookie_image.addEventListener("click", handle_cookie_click)
}

const update_interface = () => {
    // Calculate new cookies
    cookies_per_second = shop.reduce((acc, next) => acc + (next.cookies_per_second * next.total), 0)
    total_cookies += parseFloat(cookies_per_second/10)
    // Update cookie labels
    cookies_count_span.innerText = total_cookies.toFixed(0)
    cookies_per_second_span.innerText = cookies_per_second
}

const handle_cookie_click = () => {
    total_cookies += multiplicator;
}

const buy_item = (item_label) => {
    console.log("BUY ITEM", item_label)
    let found_item = shop.find((shop_line) => shop_line.label == item_label)

    console.log("found item", found_item)
    if(found_item.price < total_cookies){
        found_item.total++
        total_cookies -= found_item.price
    } else {
        alert("Vous n'avez pas les cookies nécessaires")
    }
    update_shop()
}

const update_shop = () => {
    // Clear shop options
    shop_container.innerHTML = ""
    // Update shop options
    let line_template = document.querySelector('#shop-line-template')
    shop.forEach(shop_line => {
        let clone = document.importNode(line_template.content, true)
        clone.getElementById('item-name').textContent = shop_line.label
        clone.getElementById('item-price').textContent = shop_line.price
        clone.getElementById('right-infos').textContent = shop_line.total
        clone.querySelector('.shop-line').addEventListener('click', () => buy_item(shop_line.label))
        shop_container.appendChild(clone)
    })
}


setInterval(() => {
    update_interface()
}, 100)

init_cookies()