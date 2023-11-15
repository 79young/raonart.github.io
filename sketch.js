let bg;
let bg2;
let boy;
let imageX;
let imageY;
let x;
let y;
let ww;
let wh;
let color1, color2, color3;

let space = 1.6;

let pointCount;
let freqX;
let freqY;
let phi;

let modFreqX;
let modFreqY;

let lineColor;
let lineWeight = 0.6;
let lissajousPoints = [];

let connectionRadius = 60;

let conRaCk = 0;
let connectionRamp;
let lastDrawn = 0;
let linesDrawn = 0;
const data = [
  {
    pointCount: 462,
    freqX: 18,
    freqY: 40,
    phi: 33,
    modFreqX: 2,
    modFreqY: 16,
    connectionRadius: 83,
  },
  {
    pointCount: 498,
    freqX: 7,
    freqY: 22,
    phi: 33,
    modFreqX: 15,
    modFreqY: 12,
    connectionRadius: 78,
  },
  {
    pointCount: 477,
    freqX: 7,
    freqY: 20,
    phi: 63,
    modFreqX: 20,
    modFreqY: 18,
    connectionRadius: 97,
  },
  {
    pointCount: 464,
    freqX: 31,
    freqY: 35,
    phi: 27,
    modFreqX: 9,
    modFreqY: 9,
    connectionRadius: 93,
  },
  {
    pointCount: 396,
    freqX: 4,
    freqY: 3,
    phi: 50,
    modFreqX: 16,
    modFreqY: 13,
    connectionRadius: 79,
  },
  {
    pointCount: 400,
    freqX: 4,
    freqY: 24,
    phi: 59,
    modFreqX: 12,
    modFreqY: 3,
    connectionRadius: 77,
  },
  {
    pointCount: 277,
    freqX: 8,
    freqY: 7,
    phi: 7,
    modFreqX: 5,
    modFreqY: 5,
    connectionRadius: 82,
  },
  {
    pointCount: 495,
    freqX: 39,
    freqY: 36,
    phi: 30,
    modFreqX: 9,
    modFreqY: 18,
    connectionRadius: 97,
  },
  {
    pointCount: 468,
    freqX: 6,
    freqY: 38,
    phi: 26,
    modFreqX: 12,
    modFreqY: 10,
    connectionRadius: 53,
  },

  {
    pointCount: 295,
    freqX: 14,
    freqY: 6,
    phi: 76,
    modFreqX: 18,
    modFreqY: 14,
    connectionRadius: 97,
  },
  {
    pointCount: 319,
    freqX: 38,
    freqY: 6,
    phi: 79,
    modFreqX: 2,
    modFreqY: 9,
    connectionRadius: 59,
  },
  {
    pointCount: 186,
    freqX: 11,
    freqY: 9,
    phi: 30,
    modFreqX: 20,
    modFreqY: 18,
    connectionRadius: 68,
  },
  {
    pointCount: 498,
    freqX: 16,
    freqY: 21,
    phi: 72,
    modFreqX: 14,
    modFreqY: 17,
    connectionRadius: 75,
  },
  {
    pointCount: 452,
    freqX: 9,
    freqY: 38,
    phi: 14,
    modFreqX: 3,
    modFreqY: 9,
    connectionRadius: 78,
  },
  {
    pointCount: 330,
    freqX: 11,
    freqY: 20,
    phi: 8,
    modFreqX: 13,
    modFreqY: 8,
    connectionRadius: 94,
  },
  {
    pointCount: 458,
    freqX: 17,
    freqY: 30,
    phi: 27,
    modFreqX: 17,
    modFreqY: 5,
    connectionRadius: 76,
  },
  {
    pointCount: 336,
    freqX: 14,
    freqY: 25,
    phi: 50,
    modFreqX: 18,
    modFreqY: 17,
    connectionRadius: 98,
  },
  {
    pointCount: 430,
    freqX: 8,
    freqY: 2,
    phi: 31,
    modFreqX: 6,
    modFreqY: 2,
    connectionRadius: 83,
  },
  {
    pointCount: 486,
    freqX: 22,
    freqY: 9,
    phi: 38,
    modFreqX: 18,
    modFreqY: 18,
    connectionRadius: 63,
  },
  {
    pointCount: 492,
    freqX: 7,
    freqY: 16,
    phi: 23,
    modFreqX: 7,
    modFreqY: 2,
    connectionRadius: 63,
  },
  {
    pointCount: 402,
    freqX: 9,
    freqY: 13,
    phi: 26,
    modFreqX: 9,
    modFreqY: 13,
    connectionRadius: 100,
  },
  {
    pointCount: 450,
    freqX: 34,
    freqY: 16,
    phi: 61,
    modFreqX: 10,
    modFreqY: 16,
    connectionRadius: 81,
  },
  {
    pointCount: 240,
    freqX: 7,
    freqY: 27,
    phi: 77,
    modFreqX: 14,
    modFreqY: 6,
    connectionRadius: 75,
  },
  {
    pointCount: 266,
    freqX: 25,
    freqY: 18,
    phi: 74,
    modFreqX: 8,
    modFreqY: 13,
    connectionRadius: 93,
  },
  {
    pointCount: 439,
    freqX: 22,
    freqY: 18,
    phi: 74,
    modFreqX: 2,
    modFreqY: 8,
    connectionRadius: 97,
  },
  {
    pointCount: 388,
    freqX: 9,
    freqY: 26,
    phi: 77,
    modFreqX: 11,
    modFreqY: 18,
    connectionRadius: 79,
  },
  {
    pointCount: 360,
    freqX: 20,
    freqY: 4,
    phi: 58,
    modFreqX: 10,
    modFreqY: 14,
    connectionRadius: 74,
  },
  {
    pointCount: 445,
    freqX: 27,
    freqY: 12,
    phi: 42,
    modFreqX: 12,
    modFreqY: 17,
    connectionRadius: 64,
  },
  {
    pointCount: 458,
    freqX: 18,
    freqY: 40,
    phi: 68,
    modFreqX: 12,
    modFreqY: 18,
    connectionRadius: 73,
  },
  {
    pointCount: 376,
    freqX: 36,
    freqY: 30,
    phi: 31,
    modFreqX: 5,
    modFreqY: 10,
    connectionRadius: 63,
  },
  {
    pointCount: 101,
    freqX: 40,
    freqY: 47,
    phi: 88,
    modFreqX: 26,
    modFreqY: 77,
    connectionRadius: 363,
  },
  {
    pointCount: 171,
    freqX: 45,
    freqY: 8,
    phi: 70,
    modFreqX: 81,
    modFreqY: 35,
    connectionRadius: 128,
  },
  {
    pointCount: 401,
    freqX: 7,
    freqY: 71,
    phi: 12,
    modFreqX: 79,
    modFreqY: 5,
    connectionRadius: 98,
  },
  {
    pointCount: 109,
    freqX: 84,
    freqY: 84,
    phi: 4,
    modFreqX: 25,
    modFreqY: 9,
    connectionRadius: 136,
  },
  {
    pointCount: 410,
    freqX: 82,
    freqY: 91,
    phi: 15,
    modFreqX: 58,
    modFreqY: 9,
    connectionRadius: 105,
  },
  {
    pointCount: 320,
    freqX: 96,
    freqY: 28,
    phi: 48,
    modFreqX: 7,
    modFreqY: 96,
    connectionRadius: 96,
  },
  {
    pointCount: 390,
    freqX: 75,
    freqY: 34,
    phi: 90,
    modFreqX: 37,
    modFreqY: 97,
    connectionRadius: 76,
  },
  {
    pointCount: 436,
    freqX: 94,
    freqY: 51,
    phi: 23,
    modFreqX: 74,
    modFreqY: 79,
    connectionRadius: 91,
  },
  {
    pointCount: 625,
    freqX: 97,
    freqY: 100,
    phi: 35,
    modFreqX: 6,
    modFreqY: 25,
    connectionRadius: 55,
  },
  {
    pointCount: 224,
    freqX: 94,
    freqY: 50,
    phi: 83,
    modFreqX: 54,
    modFreqY: 11,
    connectionRadius: 108,
  },
  {
    pointCount: 528,
    freqX: 34,
    freqY: 58,
    phi: 38,
    modFreqX: 68,
    modFreqY: 12,
    connectionRadius: 64,
  },
  {
    pointCount: 259,
    freqX: 71,
    freqY: 89,
    phi: 79,
    modFreqX: 46,
    modFreqY: 51,
    connectionRadius: 123,
  },
  {
    pointCount: 277,
    freqX: 4,
    freqY: 58,
    phi: 98,
    modFreqX: 41,
    modFreqY: 99,
    connectionRadius: 83,
  },
  {
    pointCount: 258,
    freqX: 48,
    freqY: 21,
    phi: 89,
    modFreqX: 99,
    modFreqY: 84,
    connectionRadius: 132,
  },
  {
    pointCount: 634,
    freqX: 27,
    freqY: 48,
    phi: 91,
    modFreqX: 6,
    modFreqY: 18,
    connectionRadius: 117,
  },
  {
    pointCount: 248,
    freqX: 13,
    freqY: 44,
    phi: 43,
    modFreqX: 82,
    modFreqY: 14,
    connectionRadius: 107,
  },
  {
    pointCount: 594,
    freqX: 51,
    freqY: 19,
    phi: 49,
    modFreqX: 13,
    modFreqY: 77,
    connectionRadius: 77,
  },
  {
    pointCount: 408,
    freqX: 39,
    freqY: 69,
    phi: 87,
    modFreqX: 55,
    modFreqY: 39,
    connectionRadius: 98,
  },
  {
    pointCount: 230,
    freqX: 69,
    freqY: 44,
    phi: 44,
    modFreqX: 89,
    modFreqY: 43,
    connectionRadius: 125,
  },
  {
    pointCount: 600,
    freqX: 21,
    freqY: 75,
    phi: 67,
    modFreqX: 90,
    modFreqY: 98,
    connectionRadius: 104,
  },
  {
    pointCount: 188,
    freqX: 35,
    freqY: 22,
    phi: 91,
    modFreqX: 24,
    modFreqY: 81,
    connectionRadius: 116,
  },
  {
    pointCount: 264,
    freqX: 9,
    freqY: 88,
    phi: 56,
    modFreqX: 43,
    modFreqY: 13,
    connectionRadius: 120,
  },
  {
    pointCount: 103,
    freqX: 99,
    freqY: 58,
    phi: 15,
    modFreqX: 99,
    modFreqY: 51,
    connectionRadius: 120,
  },
  {
    pointCount: 222,
    freqX: 72,
    freqY: 25,
    phi: 36,
    modFreqX: 86,
    modFreqY: 61,
    connectionRadius: 116,
  },
  {
    pointCount: 518,
    freqX: 66,
    freqY: 56,
    phi: 92,
    modFreqX: 88,
    modFreqY: 84,
    connectionRadius: 108,
  },
  {
    pointCount: 183,
    freqX: 93,
    freqY: 93,
    phi: 43,
    modFreqX: 67,
    modFreqY: 90,
    connectionRadius: 121,
  },
  //   {

  // 'pointCount' :182,
  // 'freqX' :61,
  // freqY :61,
  // 'phi' :2,
  // 'modFreqX' :41,
  // 'modFreqY' :41,
  // 'connectionRadius' :128
  //   },
  {
    pointCount: 364,
    freqX: 53,
    freqY: 52,
    phi: 58,
    modFreqX: 6,
    modFreqY: 52,
    connectionRadius: 118,
  },
  {
    pointCount: 160,
    freqX: 93,
    freqY: 60,
    phi: 6,
    modFreqX: 78,
    modFreqY: 96,
    connectionRadius: 113,
  },
  {
    pointCount: 396,
    freqX: 33,
    freqY: 86,
    phi: 12,
    modFreqX: 40,
    modFreqY: 99,
    connectionRadius: 115,
  },
];

