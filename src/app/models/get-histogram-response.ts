export type GetHistogramResponse = HistogramDataset[];

export interface HistogramDataset {
  id: number;
  firstName: string;
  lastName: string;
  data: number[]; // One number for each day of the month
}