interface _ProxyConstructor {
  new <T, H extends object>(target: T, handler: ProxyHandler<H>): H;
}
const _Proxy = Proxy as _ProxyConstructor;

export default (p: { valueSymbol: string }) => {
  return function makeClassnamesMapper(map: Record<string, string> = {}) {
    return new _Proxy<typeof map, Record<string, (v?: string) => string>>(map, {
      get(_, name: string) {
        return (val: string = "") => {
          const mapValue = name in map ? map[name] : `${name}_${val}`;
          return mapValue.replace(p.valueSymbol, val);
        };
      },
    });
  };
};