let bgColor = [
  { red: 152, green: 152, blue: 152 },

  { red: 230, green: 233, blue: 240 },

  { red: 243, green: 231, blue: 233 },

  { red: 221, green: 220, blue: 215 },

  { red: 220, green: 217, blue: 212 },
];
let red, green, blue, randomColor, rc;

let rd;
let randomNum;
let cRd = 0;

let noiseVal;
let noiseScale = 0.02;

let bg3;
let bg4, bg5, bg6, bg7, bg68;
let riy;

function preload() {
  bg2 = loadImage("./bg2_2_2.png");
  boy = loadImage("./boy.png");

  bg3 = loadImage(
    "https://cdn.discordapp.com/attachments/1122696292666195969/1173607512361148466/idism._generative_art_dark_beige_color_background_design_dramat_4e5041dc-9995-4166-bc24-afea8c310839.png?ex=6564922b&is=65521d2b&hm=7bfce2308af3b9fd283dbd91a3f6863bdc89668258d1e624fa1242b90d273baa&"
  );
  bg4 = loadImage(
    "https://cdn.discordapp.com/attachments/1122696292666195969/1173606447322509382/idism._generative_art_dark_beige_color_background_design_dramat_2d52b885-3779-4616-8126-b057ae707032.png?ex=6564912d&is=65521c2d&hm=0861eee6918b1667f35755049240cd294536f00eadf033285efa2d384a653cf3&"
  );
  bg5 = loadImage(
    "https://cdn.discordapp.com/attachments/1122696292666195969/1173606421577867274/idism._generative_art_dark_beige_color_background_design_dramat_beab9108-a613-45d2-b8e1-b3f7f70644ed.png?ex=65649127&is=65521c27&hm=4e059f23f3b8e5db721d27d971fc4ed00555412534b745aedc3ed5ec7e7376e9&"
  );
  bg6 = loadImage(
    "https://cdn.discordapp.com/attachments/1122696292666195969/1173606283111317504/idism._generative_art_dark_beige_color_background_design_dramat_bfdae1ef-6956-4a25-b70a-be57c527fae4.png?ex=65649106&is=65521c06&hm=c72df9bd5c3755e931c45090bcf0d03995c18377ca3120ec243106088a7c55f7&"
  );
  bg7 = loadImage(
    "https://cdn.discordapp.com/attachments/1122696292666195969/1173606170053845105/idism._generative_art_dark_beige_color_background_design_dramat_1f078bca-4540-49f8-9051-e59097fbc19d.png?ex=656490eb&is=65521beb&hm=db8f212fc39be5d828d5e5652404d1170c46f077705fb20628cf7cb96c93de77&"
  );
  // bg8 = loadImage(
  //   "https://cdn.discordapp.com/attachments/1122696292666195969/1173606327721938944/idism._generative_art_dark_beige_color_background_design_dramat_264525a0-b15e-41a9-86ca-6aab0baf1865.png?ex=65649111&is=65521c11&hm=4e9bbe6ed7436cce23522c264d2a8f39fba5445a231d775db0dfd8cdb20cf183&"
  // );

  // bg3 = loadImage("./images/bgimage_6.png");
  // bg4 = loadImage("./images/bgimage_6.png");
  // bg5 = loadImage("./images/bgimage_6.png");
  // bg6 = loadImage("./images/bgimage_6.png");
  // bg7 = loadImage("./images/bgimage_6.png");
  // bg8 = loadImage("./images/bgimage_6.png");
}
let checkNumX;
let checkNumY;
let rx1, ry1, rx2, ry2;
let rotateStop = 0;
let alphaRate = 0;
let alphaCount = 0;
let bg3List;

