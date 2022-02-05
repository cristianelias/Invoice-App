
# Frontend Mentor - Invoice app solution

🐡 **This is not finished, it's under heavy development so you might notice that it does not work as expected yet.** 🐡

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- [Live Site URL @ Vercel](https://invoice-app-thiscris.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React.js](https://reactjs.org/) - Built using function components + hooks.
- [React.js Router v6](https://reactrouter.com/)
- [Formik](https://formik.org/)
- [~~Parcel 2~~](https://parceljs.org/) - I've decided to switch to Webpack 5
- [Webpack 5](https://webpack.js.org/)
- [esbuild-loader](https://github.com/privatenumber/esbuild-loader)
- ~~LocalStorage~~ - I replaced it with Firestore, but I also kept the LocalStorage client- [Firebase with Firestore Real Time DB](https://firebase.google.com/docs/firestore)
- [firebase-react-hooks](https://www.npmjs.com/package/react-firebase-hooks) - It provides some useful React Hooks which come in handy

### Useful resources

- [React.js docs](https://reactjs.org/docs/getting-started.html)
- [React.js Router DOM v6 docs](https://reactrouter.com/docs/en/v6)
- [Formik docs](https://formik.org/docs/overview)
- [FrontendMasters](https://frontendmasters.com/) - Priceless content coming straight from industry leading experts
- [A Formik POC live at Vercel](https://formik-poc-six.vercel.app/) - The form in this application is considerably big and it has to be able to add / remove groups of fields without losing the ability to validate them. I decided to use Formik and created this POC in order to learn how to use it properly. After adding a few features I had the knowledge needed to tackle bigger forms. This is the repo: [cristianelias/formik-poc](https://github.com/cristianelias/formik-poc)

## Author

- [Cristian Elias](https://www.linkedin.com/in/cristianelias/)
