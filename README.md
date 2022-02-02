# Frontend Mentor - Invoice app solution

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
- [React.js Router v6](https://reactrouter.com/) - A routing library for React
- [Formik](https://formik.org/) - An open source form library for React
- [Parcel](https://parceljs.org/) - A really fast module bundler for Web Apps
- LocalStorage ( by now... )
- Firebase || ( Express.js API + MongoDB + Mongoose ) I am not sure yet, I might end up coding both solutions since I want to learn Firebase and I love Express + MongoDB

### Useful resources

- [React.js docs](https://reactjs.org/docs/getting-started.html) - Priceless content coming straight from industry leading experts
- [React.js Router DOM v6 docs](https://reactrouter.com/docs/en/v6)
- [Formik docs](https://formik.org/docs/overview)
- [FrontendMasters](https://frontendmasters.com/) - Priceless content coming straight from industry leading experts
- [A Formik POC](https://codesandbox.io/s/formik-nested-fields-tvo0t) - This form is considerably big and it has to be able to add and remove groups of fields without losing the ability of validating them. After analyzing it, I've concluded that in order to be maintainable I should use a tool that would help me handle these functionalities. So after considering a couple of options I chose Formik. I like to slice huge problems into smaller pieces, so that's why I've decided to play with Formik in a codesandbox. After adding a few features I had the knowledge needed to tackle bigger forms. Hope it helps you understand Formik better, feel free to reach me at LinkedIn if you need help with it.

## Author

- [Cristian Elias](https://www.linkedin.com/in/cristianelias/)
