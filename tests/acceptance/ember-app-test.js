import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-quickstart/tests/helpers';


// This is a framework Qunit.
module('Acceptance | ember app', function (hooks) {
  setupApplicationTest(hooks);

  // This async because the page is going to take some time to reload.
  test('visiting /', async function (assert) {
    // Almost always use await and visit as a pair.
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to super Rentals!');

    // Using here classes to asset the behaviour
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.buttonm');

    assert.strictEqual(currentURL(), '/about');
  });
});
