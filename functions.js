document.querySelector('.buttons').addEventListener('click', function(event) {
    const display = document.getElementById('display');
    const target = event.target;

    if (target.classList.contains('btn')) {
        if (target.dataset.action === 'clear') {
            display.value = '';
        } else if (target.dataset.action === 'calculate') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (target.dataset.value) {
            display.value += target.dataset.value;
        }
    }
});
