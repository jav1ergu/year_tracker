document.addEventListener('DOMContentLoaded', () => {
    const yearTable = document.getElementById('year-table');
    const today = new Date();
    const year = today.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const daysPassed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

    let dayCounter = 1;

    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const row = document.createElement('tr');

        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('td');
            cell.textContent = day;
            if (dayCounter <= daysPassed) {
                cell.classList.add('passed');
            }
            row.appendChild(cell);
            dayCounter++;
        }
        
        yearTable.appendChild(row);
    }
});
