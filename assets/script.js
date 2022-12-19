var current = 0;

function typeWrite(id, text, speed, callback) {
  if (current < text.length) {
    document.getElementById(id).innerHTML += text.charAt(current);
    current++;
    setTimeout(()=> typeWrite(id, text, speed, callback), speed);
  } else {
    callback();
  }
}

typeWrite("name", "Adam Volkman", 175, () => {
    current = 0;
    typeWrite("nick", "maku", 100, () => {});
});
