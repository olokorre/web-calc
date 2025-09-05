const display = $('#display');
let calculationHistory = [];

// Function to add calculation to history
function addToHistory(expression, result) {
    const historyItem = {
        expression: expression,
        result: result,
        timestamp: new Date()
    };
    calculationHistory.push(historyItem);
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    const historyList = $('#history-list');
    historyList.empty();
    
    // Show recent calculations first (reverse order)
    const recentHistory = calculationHistory.slice().reverse();
    
    recentHistory.forEach(function(item) {
        const historyItemDiv = $('<div class="history-item"></div>');
        historyItemDiv.html(
            '<span class="expression">' + item.expression + '</span> = <span class="result">' + item.result + '</span>'
        );
        
        // Add click event to use calculation in display
        historyItemDiv.click(function() {
            display.text(item.result);
        });
        
        historyList.append(historyItemDiv);
    });
}

// Function to clear history
function clearHistory() {
    calculationHistory = [];
    updateHistoryDisplay();
}

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
        if (expression.trim() === '') {
            return;
        }
        
        const result = eval(expression.replace('^', '**'));
        
        // Add to history before updating display
        addToHistory(expression, result);
        
        display.text(result);
    } catch (e) {
        console.error(e);
        display.text('Error');
    }
});

$('.backspace').click(function () {
    const expression = display.text();
    display.text(expression.slice(0, expression.length - 1));
});

// Clear history button event
$('#clear-history').click(function () {
    clearHistory();
});
