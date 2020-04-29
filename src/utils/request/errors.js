export class AuthError extends Error {
  constructor() {
    super("You are not allowed to access this.");
    this.name = "AuthError";
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("The requested resource could not be found.");
    this.name = "NotFoundError";
  }
}

export class ServerError extends Error {
  constructor() {
    super("There has been an internal server error. Please try again later :)");
    this.name = "ServerError";
  }
}

export class HTTPError extends Error {
  constructor() {
    super("Something went wrong when communicating with the server.");
    this.name = "HTTPError";
  }
}
