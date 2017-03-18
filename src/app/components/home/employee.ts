export interface IEmployee {
    reportDate: string,
    reportedBy: string,
    employees: ISingleEmployee[];
}

export interface ISingleEmployee {
    employeeId: number,
    employeeName: string,
    employeeTitle: string,
    employeeActInd: boolean,
}