#!/usr/bin/env node

import { questionName, questionParity } from '../src/even.js';

console.log('Welcome to the Brain Games!');

let userName = questionName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

questionParity(userName);
