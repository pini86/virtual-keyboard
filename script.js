const keys = {};
const keyPart = document.createDocumentFragment();
const keyLayout = [
    [{
        code: 'Backquote',
        func: false,
        lang: { en: '`', ru: 'ё' },
        width: 'regular',
      },
      {
        code: 'Digit1',
        func: false,
        lang: { en: '1', ru: '1' },
        width: 'regular',
      },
      {
        code: 'Digit2',
        func: false,
        lang: { en: '2', ru: '2' },
        width: 'regular',
      },
      {
        code: 'Digit3',
        func: false,
        lang: { en: '3', ru: '3' },
        width: 'regular',
      },
      {
        code: 'Digit4',
        func: false,
        lang: { en: '4', ru: '4' },
        width: 'regular',
      },
      {
        code: 'Digit5',
        func: false,
        lang: { en: '5', ru: '5' },
        width: 'regular',
      },
      {
        code: 'Digit6',
        func: false,
        lang: { en: '6', ru: '6' },
        width: 'regular',
      },
      {
        code: 'Digit7',
        func: false,
        lang: { en: '7', ru: '7' },
        width: 'regular',
      },
      {
        code: 'Digit8',
        func: false,
        lang: { en: '8', ru: '8' },
        width: 'regular',
      },
      {
        code: 'Digit9',
        func: false,
        lang: { en: '9', ru: '9' },
        width: 'regular',
      },
      {
        code: 'Digit0',
        func: false,
        lang: { en: '0', ru: '0' },
        width: 'regular',
      },
      {
        code: 'Minus',
        func: false,
        lang: { en: '-', ru: '-' },
        width: 'regular',
      },
      {
        code: 'Equal',
        func: false,
        lang: { en: '=', ru: '=' },
        width: 'regular',
      },
      {
        code: 'Backspace',
        func: true,
        lang: { en: '⌫ Back', ru: '⌫ Back' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'Tab',
        func: true,
        lang: { en: '↹ Tab', ru: '↹ Tab' },
        width: 'Big',
      },
      {
        code: 'KeyQ',
        func: false,
        lang: { en: 'q', ru: 'й' },
        width: 'regular',
      },
      {
        code: 'KeyW',
        func: false,
        lang: { en: 'w', ru: 'ц' },
        width: 'regular',
      },
      {
        code: 'KeyE',
        func: false,
        lang: { en: 'e', ru: 'у' },
        width: 'regular',
      },
      {
        code: 'KeyR',
        func: false,
        lang: { en: 'r', ru: 'к' },
        width: 'regular',
      },
      {
        code: 'KeyT',
        func: false,
        lang: { en: 't', ru: 'е' },
        width: 'regular',
      },
      {
        code: 'KeyY',
        func: false,
        lang: { en: 'y', ru: 'н' },
        width: 'regular',
      },
      {
        code: 'KeyU',
        func: false,
        lang: { en: 'u', ru: 'г' },
        width: 'regular',
      },
      {
        code: 'KeyI',
        func: false,
        lang: { en: 'i', ru: 'ш' },
        width: 'regular',
      },
      {
        code: 'KeyO',
        func: false,
        lang: { en: 'o', ru: 'щ' },
        width: 'regular',
      },
      {
        code: 'KeyP',
        func: false,
        lang: { en: 'p', ru: 'з' },
        width: 'regular',
      },
      {
        code: 'BracketLeft',
        func: false,
        lang: { en: '[', ru: 'х' },
        width: 'regular',
      },
      {
        code: 'BracketRight',
        func: false,
        lang: { en: ']', ru: 'ъ' },
        width: 'regular',
      },
      {
        code: 'Backslash',
        func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'regular',
      },
      {
        code: 'Delete',
        func: true,
        lang: { en: 'Del', ru: 'Del' },
        width: 'regular',
      },
    ],
    [
      {
        code: 'CapsLock',
        func: true,
        lang: { en: 'Caps Lock', ru: 'Caps Lock' },
        width: 'Bigger',
      },
      {
        code: 'KeyA',
        func: false,
        lang: { en: 'a', ru: 'ф' },
        width: 'regular',
      },
      {
        code: 'KeyS',
        func: false,
        lang: { en: 's', ru: 'ы' },
        width: 'regular',
      },
      {
        code: 'KeyD',
        func: false,
        lang: { en: 'd', ru: 'в' },
        width: 'regular',
      },
      {
        code: 'KeyF',
        func: false,
        lang: { en: 'f', ru: 'а' },
        width: 'regular',
      },
      {
        code: 'KeyG',
        func: false,
        lang: { en: 'g', ru: 'п' },
        width: 'regular',
      },
      {
        code: 'KeyH',
        func: false,
        lang: { en: 'h', ru: 'р' },
        width: 'regular',
      },
      {
        code: 'KeyJ',
        func: false,
        lang: { en: 'j', ru: 'о' },
        width: 'regular',
      },
      {
        code: 'KeyK',
        func: false,
        lang: { en: 'k', ru: 'л' },
        width: 'regular',
      },
      {
        code: 'KeyL',
        func: false,
        lang: { en: 'l', ru: 'д' },
        width: 'regular',
      },
      {
        code: 'Semicolon',
        func: false,
        lang: { en: ';', ru: 'ж' },
        width: 'regular',
      },
      {
        code: 'Quote',
        func: false,
        lang: { en: "'", ru: 'э' },
        width: 'regular',
      },
      {
        code: 'Enter',
        func: true,
        lang: { en: '↩ Enter', ru: '↩ Enter' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'ShiftLeft',
        func: true,
        lang: { en: '⇧ Shift', ru: '⇧ Shift' },
        width: 'Bigger',
      },
      {
        code: 'IntlBackslash',
        func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'regular',
      },
      {
        code: 'KeyZ',
        func: false,
        lang: { en: 'z', ru: 'я' },
        width: 'regular',
      },
      {
        code: 'KeyX',
        func: false,
        lang: { en: 'x', ru: 'ч' },
        width: 'regular',
      },
      {
        code: 'KeyC',
        func: false,
        lang: { en: 'c', ru: 'с' },
        width: 'regular',
      },
      {
        code: 'KeyV',
        func: false,
        lang: { en: 'v', ru: 'м' },
        width: 'regular',
      },
      {
        code: 'KeyB',
        func: false,
        lang: { en: 'b', ru: 'и' },
        width: 'regular',
      },
      {
        code: 'KeyN',
        func: false,
        lang: { en: 'n', ru: 'т' },
        width: 'regular',
      },
      {
        code: 'KeyM',
        func: false,
        lang: { en: 'm', ru: 'ь' },
        width: 'regular',
      },
      {
        code: 'Comma',
        func: false,
        lang: { en: ',', ru: 'б' },
        width: 'regular',
      },
      {
        code: 'Period',
        func: false,
        lang: { en: '.', ru: 'ю' },
        width: 'regular',
      },
      {
        code: 'Slash',
        func: false,
        lang: { en: '/', ru: '.' },
        width: 'regular',
      },
      {
        code: 'ArrowUp',
        func: true,
        lang: { en: '⯅', ru: '⯅' },
        width: 'regular',
      },
      {
        code: 'ShiftRight',
        func: true,
        lang: { en: '⇧ Shift', ru: '⇧ Shift' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'ControlLeft',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'Big',
      },
      {
        code: 'MetaLeft',
        func: true,
        lang: { en: 'Win', ru: 'Win' },
        width: 'regular',
      },
      {
        code: 'AltLeft',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'regular',
      },
      {
        code: 'Space',
        func: false,
        lang: { en: ' ', ru: ' ' },
        width: 'Space',
      },
      {
        code: 'AltRight',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'regular',
      },
      {
        code: 'ControlRight',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'Big',
      },
      {
        code: 'ArrowLeft',
        func: true,
        lang: { en: '⯇', ru: '⯇' },
        width: 'regular',
      },
      {
        code: 'ArrowDown',
        func: true,
        lang: { en: '⯆', ru: '⯆' },
        width: 'regular',
      },
      {
        code: 'ArrowRight',
        func: true,
        lang: { en: '⯈', ru: '⯈' },
        width: 'regular',
      },
    ],
  ];

keyLayout.forEach( ( item ) => {
  const row = document.createElement('div');
  row.classList.add('row');
  item.forEach( ( key ) => {
    keys[key.code] = key.lang;
    keys[key.code].func = key.func;
    const currentKey = document.createElement('button');
    currentKey.setAttribute('type', 'button');
    currentKey.setAttribute('id', key.code);
    currentKey.textContent = key.lang.en;
    currentKey.classList.add('key');
    currentKey.classList.add(`key${key.width}`);
    row.appendChild(currentKey);
   } 
  );
  keyPart.appendChild(row);
 }
);

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
    this.warning = document.createElement('p');
    this.title.classList.add('title');
    this.title.textContent = '* RSS Virtual keyboard *';
    this.text.classList.add('text');
    this.text.autofocus = true;
    this.keyboard.classList.add('keyboard');
    const row = document.createElement('div');
    row.classList.add('row');
    this.description.classList.add('info');
    this.description.textContent ='This keyboard task was writen in Visual Studio Code v.1.67.0 and tested in Microsoft Windows 10 64 bit.';
    this.language.classList.add('info');
    this.language.textContent =`To switch ENGLISH / RUSSIAN language , press 'Alt' + 'Shift' on Windows/Linux.`;
    this.warning.classList.add('info');
    this.warning.textContent =`WARNING : in Russian language keyboard key 'rightAlt' equal 'leftCtrl'+'rightAlt'. This is not mistake, but famouse bag of Windows 7 and later.`;
    this.keyboard.appendChild(keyPart);
    this.showLanguage(this.lang, false);
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.description);
    this.wrapper.appendChild(this.language);
    this.wrapper.appendChild(this.warning);
    document.body.appendChild(this.wrapper);
    this.addListener();
  }

  addListener() {
      document.addEventListener('keydown', (item) => {
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

    this.keyboard.addEventListener('mousedown', (item) => {
      if (item.target.id.includes("Shift")){
        item.preventDefault();
        this.switchCaps(true);
      }
      this.text.focus();
      const eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: item.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyDown);
    });

    this.keyboard.addEventListener('mouseup', (item) => {
      if (item.target.id.includes("Shift")){
        item.preventDefault();
        this.switchCaps(false);
      }
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
    let begin = this.text.value.slice(0, this.text.selectionStart);
    let arrRows = [];
    arrRows = begin.split(`\n`);
    if (arrRows.length == 1) {
      this.text.selectionStart = 0;
      this.text.selectionEnd = this.text.selectionStart;
      return;
    }
    let currentPos = arrRows[arrRows.length-1].length;
    if (currentPos >= arrRows[arrRows.length-2].length){
      this.text.selectionStart = this.text.selectionStart - currentPos -1
    } else {
      this.text.selectionStart = this.text.selectionStart - arrRows[arrRows.length-2].length - 1 ; 
    }
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowDown() {
    let begin = this.text.value.slice(0, this.text.selectionStart);
    let arrRows = [];
    arrRows = begin.split(`\n`);
    let currentRowStart = arrRows.pop();
    let end = this.text.value.slice(this.text.selectionStart);
    let arrRowsEnd = [];
    arrRowsEnd = end.split(`\n`);
    let currentRowEnd = arrRowsEnd[0];
    if (arrRowsEnd.length == 1) {
      this.text.selectionStart = this.text.value.length;
      return;
    }
    if (currentRowStart.length >= arrRowsEnd[1].length){
      this.text.selectionStart = this.text.selectionStart + currentRowEnd.length + arrRowsEnd[1].length + 1;
    } else{
      this.text.selectionStart = this.text.selectionStart + currentRowStart.length + currentRowEnd.length + 1;
    }
    this.text.selectionEnd = this.text.selectionStart;
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
        const temp = item;
        temp.textContent = keys[temp.id][lang];
      },
    );
    this.switchCaps(shift);
  }

  switchCaps(shiftKey) {
    const showUpperCase = (this.caps && !shiftKey) || (!this.caps && shiftKey);
    const toCase = showUpperCase ? 'toUpperCase' : 'toLowerCase';
    const shiftableKeys = ['Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0',
    'Minus','Equal','Backslash','Slash','Backquote','BracketLeft','BracketRight','Semicolon','Quote','Comma','Period'];
    const engNonShift =['1','2','3','4','5','6','7','8','9','0','-','=','\\','/','`','[',']',';',"'",',','.'];
    const engShift = ['!','@','#','$','%','^','&','*','(',')','_','+','|','?','~','{','}',':','"','<','>'];
    const rusNonShift = ['1','2','3','4','5','6','7','8','9','0','-','=','\\','.','ё','х','ъ','ж',"э",'б','ю'];
    const rusShift = ['!','"','№',';','%',':','?','*','(',')','_','+','/',',','Ё','Х','Ъ','Ж',"Э",'Б','Ю'];
   
    Array.from(this.keyboard.querySelectorAll('.key')).forEach(
        (item) => {
        const temp = item;
        if (!keys[temp.id].func) {
          let numberShiftKey = shiftableKeys.indexOf(temp.id);
          if ( numberShiftKey != -1 ){
            if (this.lang == 'en'){
              temp.textContent = shiftKey ? engShift[numberShiftKey] : engNonShift[numberShiftKey]
            } else if( numberShiftKey <14 ) {
              temp.textContent = shiftKey ? rusShift[numberShiftKey] : rusNonShift[numberShiftKey]
            } else {
              temp.textContent = temp.textContent[toCase]();
            }
          } else {
            temp.textContent = temp.textContent[toCase]();
            }
        }
      });
  }
}

window.addEventListener('DOMContentLoaded', () => {
    const myKeyboard = new Keyboard();
    myKeyboard.start();
  }
);