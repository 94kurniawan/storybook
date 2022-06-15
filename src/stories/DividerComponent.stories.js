import DividerComponent from './DividerComponent.vue';

export default {
  title: 'Divider Component',
  component: DividerComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

// const Template = () => ({
//   components: { DividerComponent },
//   template: '<divider-component />',
// });
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DividerComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<divider-component v-bind="args" />',
});
export const Divider = Template.bind({});
