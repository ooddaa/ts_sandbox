import * as util from "util";

export const log = (...items: any) =>
  items.forEach((item: any) =>
    console.log(util.inspect(item, { depth: null, colors: true }))
  );