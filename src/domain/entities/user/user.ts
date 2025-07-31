export class User {
  constructor(
    public readonly userId: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly gender: string,
  ) {}
}
