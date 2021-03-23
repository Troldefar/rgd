import { man } from '../objects/man';

export function checkManPage (search, callback) {
  const rules = {
    text: '',
    data: []
  };
  switch (search) {
    case 'man':
      rules.text = 'intro';
      rules.data = [man]
      return callback(rules);
    case 'clear':
      rules.text = '';
      return callback(rules);
    case 'help':
      rules.text = 'Type man to get started';
      return callback(rules);
    default:
      rules.text = search + ' is not a valid command [Try help for more information]';
      return callback(rules);
  }
}