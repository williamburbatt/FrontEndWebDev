
$(function () {
    $("#submitButton").click(function () {
    var text = $('#input').val();
    if (text != "") {
        $("ul.inProgress").append('<li>' + text + '</l1>');
    }
    $('#input').val("");
          $('li').on('click', function () {
        var text = $(this).text();
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function () {
        $("ul.finished").append('<li>' + text + '</l1>');

            $(this).remove();
        });
    });
});
    
});

