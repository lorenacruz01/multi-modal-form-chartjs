$(document).ready(function(){
   
    $('#addSalesGoals').click(function(){
        $('#salesGoalsModal').modal('show')
    });

    $(document).on('show.bs.modal', '.modal', function() {
        const zIndex = 1040 + 10 * $('.modal:visible').length;
        $(this).css('z-index', zIndex);
        setTimeout(() => $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'));
    });
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
            $('#salesGoalsModal').modal('hide')
        } 
    });

    $("#cancelSalesGoals").on( "click", function(){
        console.log("cancelou");
        document.getElementById("january").value = null;
        document.getElementById("february").value = null;
        document.getElementById("march").value = null;
        document.getElementById("april").value = null;
        document.getElementById("may").value = null;
        document.getElementById("june").value = null;
        document.getElementById("july").value = null;
        document.getElementById("august").value = null;
        document.getElementById("september").value = null;
        document.getElementById("october").value = null;
        document.getElementById("november").value = null;
        document.getElementById("december").value = null;
    });
        
    $("#myForm").on("submit", function(){
        event.preventDefault();
        $("#myForm").serialize();
        console.log($("#myForm").serialize());
    });
});