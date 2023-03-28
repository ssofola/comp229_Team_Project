export class ResolutionModel
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: string,
    public incidentID?: string,
    public resolutionNote?: string,
    public recordedOn?: string,
    public recordedBy?: string
  ){}

  public toString(): string
  {
    return `
    Resolution
    -------------------------------
    Incident ID : ${this.incidentID}
    Note        : ${this.resolutionNote}
    Recorded On : ${this.recordedOn}
    Recorded By : ${this.recordedBy}
    -------------------------------
    `;
  }
}
