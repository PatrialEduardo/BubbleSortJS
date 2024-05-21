function bubblesort(items) {
    let swap;
    let last = items.length - 1;
    do {
        swap = false;
        for (let i = 0; i < last; i++){
            if (items[i] > items[i + 1]){
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
                swap = true;
            }
        }
        last--;
    } while (swap)
    return items;
}

document.getElementById('sortForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let numbers = document.getElementById('numbers').value;

    let items = numbers.split(/[\s,;]+/).map(Number);

    items = items.filter(item => !isNaN(item));

    let sortedItems = bubblesort(items);

    document.getElementById('result').innerText = sortedItems.join(', ');
});