# Moviez App
>This app was developed using React Native with Expo/Typescript and designed in Figma.

## Overview
The main feature of Moviez App is to query movies and TV shows directly from the excellent API *The Movie Database API* https://developers.themoviedb.org/

## Screenshots

<table>
  <tr>
    <td><img src="https://i.ibb.co/kynzMGx/Screenshot-20200508-195512-2.png" /></td>
    <td><img src="https://i.ibb.co/FxHsrnh/Screenshot-20200508-195319-2.png" /></td>
    <td><img src="https://i.ibb.co/Lts1QqV/Screenshot-20200508-195549.png" /></td>
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/sQrKWkD/Screenshot-20200508-195603-2.png" /></td>
    <td><img src="https://i.ibb.co/SnwsqzZ/Screenshot-20200508-195615-2.png" /></td>
    <td><img src="https://i.ibb.co/gtDDF5G/Screenshot-20200508-195628-2.png" /></td>
  </tr>
</table>

## Instalation

1. First install the expo CLI globally
```bash
npm install expo-cli --global
```

2. Install the dependencies
```bash
yarn
```
or
```bash
npm install
```
3. Install the expo client in your smartphone https://expo.io/tools#client

4. Open the expo client in your smartphone and run in your terminal:
```bash
expo start
```

*In order to use the Movies API, you need to create an token. Access the link to understand how to generate this token. https://developers.themoviedb.org/3/getting-started/authentication*

After this, update the file *src/res/config.tsx* with the new token.

## Features
- Search for a movie or a tv show
- Show informations about specific categories of films, like: Upcoming and Popular
- Show informations about specific categories of tv shows, like: Popular and Top Rated

## Roadmap
- Implement feature of similar movies query
- Implement feature of similar films query
- Fix some incomplete types and interfaces (typescript)
- Fix some performance flatlist issues
