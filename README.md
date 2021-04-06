# FikaSearch Exercise

A small basic React Native app using [Expo](https://expo.io/) to list movies for the [Fika Frontend Exercise](https://github.com/fika-community/fika-frontend-exercise).

## Demo

### View on Android

- Download the Expo Go [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) app
- Visit https://expo.io/@stevgouws/projects/fika-search
- Open the Expo Go app and scan the QR code

> For iOS and browser preview you'll need to have an Expo account and let me add the email address with viewer permission to the project.

### View on iOS

- Download the Expo Go [iOS](https://itunes.apple.com/app/apple-store/id982107779) app and sign in
- Open the app in Expo Go with [this link](https://expo.io/--/to-exp/exp%3A%2F%2Fexp.host%2F%40stevgouws%2Ffika-search) on your phone

### View in Browser

- Visit https://expo.io/@stevgouws/projects/fika-search

- Click *"Open project in the browser"* (you might have to wait in a queue)
- Sign in to your Expo account

## Dev

> To run this project locally you will need to sign up and install [Expo](https://expo.io/)

### Install dependencies

```bash
yarn install
```

### Start Dev

```bash
expo start
```

You can then choose to preview on Web, iOS simulator or Android emulator

> For preview in iOS simulator Xcode is required

> For preview in Android emulator Android Studio is required

### Testing

```bash
yarn test
```

### Potential Improvements

- Fix act() warning from routing test
- Load more results via infinite scroll
- Extract & style Loader component
- Move Search functionality to header and search results to overlay/modal
- Run tests in CI
- Achieve consistency with inline styles vs. stylesheets
- Find way to safely override custom UI component styles from higher level
