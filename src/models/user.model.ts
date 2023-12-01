export class User {
  constructor(
    public readonly firstName: string,
    public readonly firstSurname: string,
    public readonly secondName?: string,
    public readonly secondSurname?: string,
    public readonly cellPhoneNumber?: string
  ) {}
}
