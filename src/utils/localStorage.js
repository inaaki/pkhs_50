import store from 'store2';

const wm = new WeakMap();

class Store {
  constructor() {
    // Just a fun with weakmap
    // I know i can't hide this :)
    wm.set(this, process.env.REACT_APP_TOKEN_KEY);
  }

  get() {
    return store.get(wm.get(this));
  }
  set(data) {
    return store.set(wm.get(this), data);
  }
  remove() {
    return store.remove(wm.get(this));
  }
}

export default new Store();
