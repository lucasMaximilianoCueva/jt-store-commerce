function search(key) {
    results = [];
    data.forEach((product) => {
        if (product.title.toLowerCase().includes(key.toLowerCase()) || product.category.toLowerCase().includes(key.toLowerCase())) {
            results.push(product);
        }
    });
    return results;
}

function deleteInput() {
    $(searchInput.val(''))
    buildList(data);
    setKeySearchRender('');
    $('#products-body').height(1250);
}

function getSearchBoxValue() {

    var searchResult = search(searchInput.val());

    if (searchInput.val().trim() !== '') {
        setKeySearchRender(searchResult.length);
        buildList(searchResult);
    }
}

function setKeySearchRender(lengthResult) {

    if (lengthResult == '') {
        $(searchResultLength.html(''));
    } else {
        $(searchResultLength.html(`${lengthResult} resultado(s)`));
    }
}


filteredCategorySearch = function(key) {
    filterCategory = [];
    if (searchInput.val() != '') {
        filterCategory = results.filter(filtered => filtered.category === key);
    } else {
        filterCategory = data.filter(filtered => filtered.category === key);
    }
    buildList(filterCategory);
    setKeySearchRender(filterCategory.length);
}

filteredPriceSearchhigh = function(key) {
    filterPrice = [];
    if (searchInput.val() != '') {
        filterPrice = results.filter(filtered => filtered.price > key);
    } else {
        filterPrice = data.filter(filtered => filtered.price > key);
    }
    buildList(filterPrice);
    setKeySearchRender(filterPrice.length);
    $('#products-body').height(650);
}
filteredPriceSearch = function(key) {
    filterPrice = [];
    if (searchInput.val() != '') {
        filterPrice = results.filter(filtered => filtered.price < key);
    } else {
        filterPrice = data.filter(filtered => filtered.price < key);
    }
    buildList(filterPrice);
    setKeySearchRender(filterPrice.length);
    $('#products-body').height(650);
}

function buildHtmlProduct(product) {
    productsContainer.append(`
  
        <div class="card-">
            <div class="card__image-container">
            <img src="${product.img}" alt="producto" />
          </div>
          <div class="card__content">
            <p class="card__title text-info">${product.title}</p>
            <div class="card__info">
              <h6 class="text--info">${product.description}</h6>
              <p class="card__price text--info" onclick="addToCart('${product.id}')">$${product.price}</p>
            </div>
          </div>
          
            
    `);
}

function buildList(key) {

    productsContainer.empty();
    key.forEach(product => {
        productsContainer.html(buildHtmlProduct(product));
    })
};

























/*

function Products() {

    this.data = [];
      this.results = [];    

    this.init = function(data) {
        this.data = data;
    }

    this.getById = function(id) {
        return this.data.filter((product) => product.id === id)
    }

    this.buildHtmlProduct = function(product) {
        return `
        
        < class="product">
            <article class="search-item">
                <div class="imageProduct">
                    <img src="${product.img}" alt="">
                </div>
            <div class="descriptionProduct">
                <h2 class="description-style">${product.title}</h2>
                <h3 class="description-style">${product.description}</h3>
                <h4 class="description-style">$${product.price}</h4>
            </div>
                <div class="buyButton">
                <input id="btn-buy" type="button" value="+" onclick="addToCart('${product.id}')"/>
                </div>
            </article>
        </>
    
        `
    }

    this.buildList = function(containerId, sourceData) {
            var container = document.getElementById(containerId);
            container.innerHTML = "";
            var html = '';

            this[sourceData].forEach(product => {
                html = html + this.buildHtmlProduct(product);
            });
            container.innerHTML = html;
        }
        
            this.search = function(key) {
                this.results = [];
                this.data.forEach((product) => {
                    if (product.title.toLowerCase().includes(key.toLowerCase())) {
                        this.results.push(product);
                    }
                });
                return this.results;
            } 

}


*/