import { keyPart, keys } from './keyLayout.js';

class Keyboard {
  constructor() {
    this.caps = false;
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }

  start() {
    this.wrapper = document.createElement('main');
    this.wrapper.classList.add('wrapper');
    this.title = document.createElement('h1');
    this.text = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    this.description = document.createElement('p');
    this.language = document.createElement('p');
    this.title.classList.add('title');
    this.title.textContent = '* RSS Virtual keyboard *';
    this.text.classList.add('text');
    this.text.autofocus = true;
    this.keyboard.classList.add('keyboard');
    const row = document.createElement('div');
    row.classList.add('row');
    this.description.classList.add('info');
    this.description.textContent ='This keyboard task was writen in Visual Studio Code and tested in Microsoft Windows 10 64 bit.';
    this.language.classList.add('info');
    this.language.textContent ='To switch ENGLISH / RUSSIAN language , press `Alt` + `Shift` on Windows/Linux or Cmd+Alt on Mac (possible).';
