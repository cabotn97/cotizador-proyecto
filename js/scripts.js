//SELECCION:

/*-------------- Llenado seccion carriers ---------------*/

    var flete_min = 0
    var flete_max = 99999.99
    var gastos_min = 0
    var gastos_max = 99999.99

    var carriers = []
    
    $('#flete_min').on("change", function () {
        if ($('#flete_min').val()== ""){
            flete_min = 0
        }
        else{
            flete_min = parseFloat($('#flete_min').val())
        }
        mostrarItemsSegunPrecio()
    })
    
    $('#flete_max').on("change", function () {
        if ($('#flete_max').val()== ""){
            flete_max = 99999.99
        }
        else{
            flete_max = parseFloat($('#flete_max').val())
        }
        mostrarItemsSegunPrecio()
    })

    $('#gastos_min').on("change", function () {
        if ($('#gastos_min').val()== ""){
            gastos_min = 0
        }
        else{
            gastos_min = parseFloat($('#gastos_min').val())
        }
        mostrarItemsSegunPrecio()
    })
    
    $('#gastos_max').on("change", function () {
        if ($('#gastos_max').val()== ""){
            gastos_max = 99999.99
        }
        else{
            gastos_max = parseFloat($('#gastos_max').val())
        }
        mostrarItemsSegunPrecio()
    })
    
    var seleccion_items= [
        {
            "item_id": 1,
            "carrier": "MSC",
            "importe-flete": 7500,
            "importe-gastos": 450,
            "free-days": 21,
            "transit-time": 45,
            "salida-estimada": "30/07/2022",
        },
        {
            "item_id": 2,
            "carrier": "MAERSK",
            "importe-flete": 7300,
            "importe-gastos": 800,
            "free-days": 15,
            "transit-time": 45,
            "salida-estimada": "29/07/2022",
        },  
        {
            "item_id": 3,
            "carrier": "MSC",
            "importe-flete": 7100,
            "importe-gastos": 600,
            "free-days": 15,
            "transit-time": 30,
            "salida-estimada": "30/07/2022",
        },  
        {
            "item_id": 4,
            "carrier": "EVERGREEN",
            "importe-flete": 7200,
            "importe-gastos": 500,
            "free-days": 21,
            "transit-time": 45,
            "salida-estimada": "27/07/2022",
        },  
        {
            "item_id": 5,
            "carrier": "EVERGREEN",
            "importe-flete": 7500,
            "importe-gastos": 548,
            "free-days": 15,
            "transit-time": 30,
            "salida-estimada": "25/07/2022",
        },  
        {
            "item_id": 6,
            "carrier": "MAERSK",
            "importe-flete": 7500,
            "importe-gastos": 690,
            "free-days": 21,
            "transit-time": 30,
            "salida-estimada": "28/07/2022",
        },  
        {
            "item_id": 7,
            "carrier": "EVERGREEN",
            "importe-flete": 7200,
            "importe-gastos": 500,
            "free-days": 15,
            "transit-time": 45,
            "salida-estimada": "31/07/2022",
        },
        {
            "item_id": 8,
            "carrier": "MSC",
            "importe-flete": 7000,
            "importe-gastos": 490,
            "free-days": 15,
            "transit-time": 30,
            "salida-estimada": "29/07/2022",
        },
    ]
    
    function mostrarItems() {
        $("#mostrar-items-div").empty()
        for (let i = 0; i < seleccion_items.length; i++) {
            carriers.push(seleccion_items[i]['carrier'])
            let item_content = '<div class="result-container ' + seleccion_items[i]['carrier'] + ' ' + seleccion_items[i]['free-days'] + ' ' + seleccion_items[i]['transit-time'] + '"><div class="result-content"><div class="header"><img src="img/logo-' + seleccion_items[i]['carrier'] + '.png" alt=""></div><div class="body"><div class="content"><div id="carrier" style="visibility:hidden;"><span>' + seleccion_items[i]['carrier'] + '</span></div><div><span>Días libres</span><p id="free-days">' + seleccion_items[i]['free-days'] + ' días libres</p></div><div><span>Transit time</span><p id="transit-time">' + seleccion_items[i]['transit-time'] + ' días</p></div><div><span>Salida Estimada</span><p>' + seleccion_items[i]['salida-estimada'] + '</p></div><div><span>Vigencia</span><p>5/08/2022</p></div></div></div><div class="footer"><p class="text-danger"><i class="fas fa-exclamation-circle"></i> El importe de gastos no incluye EXW. Los mismos serán cotizados dentro de las 48hs de realizada la consulta.</p><p class="text-success"><i class="fas fa-exclamation-circle"></i> El importe de flete incluye gastos IMO</p></div></div><div class="result-price"><div class="price"><div class="title">FLETE</div><div><h3>USD <span class="flete">' + seleccion_items[i]['importe-flete'] + '</span></h3><a href="#">ver detalle</a></div></div><div class="price price-2"><div class="title">GASTOS</div><div><h3>USD <span class="gastos">' + seleccion_items[i]['importe-gastos'] + '</span></h3><a href="#">ver detalle</a></div></div><a href="#" class="select-button">Seleccionar</a></div></div>'
            $("#mostrar-items-div").append(item_content)
        }
        const filtroCarriers = carriers.filter(function(ele , pos){
            return carriers.indexOf(ele) == pos;
        })
        $("#mostrar_carriers_div").empty()
        for (let i = 0; i < filtroCarriers.length; i++) {
            let mostrar_carriers = '<div class="filter-box"><label class="chexbox"><input type="checkbox" name="carrier" data-id="1" value="'+filtroCarriers[i]+'"><span class="chexmark"></span></label><label for="">'+filtroCarriers[i]+'</label></div>'
            $("#mostrar-carriers-div").append(mostrar_carriers)
        }         
    }

    $(document).ready(function () {
        mostrarItems()
    })
    
    function mostrarItemsSegunPrecio() {
        $("#mostrar-items-div").empty()
        for (let i = 0; i < seleccion_items.length; i++) {
            if (seleccion_items[i]['importe-flete'] <= flete_max && seleccion_items[i]['importe-flete'] >= flete_min && seleccion_items[i]['importe-gastos'] <= gastos_max && seleccion_items[i]['importe-gastos'] >= gastos_min) {
                let item_content = '<div class="result-container ' + seleccion_items[i]['carrier'] + ' ' + seleccion_items[i]['free-days'] + ' ' + seleccion_items[i]['transit-time'] + '"><div class="result-content"><div class="header"><img src="img/logo-' + seleccion_items[i]['carrier'] + '.png" alt=""></div><div class="body"><div class="content"><div id="carrier" style="visibility:hidden;"><span>' + seleccion_items[i]['carrier'] + '</span></div><div><span>Días libres</span><p id="free-days">' + seleccion_items[i]['free-days'] + ' días libres</p></div><div><span>Transit time</span><p id="transit-time">' + seleccion_items[i]['transit-time'] + ' días</p></div><div><span>Salida Estimada</span><p>' + seleccion_items[i]['salida-estimada'] + '</p></div><div><span>Vigencia</span><p>5/08/2022</p></div></div></div><div class="footer"><p class="text-danger"><i class="fas fa-exclamation-circle"></i> El importe de gastos no incluye EXW. Los mismos serán cotizados dentro de las 48hs de realizada la consulta.</p><p class="text-success"><i class="fas fa-exclamation-circle"></i> El importe de flete incluye gastos IMO</p></div></div><div class="result-price"><div class="price"><div class="title">FLETE</div><div><h3>USD <span class="flete">' + seleccion_items[i]['importe-flete'] + '</span></h3><a href="#">ver detalle</a></div></div><div class="price price-2"><div class="title">GASTOS</div><div><h3>USD <span class="gastos">' + seleccion_items[i]['importe-gastos'] + '</span></h3><a href="#">ver detalle</a></div></div><a href="#" class="select-button">Seleccionar</a></div></div>'
                $("#mostrar-items-div").append(item_content)
            }
        }
    }


    
/*-------------- Filtros de busqueda "seleccion" ---------------*/

    $(document).ready(function () {
        $("input").change(function () {
            let filters = {}
            $(':input:checked,select').each(function(index, el) {
                let group = $(el).data("id")
                filters[group] = (filters[group] || []).concat("." + el.value)
            })
                                
            let $filtered = $(".result-container").hide()
            for (let group in filters) $filtered = $filtered.filter(filters[group].join(","))
            $filtered.show()
        })
    })

    

    
