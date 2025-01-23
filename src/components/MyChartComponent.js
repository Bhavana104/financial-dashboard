import { Chart, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement);
// Register required components
Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

let chart;

function renderChart(ctx, config) {
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, config);
}

// Example usage
const ctx = document.getElementById('myChart').getContext('2d');
const config = {
    type: 'doughnut', // Or your preferred chart type
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My Dataset',
            data: [300, 50, 100],
            backgroundColor: ['red', 'blue', 'yellow'],
        }],
    },
    options: {
        responsive: true,
    },
};

renderChart(ctx, config);
