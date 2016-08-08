import test = require('blue-tape');
import filterObject = require('filter-object');

test('filter-object exists', (t) => {
  t.plan(1);
  t.notEqual(filterObject, undefined);
});
