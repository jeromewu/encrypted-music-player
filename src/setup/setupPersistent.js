import { saveState } from 'utils/persistState';

export default (store) => {
  store.subscribe(() => {
    const { intl: { locale }, config } = store.getState();
    saveState({
      intl: { locale },
      config,
    });
  });
};
