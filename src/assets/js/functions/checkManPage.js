export function checkManPage (search, callback) {
  console.log(search);
  const ro = {};
  if(search.value === 'man') {
    ro.test = '123';
  } else if(search.value === 'clear') {
    ro.clear = '12d12d1';
  }
  return callback('123');
}