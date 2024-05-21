export interface IScheduleForm {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}
export interface ISchedule {
  [x: string]: any;
  id?: string;
  startDateTime: string;
  endDateTime: string;
}
