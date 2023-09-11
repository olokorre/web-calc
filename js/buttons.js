const display = $('#display');

$('.numbers').click(function () {
    const number = $(this).text();
    display.append(number);
});

$('.clean').click(function () {
    display.text('');
});

$('#equals').click(function () {
    try {
        const result = eval(display.text());
        display.text(result);
    } catch (e) {
        console.error(e);
        display.text('');
    }
});
