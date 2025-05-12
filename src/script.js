"use strict";

/**
 *
 * @param {number} fatherOld
 * @param {number} sonOld
 * @returns {string} - message with difference
 */

function getYears(fatherOld, sonOld) {
  if (fatherOld < 15 || sonOld < 0) {
    return "Введені некоректні дані";
  } else if (fatherOld - sonOld >= 15) {
    const difference = fatherOld - sonOld * 2;
    if (difference === 0) {
      return "Батько зараз старший за сина вдвічі";
    } else if (difference < 0) {
      return `Батько був вдвічі старший за сина ${Math.abs(difference)} роки(-ів) тому`;
    } else {
      return `Батько буде вдвічі старшим за сина через ${difference} роки(-ів) `;
    }
  } else {
    return `Різниця у віці не може бути менше 15 років`;
  }
}
console.log(getYears(70, 52));
console.log(getYears(30, 12));
console.log(getYears(50, 25));
console.log(getYears(20, 10));
console.log(getYears(15, -5));
console.log(getYears(98, 15));
