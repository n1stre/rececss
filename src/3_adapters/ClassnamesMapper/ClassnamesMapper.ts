export default (p: { valueSymbol: string }) => {
  return function makeClassnamesMapper(map: Record<string, string>) {
    return new Proxy(map, {
      get(target, name: string) {
        return (val: string) => {
          const mapValue = name in target ? target[name] : `${name}_${val}`;
          return mapValue.replace(p.valueSymbol, val);
        };
      },
    });
  };
};
