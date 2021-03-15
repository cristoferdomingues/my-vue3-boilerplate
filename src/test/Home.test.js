import { mount, flushPromises } from '@vue/test-utils';
import store from '../store';
import router from '../router';
import { Home } from '../modules/home';
import { nextTick } from '@vue/runtime-core';
import { storeKey } from 'vuex';

test('renders a Home', async () => {
  router.push('/');
  await router.isReady();
  const wrapper = mount(Home, {
    global: {
      plugins: [store, router],
    },
  });

  expect(wrapper.html()).toContain('Home');
  expect(wrapper.html()).toContain('Page 1 Content');
  store.dispatch('home/setTitle', 'Altered Home Title');
  await nextTick();
  expect(wrapper.html()).toContain('Altered Home Title');
});

test('renders a home page 2', async () => {
  router.push('/home/page2');
  await router.isReady();
  const wrapper = mount(Home, {
    global: {
      plugins: [store, router],
    },
  });
  await flushPromises();
  expect(wrapper.html()).toContain('Page 2 Content');
});
