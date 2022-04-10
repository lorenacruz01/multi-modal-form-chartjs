$(document).ready(function(){
    var currentValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function saveValues(){
        var keys = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        for(var i = 0; i < keys.length; i++){
            currentValues[i] = document.getElementById(keys[i]).value;
            console.log("valor: " + currentValues[i]);
        }
    }

    function RestoreModal(){
        var keys = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        for(var i = 0; i < keys.length; i++){
            document.getElementById(keys[i]).value = currentValues[i]; 
        } 
    }


    $('#addSalesGoals').click(function(){
        RestoreModal();
        $('#salesGoalsModal').modal('show');
    });

    $(document).on('show.bs.modal', '.modal', function() {
        const zIndex = 1040 + 10 * $('.modal:visible').length;
        $(this).css('z-index', zIndex);
        setTimeout(() => $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'));
    });

    
    function CleanErrorMsg(){
        $('#error-msg').html('');
        $('input').removeClass('error');
    }

    function ValidateSalesGoals(){
        var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        var values = [];
        var value = "";
        for(var i = 0; i < months.length; i++){
            value = document.getElementById(months[i]).value;
            if(isNaN(value) || value == ""){
                values.push(document.getElementById(months[i]).value);
                $("#" + months[i]).addClass("error");
            }
        }
        if(values.length == 0){
            return true;
        } else {
            $("#error-msg").html('<div class="text-danger" role="alert">These fields can only contain numeric values!</div>');

            return false;
        }
    }

    $("#saveSalesGoals").on( "click", function(){
        var validate = ValidateSalesGoals();
        
        if(validate){
            saveValues();
            $('#salesGoalsModal').modal('hide')
        }
    });

    $("#salesGoalsModal").on('hidden.bs.modal', function(e) {
        CleanErrorMsg();
    });
        
    $("#myForm").on("submit", function(){
        event.preventDefault();
        $("#myForm").serialize();
        console.log($("#myForm").serialize());
    });
});