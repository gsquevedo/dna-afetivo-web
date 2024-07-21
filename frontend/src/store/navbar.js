// /src/store/navbar.js
import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    showNavbar: true,
  }),
  actions: {
    hideNavbar() {
      this.showNavbar = false;
    },
    showNavbar() {
      this.showNavbar = true;
    },
  },
});
