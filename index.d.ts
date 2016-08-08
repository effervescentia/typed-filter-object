declare namespace FilterObject {
  function filterObject(obj: any, glob: string): any;
  function filterObject(obj: any, globs: string[]): any;
}

export = FilterObject.filterObject;
