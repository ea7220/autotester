import { test } from "node:test";
import assert from "node:assert";

import {
  validateEmail,
  validatePassword,
  validateAge
} from "./validation.js";


test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});
  
test("validateEmail hylkää sähköpostin ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});

test("validatePassword hylkää liian lyhyt salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  const result = validatePassword("salasana");

  assert.strictEqual(result, true);
});

test("validateAge hyväksyy ikä 18", () => {
  const result = validateAge(18);

  assert.strictEqual(result, true);
});

test("validateAge hylkää ikä 15", () => {
  const result = validateAge(15);

  assert.strictEqual(result, false);
});

