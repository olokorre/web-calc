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
        const expression = display.text();
        const result = eval(expression.replace('^', '**'));
        display.text(result);
    } catch (e) {
        console.error(e);
        display.text('');
    }
});

$('.backspace').click(function () {
    const expression = display.text();
    display.text(expression.slice(0, expression.length - 1));
});
