import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './AprilSpendingByCategory.css';

Chart.register(...registerables);

function AprilSpendingByCategory({ data, options }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Bills & utilities', 'Travel', 'Groceries', 'Entertainment', 'Health'],
        datasets: [{
          label: 'April Spending',
          data: [200, 150, 300, 100, 250],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)', 
            'rgba(54, 162, 235, 0.2)', 
            'rgba(255, 206, 86, 0.2)', 
            'rgba(153, 102, 255, 0.2)', 
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(153, 102, 255, 1)', 
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: 'rgb(255, 99, 132)',
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default AprilSpendingByCategory;