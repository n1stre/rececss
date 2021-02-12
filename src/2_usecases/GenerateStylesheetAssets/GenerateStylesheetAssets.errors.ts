export class CustomError extends Error {
  constructor() {
    const name = "_";
    const message = "_";

    super(message);
    this.name = name;
    this.message = message;
  }
}
