declare function filterObject(obj: any, globs: string | string[], opts?: FilterOptions): any;
declare function filterObject(obj: any, filter: Function, opts?: FilterOptions): any;

declare interface FilterOptions {
  keys?: string[];
  sort?: (key1: string, key2: string) => number;
  sortOrder?: 'asc' | 'desc' | 'ASC' | 'DESC' | string;
  sortBy?: (obj: any) => string[];
}

export = filterObject;
