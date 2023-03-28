export class ResolutionModel
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: string,
    public name?: string,
    public description?: string
  ){}

  public toString(): string
  {
    return `
    Resolution
    -------------------------------
    Record ID   : ${this._id}
    Name        : ${this.name}
    Description : ${this.description}
    -------------------------------
    `;
  }
}
