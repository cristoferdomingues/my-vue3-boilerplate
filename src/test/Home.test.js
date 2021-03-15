import { mount } from '@vue/test-utils';
import store from '../store';
import router from '../router';
import { Home } from '../modules/home';

test('renders a Home', async () => {
  router.push('/');
  await router.isReady();
  const wrapper = mount(Home, {
    global: {
      plugins: [store, router],
    },
  });

  expect(wrapper.html()).toContain('Home');
});
