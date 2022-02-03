function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`;

//   union type
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const priintFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Promise
// export const fetchData = (url: string): Promise<string> =>
//   Promise.resolve(`Data from ${url}`);

//   Res Parameters
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`;
}

export function getName(user?: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
