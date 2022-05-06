class MyError extends Error {
  errorStuff?: any;

  constructor(message: string, errorStuff?: any) {
    super(message)
    if (errorStuff) {
      this.errorStuff = errorStuff;
    }
  }
}

export default function neverReturns(message: string, errorStuff?: any): never {
  throw new MyError(message, errorStuff)
}

// neverReturns('whatever')
// neverReturns('whatever', { veryveryImportantStuff: 'you are awesome!' })

