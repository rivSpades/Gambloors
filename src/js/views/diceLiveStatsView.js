import ModalView from './modalView.js';

class diceLiveStatsView extends ModalView {
  headerTitle = 'Live Stats';
  renderBody() {
    const html = `<canvas class="min-w-full max-w-full w-full min max-h-72 sm:max-h-80 sm:h-auto"  id="myChart"></canvas>
    <div class="flex  max-w-full overflow-x-hidden overflow-y-auto">
	<table class="table w-full text-sm text-left uppercase">
		<thead class="text-xs uppercase font-normal ">
			<tr>
				<th class="px-6 py-3">Time</th>
        <th class="px-6 py-3">Wagered</th>
        <th class="px-6 py-3">Multiplier</th>
				<th class="px-6 py-3 text-right">Profit (FUN)</th>
			</tr>
		</thead>
		<tbody id="data-table-body"  >
			
		</tbody>
	</table>
</div>
    `;
    return html;
  }

  renderChart(data) {
    data.reverse();

    const profits = data.map((obj) => {
      const profit = obj.is_winner
        ? obj.bet_amount * obj.payout_multiplier - obj.bet_amount
        : -obj.bet_amount;
      //cumulativeProfit += profit;
      //return cumulativeProfit;
      return profit;
    });
    console.log(profits);
    /*const profits = [
      100, 200, 150, 300, 250, -500, -500, -250, 100, 200, 150, 300,
    ];*/

    // Calculate cumulative profits
    let cumulativeProfit = 0;
    const cumulativeProfits = [0, ...profits].map((profit) => {
      cumulativeProfit += profit;
      return cumulativeProfit;
    });

    console.log(cumulativeProfits);

    // Create a chart
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: [0, ...profits].length }, (_, i) => i + 1),
        datasets: [
          {
            label: 'Profit',
            data: cumulativeProfits,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 4,
          },
        ],
      },
      options: {
        responsive: true,

        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'FUN',
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });

    // Add data to the table
    const tableBody = document.getElementById('data-table-body');
    profits.forEach((profit, i) => {
      const d = new Date(data[i].date_game);
      const row = document.createElement('tr');
      row.classList.add('even:bg-accent/20');
      row.classList.add('odd:white');
      row.innerHTML = `
        <td class="px-6 py-4">${d.getFullYear()}/${
        d.getMonth() + 1
      }/${d.getDate()}</td>
        <td class="px-6 py-4">${Number(data[i].bet_amount).toFixed(2)}</td>
        <td class="px-6 py-4">${Number(data[i].payout_multiplier).toFixed(
          2
        )}</td>
        
        <td class="px-6 py-4 text-right">${profit.toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}

export default new diceLiveStatsView();
