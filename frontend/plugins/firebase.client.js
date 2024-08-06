import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default defineNuxtPlugin(nuxtApp => {
  try {
    const runtimeConfig = useRuntimeConfig();

    const firebaseConfig = {
      apiKey: runtimeConfig.public.nuxtPublicApiKey,
      authDomain: runtimeConfig.public.nuxtPublicAuthDomain,
      projectId: runtimeConfig.public.nuxtPublicProjectId,
      storageBucket: runtimeConfig.public.nuxtPublicStorageBucket,
      messagingSenderId: runtimeConfig.public.nuxtPublicMessagingSenderId,
      appId: runtimeConfig.public.nuxtPublicAppId,
      measurementId: runtimeConfig.public.nuxtPublicMeasurementId
    };

    console.log(firebaseConfig)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    nuxtApp.provide('auth', auth);
    nuxtApp.provide('signInWithEmailAndPassword', signInWithEmailAndPassword);
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
});
