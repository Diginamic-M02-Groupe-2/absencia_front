import {Component, Input, OnChanges } from "@angular/core";
import {DateService} from "../../services/date.service";
import {GetHistogramResponse, HistogramDataset} from "../../models/get-histogram-response";

@Component({
  selector: "app-histogram",
  templateUrl: "./histogram.component.html",
})
export class HistogramComponent implements OnChanges {
  private colors: string[] = [
    "#2979ff",
    "#ff8a65",
    "#ffd600",
    "#8e24aa",
    "#4caf50",
    "#e64a19",
    "#009688",
    "#1de9b6",
    "#42a5f5",
    "#ef9a9a",
    "#6d4c41",
    "#ffa000",
    "#f06292",
    "#c5cae9",
    "#aed581",
    "#9575cd",
    "#f44336",
    "#607d8b",
  ];

  data: any;

  options: any;

  @Input()
  month!: number;

  @Input()
  year!: number;

  @Input()
  datasets!: GetHistogramResponse;

  constructor(
    private dateService: DateService,
  ) {
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: .8,
      plugins: {
        /* tooltip: {
          mode: "index",
          intersect: false,
        }, */
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 32,
            boxHeight: 16,
            color: "#127ca6",
            font: {
              family: "Louis George Cafe",
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#127ca6",
            font: {
              family: "Louis George Cafe",
            },
          },
          grid: {
            color: "#127ca640",
          },
        },
        y: {
          stacked: true,
          ticks: {
            stepSize: 1,
            color: "#127ca6",
            font: {
              family: "Louis George Cafe",
            },
          },
          grid: {
            color: "#127ca640",
          },
        },
      },
    };
  }

  ngOnChanges(): void {
    if (!this.datasets) {
      return;
    }
    const days = this.dateService.getDaysInMonth(this.month, this.year);
    this.data = {
      labels: days.map(day => day.toLocaleDateString("fr-FR")),
      datasets: this.datasets.map((dataset: HistogramDataset, i: number) => ({
        label: `${dataset.firstName} ${dataset.lastName}`,
        backgroundColor: this.colors[i],
        data: dataset.dataset,
      })),
    };
  }
}