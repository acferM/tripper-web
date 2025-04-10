export class AppError {
  constructor(
    readonly message: string,
    readonly code = 400,
  ) {}
}
