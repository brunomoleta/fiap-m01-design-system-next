import { Chart, registerables } from "chart.js";
import { 
  WidgetContainer,
} from "../../../../../../design-system/src";
import { useEffect } from "react";
import {formatCurrency} from '$/utils';
import useInvestmentsStore from "$/app/store/investments.store";
import Skeleton from "react-loading-skeleton";

Chart.register(...registerables);

const Investments = () => {
  const { investments, fetchInvestmentData } = useInvestmentsStore()
  
  const setChart = (labels: string[], data: number[]) => {
    const ctx = document.getElementById('investmentsChart') as HTMLCanvasElement;

    if (ctx) {
      if (Chart.getChart('investmentsChart')) Chart.getChart('investmentsChart')?.destroy();

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            data,
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'right',
              labels: {
                color: 'white',
                pointStyle: 'circle',
                usePointStyle: true,
                padding: 30,
              },
              title: {
                padding: 10
              }
            },
            tooltip: {
              enabled: false,
            }
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          events: []
        },
      });
    }
  };

  const setInvestmentGraphic = async () => {
    if (!investments.items.length) return;
  
    const labels: string[] = [];
    const data: number[] = [];
  
    investments.items.forEach(({ investment_name, value }) => {
      labels.push(investment_name);
      data.push(value);
    });
  
    setChart(labels, data);
  };  

  useEffect(() => {
    fetchInvestmentData();
  }, []);

  useEffect(() => {
    setInvestmentGraphic();
  }, [investments]);

  return (
    <WidgetContainer
      backgroundColor="background-medium-grey"
      title="Investimentos"
    >
      <div className="flex flex-col">
        <span className="block text-headline-sm text-background-default mb-spacing-xl">
          Total: {(!investments?.total ? <Skeleton /> : formatCurrency(investments?.total))}
        </span>
        <div className="flex flex-wrap gap-spacing-lg mb-spacing-xl">
          {
            (
              !investments?.items?.length ?
                Array.from(Array(4).keys()).map((i) => (
                  <div key={i} className="text-white bg-background-default rounded-spacing-sm p-spacing-md min-w-fit gap-spacing-md w-1/3 justify-center grow max-tablet:w-1/2">
                    <Skeleton count={2} />
                  </div>)
                ) :
                investments?.items?.map((item, index) => (
                  <div key={index} className="text-white bg-background-default rounded-spacing-sm p-spacing-md flex flex-wrap flex-col items-center min-w-fit gap-spacing-md w-1/3 justify-center grow max-tablet:w-1/2">
                    <span className="text-text-sm">{item.investment_name}</span>
                    <span className="text-headline-sm">{formatCurrency(item.value)}</span>
                  </div>
                )
              )
            )
          }
        </div>
        
        <div className="mt-spacing-lg">
          <span className="block text-headline-sm mb-spacing-lg">Estatísticas</span>
          <div className="h-fit bg-background-default flex justify-center rounded-spacing-sm p-spacing-md h-80">
            <canvas id="investmentsChart"></canvas>
          </div>
        </div>
      </div>
    </WidgetContainer>
  )
};

export default Investments;