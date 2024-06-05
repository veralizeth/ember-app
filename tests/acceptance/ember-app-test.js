import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-quickstart/tests/helpers';


// This is a framework Qunit.
module('Acceptance | ember app', function (hooks) {
  setupApplicationTest(hooks);

  // This async because the page is going to take some time to reload.
  test('visiting /', async function (assert) {
    // Almost always use await and visit as a pair.
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    // Using here classes to asset the behaviour
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals!');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');

  });

  test('visiting /getting-in-touch', async function(assert){
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch'); 
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');

  }); 

});
