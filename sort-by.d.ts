declare module "sort-by" {
  type SortByMapper<T> = (property: string, value: any) => any;

  export default function sortBy<T extends Record<string, any>>(
    ...args: Array<string> | SortByMapper<T>
  ): (a: T, b: T) => number;
}
