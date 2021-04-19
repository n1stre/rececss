export class InvalidValue extends Error {
  constructor(prop: string, value: any) {
    const name = "InvalidValueError";
    const message = `Invalid value (${value}) for property "${prop}"`;

    super(message);
    this.name = name;
    this.message = message;
  }
}
