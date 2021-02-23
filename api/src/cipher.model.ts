export class Cipher {
  constructor(
    public id: string,
    public phrase: string,
    public offset: number,
    public encoded: string
  ) {}
}
