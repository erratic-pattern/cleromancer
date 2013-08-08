function createNewChoice() {
    var new_choice = $('<li></li>');
    new_choice.append('<input type="text" class="choiceField" placeholder="Insert a choice here">');
    var delete_choice = $('<input type="button" class="deleteChoice" value="Delete choice">');
    delete_choice.click(function(event) {
        $(event.target).parent().remove();
    });
    new_choice.append(delete_choice);
    return new_choice;
}

$(document).ready(function() {
    var nChoices = $('#nChoices');
    var choiceList = $('#choiceList');
    var resultOutput = $('#resultOutput');
    choiceList.append(createNewChoice());
    choiceList.append(createNewChoice());
    $('#insertNewChoice').click(function(event) {
        choiceList.append(createNewChoice());
    });
    $('#decide').click(function(event) {
        var n = nChoices.val(), out = '';
        for(var i = 0; i < n; i++) { 
            var rInd = Math.floor(choiceList.children().length * Math.random());
            out += (choiceList.find('li:eq('+rInd+') .choiceField').val() || rInd + 1) + ' ';
        }
        resultOutput.text(out);
        $('.resultText').fadeIn();
    });                                                   
});
