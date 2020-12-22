type _ProxyResult = Record<string, (v?: string | number) => string>;
interface _ProxyConstructor {
  new <T, H extends object>(target: T, handler: ProxyHandler<H>): H;
}

const _Proxy = Proxy as _ProxyConstructor;

export default (p: { valueSymbol: string }) => {
  return function makeClassnamesMapper(map: Record<string, string> = {}) {
    return new _Proxy<typeof map, _ProxyResult>(map, {
      get(_, name: string) {
        return (val: string | number = "") => {
          const mapValue = name in map ? map[name] : `${name}_${val}`;
          return mapValue.replace(p.valueSymbol, val + "");
        };
      },
    });
  };
};
