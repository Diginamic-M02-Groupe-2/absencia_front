export type GetHistogramReportResponse = HistogramDataset[];

export interface HistogramDataset {
  id: number;
  firstName: string;
  lastName: string;
  dataset: number[]; // One number for each day of the month
}