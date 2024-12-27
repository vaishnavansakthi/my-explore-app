import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // Define your custom namespace and key structure
    defaultNS: 'translation'; // Default namespace
    resources: {
      translation: {
        Counter: string;
        increment: string;
        decrement: string;
      };
    };
  }
}
