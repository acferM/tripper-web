export class AppError {
  constructor(
    readonly message: String,
    readonly code = 400,
  ) { }
}
