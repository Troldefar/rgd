import { man } from '../objects/man';

export function checkManPage (search, callback) {
  const rules = {
    text: '',
    data: []
  };
  if(search === 'man') {
    rules.text = 'intro';
    rules.data = [man]
    return callback(rules);
  } else if(search === 'clear') {
    rules.text = 'clear';
    return callback(rules);
  } else {
    rules.text = 'Not valid';
    return callback(rules);
  }
}