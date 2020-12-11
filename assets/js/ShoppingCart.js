var totalPrice = 0;

function ShoppingCart() {
    var cart = [];

    this.populate = function() {
        cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.forEach(product => {
            totalPrice = totalPrice + product.price;
        });
    }

    this.add = function(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        totalPrice = totalPrice + product.price;
        this.buildCart('cart-box');
    }

    this.remove = function(id) {
        var removeIndex = cart.findIndex(x => x.id === id.id);
        cart.splice(removeIndex, 1)
        localStorage.setItem('cart', JSON.stringify(cart));
        totalPrice = totalPrice - id.price;
        this.buildCart('cart-box');
    }

    this.del = function() {
        localStorage.clear('cart');
        if (localStorage.getItem('cart') === null) {
            shoppingCart.populate();
            totalPrice = 0;
        }
        this.buildCart('cart-box');
    }

    this.get = function() {
        return cart;
    }

    this.buildList = function() {
        var html = '';
        cart.forEach(product => {
            html = html + `<td>${ product.title }</td>`;
        });

        return html;
    }

    this.buildListPrice = function() {
        var html = '';
        cart.forEach(product => {
            html = html + `<td><b>$${ product.price }</b></td>`;
        });

        return html;
    }

    this.DeleteButton = function() {
        var html = '';
        cart.forEach(product => {
            html = html + `<td>
            <button class="btn btn-danger" onclick="delProduct('${product.id}')" data-dismiss="modal">borrar</button>
                    </td>`;  
        });

        return html;
    }


    this.totalPriceRender = function() {
        if (totalPrice != '') {
            $('#total-price').html(totalPrice);
        }
    }

    this.buildCart = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
       <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title" id="exampleModalLabel">
                Tú Carrito de Compras
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table table-image">
                
                <tbody>
                    <tr>
                    ${ this.buildList() }
                    </tr>
                    <tr>
                    ${ this.buildListPrice() }
                    </tr>
                  <tr>
                  ${ this.DeleteButton() }
                  </tr>
                </tbody>
              </table> 
              <div class="d-flex justify-content-end">
                <h5>Total: <span class="price text-success">$${totalPrice}</span></h5>
              </div>
            </div>
            <div class="modal-footer border-top-0 d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-success" onclick="paymentGateway()" data-dismiss="modal" data-toggle="modal" data-target="#gatewayModal">Checkout</button>
            </div>
          </div>
        </div>
      </div> 
        `
        container.innerHTML = html;
    }
}























/*




function ShoppingCart() {

    this.cart = [];

    this.populate = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.add = function(item) {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('cart-box');
    }
    this.del = function() {
        localStorage.clear('cart');
        if (localStorage.getItem('cart') === null) {
            shoppingCart.populate();
        }
        this.buildCart('cart-box');
    }

    this.get = function() {
        return this.cart;
    }

    this.buildList = function() {
        var html = '';
        this.cart.forEach(product => {
            html = html + `<li>${ product.title } = $${ product.price }</li>`;
        });
        return html;
    }

    this.buildCart = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
        <div id="product-added-box">
            <h2>Carrito (${this.cart.length})</h2>
            <ul>
                ${ this.buildList() }
            </ul>
        </div>
            <hr color="black">
        <div id="total-price-box">
            <p></p>
        </div>
            <input id="btn-cart" type="button" value="Comprar"/>
             <input id="btn-cart" type="button" value="Vaciar" onclick="emptyCart()"/>       
        `

        container.innerHTML = html;
    }
}


*/