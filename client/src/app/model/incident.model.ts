export class IncidentModel
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: string,
    public incidentNo?: string,
    public title?: string,
    public description?: string,
    public category?: string,
    public createdBy?: string,
    public assignedTo?: string,
    public priority?: string,
    public status?: string
  ){}

  public toString(): string
  {
    return `
    Incident
    -------------------------------
    Incident No : ${this.incidentNo}
    Title       : ${this.title}
    Category    : ${this.category}
    Created By  : ${this.createdBy}
    Assigned To : ${this.assignedTo}
    Priority    : ${this.priority}
    Status      : ${this.status}
    -------------------------------
    `;
  }
}
