interface StateObj<T> {
  value: T;
}
export const state = <T = any>(value: T) => {
  const obj: StateObj<T> = {
    value
  };
  return new Proxy(obj, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, val, receiver) {
      return Reflect.set(target, prop, val, receiver);
    }
  });
};