function setup() {
  ww = windowWidth;
  wh = windowHeight;
  createCanvas(ww, wh);
  colorMode(RGB, 255, 255, 255, 100); // 색상 모드 설정
  noFill();
  lineColor = color(255, 255, 255);
  // rd = random(data);
  let rnum = 8;
  rd = data[rnum];

  rc = random(bgColor);

  red = rc["red"];
  green = rc["green"];
  blue = rc["blue"];

  imageY = wh - 160;
  imageX = (imageY / 16) * 9;

  pointCount = rd["pointCount"];
  freqX = rd["freqX"];
  freqY = rd["freqY"];
  phi = rd["phi"];
  modFreqX = rd["modFreqX"];
  modFreqY = rd["modFreqY"];
  if (rd["connectionRadius"] == 100) {
    connectionRadius = rd["connectionRadius"] / 4;
  } else {
    connectionRadius = (rd["connectionRadius"] * imageX) / 400;
  }

  x = (ww - imageX) / 2;
  y = (wh - imageY) / 2;
  lissajousPoints = [];
  calculateLissajousPoints();

  color1 = color(255, 0, 0); // 시작 색상
  color2 = color(0, 255, 0); // 중간 색상
  color3 = color(0, 0, 255); // 끝 색상

  let point_1_x = x - space;
  let point_1_y = y - space;

  let point_2_x = point_1_x + imageX + space * 2;
  let point_2_y = y - space;

  let point_3_x = x - space;
  let point_3_y = imageY + space * 2;

  let point_4_x = point_1_x + imageX + space * 2;
  let point_4_y = imageY + space * 2;

  checkNumX = random(0, 2);
  checkNumY = random(0, 2);

  bg3List = [bg3, bg4, bg5, bg6, bg7];
  bg3 = random(bg3List);
  let b3ImgWidth = bg3.width;
  let b3ImgHeight = bg3.height;

  if (b3ImgWidth > imageX) {
    rx1 = Math.floor(random(0, b3ImgWidth - (9 * b3ImgHeight) / 16));
    ry1 = Math.floor(random(0, b3ImgHeight - (rx1 / 9) * 16));
    ry2 = Math.floor(b3ImgHeight - ry1);
    rx2 = Math.floor((ry2 / 16) * 9);
  }

  background(40, 40, 40, 90);
}

