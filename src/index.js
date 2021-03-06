/* Automatically generated by './build/bin/build-entry.js' */

import Alert from '../packages/alert/index.js';
import Icon from '../packages/icon/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import locale from 'gemini-ui/src/locale';
import CollapseTransition from 'gemini-ui/src/transitions/collapse-transition';

const components = [
  Alert,
  Icon,
  Scrollbar,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(Loading.directive);

  Vue.prototype.$GEMINI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.1',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  // Loading,
  Alert,
  Icon,
  Scrollbar
};

module.exports.default = module.exports;
