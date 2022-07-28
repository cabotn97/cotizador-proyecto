/*--------------  Form Busquedas ----------------*/

function openCarga(){
    $('#carga_container').toggle();
}

function openSuelta(){
    $('#carga_suelta').toggle();
}

function openAereo(){
    $('#carga_aereo').toggle();
}

function openType(evt, typeName){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(typeName).style.display = "block";
    evt.currentTarget.className += " active";
}

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');   
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
    });    
});

/*-------------- End Form Busquedas ---------------*/

$(document).on('change', ':file', function() {
    let input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $(':file').on('fileselect', function(event, numFiles, label) {
        $('#nothing').val(label);
    });
});

function showParagraph(id){
    if($("#fa_"+id).hasClass("fa-minus")){
        var src = 'img/+.svg';
        $("#fa_"+id).removeClass('fa-minus');
        $("#fa_"+id).addClass('fa-plus');
    }else{
        $("#fa_"+id).removeClass('fa-plus');
        $("#fa_"+id).addClass('fa-minus');
    }
    $( "#body_"+ id ).toggle();
    //$("#fa_"+id).attr('src', src);
}