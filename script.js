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
    this.description.textContent ='This keyboard task was writen in Visual Studio Code v.1.66.2 and tested in Microsoft Windows 10 64 bit.';
    this.language.classList.add('info');
    this.language.textContent ='To switch ENGLISH / RUSSIAN language , press `Alt` + `Shift` on Windows/Linux.';

    this.keyboard.appendChild(keyPart);
    this.showLanguage(this.lang, false);

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.description);
    this.wrapper.appendChild(this.language);
    document.body.appendChild(this.wrapper);

    this.addListener();
  }

  addListener() {
   /* this.text.addEventListener('blur', () => {
      setTimeout(() => {
        this.text.focus();
      }, 0);
    });*/

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
            this.insert(key.textContent);
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
            this.insert('\t');
        } else if (item.code === 'Enter') {
            item.preventDefault();
            this.insert('\n');
        } else if (item.code === 'Backspace') {
            item.preventDefault();
            this.backspace();
        } else if (item.code === 'Delete') {
            item.preventDefault();
            this.del();
        } 
      }
    });

    document.addEventListener('keyup', (item) => {
      item.stopImmediatePropagation();
      const key = document.getElementById(item.code);
      if (!key) {
        item.preventDefault();
        return;
      }
      if (item.code !== 'CapsLock') {
        key.classList.remove('active');
        if (item.key === 'Shift') {
            item.preventDefault();
          this.switchCaps(item.shiftKey);
        }
      }
    });

    this.keyboard.addEventListener('click', (item) => {
      this.text.focus();
      const eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: item.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyDown);

      this.text.focus();
      const eventKeyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        code: item.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyUp);
    });
  }

  arrowUp() {
    this.text.selectionStart = 0;
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowDown() {
    this.text.selectionEnd = this.text.textLength;
    this.text.selectionStart = this.text.selectionEnd;
  }

  arrowLeft() {
    this.text.selectionStart = Math.max(0, this.text.selectionStart - 1);
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowRight() {
    this.text.selectionStart = Math.min(
      this.text.textLength,
      this.text.selectionEnd + 1,
    );
    this.text.selectionEnd = this.text.selectionStart;
  }

  insert(chars) {
    const cursorAt = this.text.selectionStart;
    this.text.value = this.text.value.slice(0, cursorAt) + chars + this.text.value.slice(this.text.selectionEnd);
    this.text.selectionStart = cursorAt + chars.length;
    this.text.selectionEnd = this.text.selectionStart;
  }

  backspace() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insert('');
    } else {
      const cursorAt = Math.max(0, this.text.selectionStart - 1);
      this.text.value = this.text.value.slice(0, cursorAt) + this.text.value.slice(this.text.selectionEnd);
      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  del() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insert('');
    } else {
      const cursorAt = this.text.selectionStart;
      this.text.value = this.text.value.slice(0, cursorAt) + this.text.value.slice(cursorAt + 1);
      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  showLanguage(lang, shift) {
    Array.from(this.keyboard.querySelectorAll('.key')).forEach(
      (item) => {
        item.textContent = keys[item.id][lang];
      },
    );
    this.switchCaps(shift);
  }

  switchCaps(shiftKey) {
    const showUpperCase = (this.caps && !shiftKey) || (!this.caps && shiftKey);
    const toCase = showUpperCase ? 'toUpperCase' : 'toLowerCase';
    Array.from(this.keyboard.querySelectorAll('.key')).forEach(
      (item) => {
        if (!keys[item.id].func) {
          if (item.id === 'Backquote' && this.lang === 'en') {
            item.textContent = shiftKey ? '~' : '`';
          } else if (item.id === 'Minus' && this.lang === 'en') {
            item.textContent = shiftKey ? '_' : '-';
          } else if (item.id === 'Equal' && this.lang === 'en') {
            item.textContent = shiftKey ? '+' : '=';
          } else if (item.id === 'BracketLeft' && this.lang === 'en') {
            item.textContent = shiftKey ? '{' : '[';
          } else if (item.id === 'BracketRight' && this.lang === 'en') {
            item.textContent = shiftKey ? '}' : ']';
          } else if (item.id === 'Backslash' && this.lang === 'en') {
            item.textContent = shiftKey ? '|' : '\\';
          } else if (item.id === 'Semicolon' && this.lang === 'en') {
            item.textContent = shiftKey ? ':' : ';';
          } else if (item.id === 'Quote' && this.lang === 'en') {
            item.textContent = shiftKey ? '"' : "'";
          } else if (item.id === 'Comma' && this.lang === 'en') {
            item.textContent = shiftKey ? '<' : ',';
          } else if (item.id === 'Period' && this.lang === 'en') {
            item.textContent = shiftKey ? '>' : '.';
          } else if (item.id === 'Slash' && this.lang === 'en') {
            item.textContent = shiftKey ? '?' : '/';
          } else if (item.id === 'Slash' && this.lang === 'ru') {
            item.textContent = shiftKey ? ',' : '.';
          } else {
            item.textContent = item.textContent[toCase]();
          }
        }
      },
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
    const myKeyboard = new Keyboard();
    myKeyboard.start();
  }
);