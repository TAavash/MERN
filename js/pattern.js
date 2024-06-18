/**
 * 1. Right-Angled Triangle:
 *
 **
 ***
 ****
 *****
 */
for (i = 1; i <= 5; i++) {
  let x = "";
  for (j = 0; j < i; j++) {
    x += "*";
  }
  console.log(x);
}
/**
 * 2. Solid Rectangle:
 *******
 *******
 *******
 *******
 *******
 */
for (i = 1; i <= 5; i++) {
  let x = "";
  for (j = 0; j < i; j++) {
    x = "******";
  }
  console.log(x);
}
/**
 * *****
 ****
 ***
 **
 *
 */
for (let i = 5; i > 0; i--) {
  let x = "";
  for (let j = 0; j < i; j++) {
    x += "*";
  }
  console.log(x);
}

for (let i = 1; i <= 5; i++) {
  let x = "";
  let spaces = 5 - i;

  for (let j = 0; j < spaces; j++) {
    x += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    x += "*";
  }

  console.log(x);
}
for (let i = 5; i >= 1; i--) {
  let x = "";
  let spaces = 5 - i;
  for (let j = 0; j < spaces; j++) {
    x += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    x += "*";
  }
  console.log(x);
}
let width = 7,
  height = 5;
for (let i = 0; i < height; i++) {
  let row = "";
  for (let j = 0; j < width; j++) {
    if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
let size = 5;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === Math.floor(size / 2) || j === Math.floor(size / 2)) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (j === i || j === size - i - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 5; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }
  console.log(row);
}
