/* Set values + misc */

// nuevo codigo
// var promoCode;
// var promoPrice;
// var fadeTime = 300;

// /* Assign actions */
// $(".quantity input").change(function () {
//   updateQuantity(this);
// });

// $(".remove button").click(function () {
//   removeItem(this);
// });

// $(document).ready(function () {
//   updateSumItems();
// });

// $(".promo-code-cta").click(function () {
//   promoCode = $("#promo-code").val();

//   if (promoCode == "10off" || promoCode == "10OFF") {
//     //If promoPrice has no value, set it as 10 for the 10OFF promocode
//     if (!promoPrice) {
//       promoPrice = 10;
//     } else if (promoCode) {
//       promoPrice = promoPrice * 1;
//     }
//   } else if (promoCode != "") {
//     alert("Invalid Promo Code");
//     promoPrice = 0;
//   }
//   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
//   if (promoPrice) {
//     $(".summary-promo").removeClass("hide");
//     $(".promo-value").text(promoPrice.toFixed(2));
//     recalculateCart(true);
//   }
// });

// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $(".basket-product").each(function () {
//     subtotal += parseFloat($(this).children(".subtotal").text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   //If there is a valid promoCode, and subtotal < 10 subtract from total
//   var promoPrice = parseFloat($(".promo-value").text());
//   if (promoPrice) {
//     if (subtotal >= 10) {
//       total -= promoPrice;
//     } else {
//       alert("Order must be more than £10 for Promo code to apply.");
//       $(".summary-promo").addClass("hide");
//     }
//   }

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//     /* Update total display */
//     $(".total-value").fadeOut(fadeTime, function () {
//       $("#basket-total").html(total.toFixed(2));
//       $(".total-value").fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $(".final-value").fadeOut(fadeTime, function () {
//       $("#basket-subtotal").html(subtotal.toFixed(2));
//       $("#basket-total").html(total.toFixed(2));
//       if (total == 0) {
//         $(".checkout-cta").fadeOut(fadeTime);
//       } else {
//         $(".checkout-cta").fadeIn(fadeTime);
//       }
//       $(".final-value").fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children(".price").text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children(".subtotal").each(function () {
//     $(this).fadeOut(fadeTime, function () {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find(".item-quantity").text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $(".quantity input").each(function () {
//     sumItems += parseInt($(this).val());
//   });
//   $(".total-items").text(sumItems);
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function () {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }


// nuevo codigo


// Intento 2
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('€', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