function setImageAgain() {
  rd = random(data);
  pointCount = rd["pointCount"];
  freqX = rd["freqX"];
  freqY = rd["freqY"];
  phi = rd["phi"];
  modFreqX = rd["modFreqX"];
  modFreqY = rd["modFreqY"];
  connectionRadius = (rd["connectionRadius"] * imageX) / 400;
  lissajousPoints = [];
  calculateLissajousPoints();
  cRd = 0;
  conRaCk = 0;
  rotateStop = 0;

  bg3List = [bg3, bg4, bg5, bg6, bg7];
  bg3 = random(bg3List);
  let b3ImgWidth = bg3.width;
  let b3ImgHeight = bg3.height;

  if (b3ImgWidth > imageX) {
    rx1 = Math.floor(random(0, b3ImgWidth - (9 * b3ImgHeight) / 16));
    ry1 = Math.floor(random(0, b3ImgHeight - (rx1 / 9) * 16));
    ry2 = Math.floor(b3ImgHeight - ry1);
    rx2 = Math.floor((ry2 / 16) * 9);
  }
}

function calculateLissajousPoints() {
  for (let i = 0; i <= pointCount; i++) {
    let angle = map(i, 0, pointCount, 0, TAU);

    // Lissajous
    let x = sin(angle * freqX + radians(phi)) * cos(angle * modFreqX);
    let y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= imageX / 2 - imageX * 0.06;
    y *= imageY / 2 - imageY * 0.2;

    lissajousPoints[i] = createVector(x, y);
  }
}

