// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DuplicateErrorMessageGenerator = (err: any) => {
  const firstProperty = Object.keys(err.keyValue)[0]

  return `${firstProperty} already exsist!`
}

// here only phoneNumber is unique.
//So we can directly use "phoneNumber already exsist!"
// But here i used dynamic system for further development
