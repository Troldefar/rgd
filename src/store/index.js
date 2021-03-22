import { createStore, createLogger } from 'vuex';
import componentState from './modules/componentState';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    componentState
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
