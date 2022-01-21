var total_ht = 0                    // Total d'achat de mon panier
const tva = 20                      // Taux de tva applicable
var promo = 20                      // Pourcentage de promotion à appliquer
var code_promo                      // Code promo à vérifier

const calculate_tva = (price, taux_tva) => {
    return price * (1 + (taux_tva / 100))
}

const calculate_promo = (price, promo) => {
    return price - (price * promo) / 100
}


// =============== Système de panier et de paiement ===================

const buy_product = (price) => {
    total_ht += price
    console.log("Votre panier est de ", total_ht, "€")
}

const pay = () => {
    const total_ttc = calculate_tva(total_ht, tva)
    console.log("Le total de votre facture est ", total_ttc, "€")

    if(code_promo === "SOLDES2022"){
        promo += 10
    }

    if (total_ttc > 100) {
        console.log("Vous avez le droit à", promo, "% de promotion")
        const total_apres_promo = calculate_promo(total_ttc, promo)
        console.log("Votre total après promotion est de ", total_apres_promo, "€")
    } else {
        console.log("Vous n'avez pas de code promo")
    }
}

// Gestion du clic sur le bouton de paiement
const payment_button = document.getElementById('order-button')
payment_button.addEventListener("click", pay)

// Gestion des clics sur les boutons d'ajout au panier
const guitar_button = document.getElementById('buy-guitar')
const sapin_button = document.getElementById('buy-sapin')

guitar_button.addEventListener("click", () => buy_product(200))
sapin_button.addEventListener("click", () => buy_product(29.5))

// Gestion du code promo
const promo_input = document.getElementById('promo-input')

promo_input.addEventListener('change', (event) => {
    code_promo = event.target.value
})

// ============= GENERATION DU SHOP DYNAMIQUEMENT ================
const shop_div = document.getElementById('shop')

const products = [
    {id: "car", price: 29.5, name: "Petite voiture"},
    {id: "PS5", price: 600, name: "Playstation 5"},
    {id: "PC", price: 2000, name: "Super PC"},
    {id: "cat", price: 120, name: "Petit chaton tout mignon"},
]

// Ajout des produits au HTML
products.forEach((current_product) => {
    const div_product = document.createElement('div')
    div_product.setAttribute('class', 'product')
    const product_title = document.createElement('h2')
    product_title.innerText = current_product.name
    div_product.appendChild(product_title)
    const product_price = document.createElement('p')
    product_price.innerText = "Prix : " + current_product.price + "€ HT"
    div_product.appendChild(product_price)
    shop_div.append(div_product)
})

{/* <div class="product">
    <h2>Petite voiture</h2>
    <p>Prix : 200€ HT</p>
</div>


<div class="product">
    <h2>Guitare</h2>
    <p>Prix : 200€ HT</p>
    <button id="buy-guitar">Ajouter au panier</button>
</div>  */}