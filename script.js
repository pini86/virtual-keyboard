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
    this.language.textContent ='To switch ENGLISH / RUSSIAN language , press `Alt` + `Shift` on Windows/Linux.';

    this.keyboard.appendChild(keyPart);
    this.showLanguage(this.lang);

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.description);
    this.wrapper.appendChild(this.language);
    document.body.appendChild(this.wrapper);

    this.addListener();
  }

  addListener() {
    this.text.addEventListener('blur', () => {
      setTimeout(() => {
        this.text.focus();
      }, 0);
    });

    document.addEventListener('keydown', (item) => {
        item.stopImmediatePropagation();

      const key = document.getElementById(item.code);
      if (!key) {
        item.preventDefault();
        return;
      }

      if (item.code === 'CapsLock' && !item.repeat) {
        item.preventDefault();
        this.caps = !this.caps;
        const addRemove = this.caps ? 'add' : 'remove';
        key.classList[addRemove]('active');
        this.switchCaps(item.shiftKey);
      } else {
        key.classList.add('active');
        if ((item.shiftKey || item.metaKey) && item.altKey && !item.repeat) {
            item.preventDefault();
            this.lang = this.lang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('lang', this.lang);
            this.showLanguage(this.lang, item.shiftKey);
        } else if (!keys[item.code].func) {
            item.preventDefault();
            this.insertText(key.textContent);
        } else if (item.code === 'ArrowUp' && !item.isTrusted) {
            this.arrowUp();
        } else if (item.code === 'ArrowDown' && !item.isTrusted) {
            this.arrowDown();
        } else if (item.code === 'ArrowLeft' && !item.isTrusted) {
            this.arrowLeft();
        } else if (item.code === 'ArrowRight' && !item.isTrusted) {
            this.arrowRight();
        }else if (item.key === 'Shift' && !item.repeat) {
            item.preventDefault();
            this.switchCaps(item.shiftKey);
        } else if (item.code === 'Tab') {
            item.preventDefault();
            this.insertText('\t');
        } else if (item.code === 'Enter') {
            item.preventDefault();
            this.insertText('\n');
        } else if (item.code === 'Backspace') {
            item.preventDefault();
            this.pressBackspace();
        } else if (item.code === 'Delete') {
            item.preventDefault();
            this.pressDelete();
        } 
      }
    });

   