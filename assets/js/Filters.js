buildFilters = function(key) {
    Filters.html(buildHtmlFilter(key));
}

buildHtmlFilter = function(filter) {

    filterCategory = filter[0].category;
    filterPrices = filter[1].prices;

    return `


    <div class="modal left fade opacity" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body modal-filter">
                    <div class="nav flex-sm-column flex-row">
                        <ul class="ul-list-filter">
                            <hr color="black">
                            <li class="list-filters">
                                <p><b>Categoria</b></p>
                            </li>
                            <ul id="build-category">
                                ${buildCategory()}
                            </ul>
                            <hr color="black">
                            <li class="list-filters">
                                <p><b>Precio</b></p>
                            </li>
                            <ul>
                                ${buildPriceshigh()}
                                ${buildPrices()}
                            </ul>
                        </ul>
                        <button type="button" class="btn btn-secondary clean-filter" data-dismiss="modal" onclick="deleteInput()">Limpiar</button>
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
}

buildCategory = function() {
    var html = '';
    filterCategory.forEach(filter => {
        html = html + `<li onclick="filteredCategorySearch('${ filter['value'] }')" style="cursor:pointer">${ filter['category'] }</li>`;
    });

    return html;
}

this.buildPriceshigh = function() {
    var html = '';
    filterPrices.forEach(filter => {
        html = html + `<li onclick="filteredPriceSearchhigh(${ filter['value'] })" style="cursor:pointer">Más de $${ filter['price'] }</li>`;
    });

    return html;
}
this.buildPrices = function() {
    var html = '';
    filterPrices.forEach(filter => {
        html = html + `<li onclick="filteredPriceSearch(${ filter['value'] })" style="cursor:pointer">Menos de $${ filter['price'] }</li>`;
    });

    return html;
}