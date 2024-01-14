interface ErrorMapping {
  [key: string]: { statusCode: number }
}

const errorMappings: ErrorMapping = {
  InvalidParameterError: { statusCode: 400 },
  DuplicatedDataError: { statusCode: 400 },
  default: { statusCode: 500 }
}

export const ErrorHandler = (error: any) => {
  const errorType = error.constructor.name;
  const errorMapped = errorMappings[errorType] || errorMappings.default;
  const message = errorMapped ? error.message : 'Something went wrong, try later';

  return {
    message,
    statusCode: errorMapped.statusCode
  }
}