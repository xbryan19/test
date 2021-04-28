// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

// Components
import Login from '../../src/views/Login'

// Utilities
import {
    mount,
    createLocalVue
} from '@vue/test-utils';

// Import Jest Dom test utils.
import '@testing-library/jest-dom';

const localVue = createLocalVue();

Vue.use(Vuetify);

describe('Login', () => {

    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it("Testing Login Component", () => {
        const wrapper = mount(Login, {
            localVue,
            vuetify,
        });

        expect(wrapper).toBeTruthy()
    });

    it("Testing button", () => {
        const wrapper = mount(Login, {
          localVue, vuetify
        });
        const event = jest.fn();
        const button = wrapper.find(".v-btn");
        expect(button.text()).toContain("Counter")
        const title = wrapper.find(".marked");
    
        expect(title.text()).toContain("Clicks: 0");
        button.vm.$on("click", event);
        expect(event).toHaveBeenCalledTimes(0); 
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(1); 
      })


    // describe('When Login is mounted', () => {
    //     it('Then the default value for errorEncountered should be false', () => {
    //         expect(wrapper.vm.errorEncountered).toBe(false);
    //     });

    //     it('Then the default state for the error alert should be hidden', async () => {
    //         const errorAlert = wrapper.find('#errorAlert');
    //         expect(errorAlert.exists()).toBe(false);
    //     });

    //     describe('When an error is encountered', () => {
    //         it('Then errorEncountered should be set to true', async () => {
    //             const showErrorButton = wrapper.find('#showErrorButton');
    //             showErrorButton.trigger('click');
    //             await Vue.nextTick((e)=>{
    //                 // return expect(e.errorEncountered).toBe(true)
    //                 // console.log(e)
    //             });

    //         });

    //         // it('Then error alert should be visible', async () => {
    //         //     const showErrorButton = wrapper.find('#showErrorButton');
    //         //     showErrorButton.trigger('click');
    //         //     await Vue.nextTick();
    //         //     const errorAlert = wrapper.find('#errorAlert');
    //         //     expect(errorAlert).toMatchObject({errorEncountered: true});
    //         // });
    //     });
    // });

})