function draw() {
  let b3ImgWidth = bg3.width;
  let b3ImgHeight = bg3.height;
  fill(0);
  rect(x - space, y - space, imageX + space * 2, imageY + space * 2);

  if (alphaRate < 255) {
    alphaRate += 0.8;
  }

  push();
  tint(255, alphaRate);
  if (b3ImgWidth > imageX) {
    image(bg3, x, y, imageX, imageY, rx1, ry1, rx2, ry2);
  } else {
    image(bg3, x, y, imageX, imageY);
  }
  pop();

  push();
  fill(255);
  noStroke();
  radialGradient(
    width / 2,
    height / 2 - width * 0.2,
    0,
    width / 2,
    height / 2 - height * 0.2,
    height * 0.43,
    color(red, green, blue, 2),
    color(0, 0, 0, 46)
  );
  rect(x, y, imageX, imageY);
  pop();

  push();
  image(bg2, x, y, imageX, imageY);
  tint(200);
  image(bg2, x, y, imageX, imageY);
  pop();

  push();
  fill(255);
  noStroke();
  radialGradient(
    width / 2 - 40,
    height / 2 - width * 0.18,
    0,
    width / 2 - 40,
    height / 2 - height * 0.18,
    height * 0.43,
    color(red, green, blue, 0),
    color(0, 0, 0, 46)
  );
  rect(x, y, imageX, imageY);
  pop();

  if (conRaCk == 0) {
    if (cRd <= connectionRadius) {
      cRd += 0.2;
    } else if (cRd >= connectionRadius) {
      conRaCk = 1;
    }
  } else if (conRaCk == 1) {
    if (rotateStop > connectionRadius + 20) {
      cRd -= 0.2;
      if (cRd <= 0) {
        setImageAgain();
        alphaRate = 0;
        // conRaCk = 0;
        // rotateStop = 0;
      }
    }
  }

  strokeWeight(lineWeight);

  push(); // 그래픽 상태 저장
  translate(width / 2, height / 2 - height * 0.01);
  // noprotect

  for (let i1 = 0; i1 < pointCount; i1++) {
    for (let i2 = 0; i2 < i1; i2++) {
      let d = lissajousPoints[i1].dist(lissajousPoints[i2]);
      let a = pow(1 / (d / cRd + 1), 0);
      if (d <= cRd) {
        // stroke(lineColor, a * lineAlpha); // 선의 색상 및 투명도 설정
        stroke(255, 255, 255, 10);
        line(
          lissajousPoints[i1].x,
          lissajousPoints[i1].y,
          lissajousPoints[i2].x,
          lissajousPoints[i2].y
        );
      }
    }
  }
  pop();

  image(boy, x, y, imageX, imageY);

  rotateStop += 0.2;
}

function LinearGradient(x, y, x2, y2, color1, color2) {
  let gradient = drawingContext.createLinearGradient(x, y, x2, y2);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  drawingContext.fillStyle = gradient;
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}

// function keyPressed() {
//   if (key == "s" || key == "S") {
//     let img = get(x, y, imageX, imageY);
//     save(img, "myCanvasPart-" + randomNum + ".jpg");
//   }
// }
