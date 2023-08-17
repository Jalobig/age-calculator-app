# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Desktop design](src/desktop-design.jpg)
![Desktop design](src/mobile-design.jpg)

### Links

- Live Site URL: [Live site here](https://Jalobig.github.io/age-calculator-app/)

## My process

### Built with

- Sass custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a lot with this project. especially that the best way to calculate between two date in JavaScript is to convert your dates in timestamp. then all you have to do is calculate the difference and substract the default date. 

```js
function calcDate(date1, date2){
  // Transform the 2 dates to obtain the timestamps
  const date1_time_stamp = date1?.getTime();
  const date2_time_stamp = date2.getTime();
  // Calculate the difference
  const calc = new Date(date2_time_stamp - date1_time_stamp);
  // Retrieve the date, month and year
  const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
  // Convert to an array and store
  const calcFormat = calcFormatTmp.split("-");
  // Subtract each member of our array from the default date
  const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]) - 1);
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);
  return [days_passed, months_passed+1, years_passed]
}
```

### Useful resources

<!-- - [Use animate number package](https://www.npmjs.com/package/use-animate-number) - This package is great to animate your number. -->
- [Calculate the Difference Between Two Dates in JavaScript](https://blog.bitsrc.io/calculate-the-difference-between-two-2-dates-e1d76737c05a) - This article is really great to help you build a function that will calculate the difference between the birthday and now.

## Author

- Frontend Mentor - [@Jalobig](https://www.frontendmentor.io/profile/Jalobig)
- Github - [@Jalobig](https://www.github.com/Jalobig)
