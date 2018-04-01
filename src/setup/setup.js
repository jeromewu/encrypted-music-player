import setupPersistent from './setupPersistent';
import setupLocales from './setupLocales';

export default (store) => {
  setupLocales(store);
  setupPersistent(store);
};
