# About

This app is to help people memorize Al-Qur'an.

![ezgif-7-a08495349c35](https://user-images.githubusercontent.com/2413398/103280906-19511180-4a04-11eb-8cab-3cb216d2a056.gif)

# How to run

## Android development mode

```sh
yarn android
```

## Android release mode

Follow the steps here https://reactnative.dev/docs/signed-apk-android

# Issues

## Images not loaded in iOS development

Solution: https://github.com/facebook/react-native/issues/29279#issuecomment-658244428

# How to contribute

1. Take this PR draft as example https://github.com/rizkisunaryo/seru-menghapal-quran/pull/1
2. Choose a surah that we want to add the ayah data. Example: `النبأ`
3. Open `./src/data/index.tsx`, and copy the filename. Example: `078_an_naba`
4. Create a branch, and use that filename as the branch name.
5. We need to input data, in that file (`078_an_naba.tsx`), inside the `verses` field, with this structure:

```ts
[key: number]: {
      helper: string;
      full: string;
    }
```

Example:

```js
1: {
      helper: 'عَمَّ',
      full: 'عَمَّ يَتَسَاۤءَلُوْنَۚ',
    }
```

6. Commit the branch, and push it.
7. Create PR draft from that branch, with the filename as the title.
8. Continue until we complete the ayah data.
9. Click `Ready for review` on our PR draft, when we have completed the ayah data.

## How to input `full`

1. Open https://litequran.net/, and select the surah.
2. Copy and paste the full ayah to `full` field

## How to input `helper`

1. Download this app https://play.google.com/store/apps/details?id=com.quantumakhyar.attaisir
2. Click `MURAJA'AH`
3. Click the surah. Example: `AN-NABA'`
4. Choose the ayah, and memorize it.
5. Open https://litequran.net/, and select the surah.
6. Copy what's in `At-Taisir Digital` from `Litequran.net`, to `helper` field.
