'use strict';

// 01. DỮ LIỆU — Lily hồng và hoa ly kép được minh họa khác nhau.
const FLOWERS = [
  { id: 'narcissus', name: 'Thủy tiên', meaning: 'Khởi đầu an lành', color: '#f4d878' },
  { id: 'lily', name: 'Lily', meaning: 'Dịu dàng, thuần khiết', color: '#e7a5b1' },
  { id: 'hydrangea', name: 'Cẩm tú cầu', meaning: 'Lòng biết ơn', color: '#adacd8' },
  { id: 'rose', name: 'Hoa hồng', meaning: 'Yêu thương trọn vẹn', color: '#c96e7c' },
  {
    id: 'trumpet',
    name: 'Hoa loa kèn',
    meaning: 'Thanh cao, tinh khôi',
    color: '#eeeadc',
  },
  {
    id: 'sunflower',
    name: 'Hướng dương',
    meaning: 'Luôn hướng về nhau',
    color: '#eac253',
  },
  { id: 'doublelily', name: 'Hoa ly', meaning: 'Hạnh phúc đong đầy', color: '#edb4c1' },
  { id: 'tulip', name: 'Tulip', meaning: 'Một lời thương mến', color: '#dd938a' },
  { id: 'daisy', name: 'Cúc họa mi', meaning: 'Bình yên giản dị', color: '#fffdf2' },
  {
    id: 'carnation',
    name: 'Cẩm chướng',
    meaning: 'Trân trọng, biết ơn',
    color: '#dba0a6',
  },
  { id: 'lotus', name: 'Hoa sen', meaning: 'Bình an, thanh khiết', color: '#e6a4b8' },
  { id: 'orchid', name: 'Hoa lan', meaning: 'Vẻ đẹp thanh nhã', color: '#d8b4db' },
  { id: 'lavender', name: 'Oải hương', meaning: 'Thương nhớ dịu dàng', color: '#a995cc' },
  { id: 'peony', name: 'Mẫu đơn', meaning: 'Hạnh phúc viên mãn', color: '#e4a4ae' },
  { id: 'forgetmenot', name: 'Lưu ly', meaning: 'Luôn nhớ về nhau', color: '#93b7dc' },
  {
    id: 'cherryblossom',
    name: 'Anh đào',
    meaning: 'Hy vọng, khởi sắc',
    color: '#f0b7ca',
  },
];

// Mười bốn lời chúc nguyên bản. Chỉnh nội dung tại đây để cá nhân hóa trang web.
const WISHES = [
  'Chúc bạn một ngày 20/10 thật dịu dàng. Mong bạn luôn được yêu thương, được lắng nghe và được là chính mình, hôm nay cũng như mọi ngày.',
  'Gửi bạn một bó hoa và ngàn lời thương mến. Chúc bạn luôn rạng rỡ, bình an và đủ can đảm để theo đuổi những điều khiến trái tim mình hạnh phúc.',
  'Cảm ơn bạn đã mang đến thế giới này những điều thật đẹp. Chúc ngày 20/10 của bạn đầy ắp tiếng cười, những cái ôm ấm áp và niềm vui nho nhỏ.',
  'Chúc bạn luôn nở rộ theo cách riêng của mình: tự tin, tự do và hạnh phúc. Mong mọi nỗ lực của bạn đều được trân trọng, mọi yêu thương đều được đáp lại.',
  'Nhân ngày Phụ nữ Việt Nam, chúc bạn sức khỏe, bình yên và thật nhiều niềm vui. Mong những ngày phía trước luôn có người đồng hành, có ước mơ và có yêu thương.',
  'Một ngày để tôn vinh, cả cuộc đời để trân trọng. Chúc bạn luôn được đối xử bằng sự tử tế, được nâng niu và tìm thấy niềm vui trong từng ngày bình thường.',
  'Mong bó hoa nhỏ này mang đến cho bạn một nụ cười. Chúc bạn một ngày 20/10 ấm áp, một trái tim nhẹ nhàng và một cuộc sống nhiều điều đáng mong chờ.',
  'Chúc bạn luôn có những buổi sáng an yên, những chiều về ấm áp và những người thương bên cạnh. Ngày 20/10 này, mong mọi điều dịu dàng nhất đều tìm đến bạn.',
  'Gửi đến bạn lời cảm ơn vì những quan tâm đôi khi rất nhỏ mà làm cuộc đời đẹp hơn. Chúc bạn luôn mạnh khỏe, hạnh phúc và nhận lại thật nhiều yêu thương.',
  'Bạn không cần trở thành một ai khác để xứng đáng với những điều tốt đẹp. Chúc bạn ngày 20/10 đầy niềm vui, tự hào về chính mình và được sống với điều mình yêu.',
  'Chúc những ước mơ bạn đang ấp ủ có ngày nở hoa. Mong bạn luôn đủ vững vàng để bước tới, đủ thảnh thơi để nghỉ ngơi và đủ yêu thương để thấy lòng ấm áp.',
  'Dành tặng bạn một khoảng trời trong trẻo giữa những ngày bận rộn. Chúc bạn biết dành thời gian cho bản thân, chăm sóc niềm vui của mình và luôn mỉm cười thật tươi.',
  'Nhân ngày 20/10, mong bạn có thật nhiều lý do để vui và thật ít điều phải lo. Chúc hành trình của bạn luôn có những cuộc gặp tử tế và những kỷ niệm đáng yêu.',
  'Mỗi bông hoa trong bó hoa này là một lời trân trọng gửi đến bạn. Chúc bạn luôn giữ được ánh sáng trong tim, sự tự tin trong từng bước chân và bình yên trong tâm hồn.',
];

const MIN_FLOWERS = 10;
const MAX_FLOWERS = 20;
const CARD_WIDTH = 1200;
const CARD_HEIGHT = 1800;
const CARD_COLORS = ['#FFDDDD', '#ED96D7', '#F5EFE1', '#FFF5F5', '#F7D6D0', '#E2B4BD'];
const state = {
  name: '',
  photo: null,
  photoUrl: null,
  cropX: 0.5,
  cropY: 0.5,
  photoZoom: 1,
  bouquet: [],
  wishIndex: -1,
  cardColor: '#F5EFE1',
};
const $ = (selector) => document.querySelector(selector);
const form = $('#recipient-form');
const photoInput = $('#photo-input');
const photoPreview = $('#photo-preview');
const bouquetCanvas = $('#bouquet-canvas');
const greetingCanvas = $('#greeting-card');
greetingCanvas.width = CARD_WIDTH;
greetingCanvas.height = CARD_HEIGHT;

// 02. HÀM VẼ — Dùng chung cho icon, bó hoa xem trước và ảnh thiệp tải về.
function ellipse(ctx, x, y, rx, ry, color, rotation = 0) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, rotation, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function leaf(ctx, x, y, size, angle, color = '#809271') {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size * 0.3, -size * 0.6, size * 0.25, -size, 0, -size * 1.3);
  ctx.bezierCurveTo(size * 0.85, -size * 0.7, size * 0.7, -size * 0.1, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(size * 0.25, -size * 0.55, size * 0.06, -size);
  ctx.strokeStyle = '#ffffff30';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function petals(ctx, count, radius, width, length, color, offset = 0) {
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2 + offset;
    ellipse(
      ctx,
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      length,
      width,
      color,
      angle
    );
  }
}

function pointedPetals(ctx, count, size, color, offset = 0) {
  for (let i = 0; i < count; i += 1) {
    ctx.save();
    ctx.rotate((i / count) * Math.PI * 2 + offset);
    ctx.beginPath();
    ctx.moveTo(0, 6);
    ctx.bezierCurveTo(-size * 0.55, -size * 0.45, -size * 0.2, -size * 0.7, 0, -size);
    ctx.bezierCurveTo(size * 0.2, -size * 0.7, size * 0.55, -size * 0.45, 0, 6);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff45';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }
}

function stamens(ctx, color = '#95734c') {
  for (let i = 0; i < 6; i += 1) {
    const a = (i * Math.PI) / 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * 23, Math.sin(a) * 23);
    ctx.strokeStyle = '#a89863';
    ctx.lineWidth = 2;
    ctx.stroke();
    ellipse(ctx, Math.cos(a) * 23, Math.sin(a) * 23, 4, 2.5, color, a);
  }
}

function drawFlower(ctx, flowerId, x, y, scale = 1, rotation = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);

  switch (flowerId) {
    case 'narcissus':
      pointedPetals(ctx, 6, 64, '#fff7d9', Math.PI / 6);
      petals(ctx, 8, 15, 10, 14, '#f2cd66');
      ellipse(ctx, 0, 0, 12, 12, '#d4a440');
      ellipse(ctx, -3, -3, 6, 6, '#e9be57');
      break;
    case 'lily':
      pointedPetals(ctx, 3, 76, '#cf819a');
      pointedPetals(ctx, 3, 73, '#edbac6', Math.PI / 3);
      stamens(ctx);
      break;
    case 'hydrangea':
      ellipse(ctx, 0, 0, 61, 55, '#9799c7');
      for (let i = 0; i < 24; i += 1) {
        const angle = i * 2.4;
        const distance = Math.sqrt(i / 24) * 50;
        ctx.save();
        ctx.translate(Math.cos(angle) * distance, Math.sin(angle) * distance);
        petals(ctx, 4, 7, 7, 10, i % 3 === 0 ? '#c7c5e7' : '#afb5dc', angle);
        ellipse(ctx, 0, 0, 2.5, 2.5, '#eeedf7');
        ctx.restore();
      }
      break;
    case 'rose':
      petals(ctx, 7, 23, 29, 35, '#bc6876', 0.1);
      petals(ctx, 6, 20, 25, 29, '#d18a94', 0.6);
      petals(ctx, 5, 13, 17, 23, '#dda0a7', 0.1);
      petals(ctx, 4, 7, 11, 15, '#c77a86', 0.7);
      ellipse(ctx, 0, 0, 8, 9, '#ac5f70', 0.6);
      ctx.beginPath();
      ctx.arc(1, 0, 14, 0.2, 4.4);
      ctx.strokeStyle = '#eebcc1';
      ctx.lineWidth = 3;
      ctx.stroke();
      break;
    case 'trumpet':
      ctx.save();
      ctx.rotate(-0.25);
      ctx.beginPath();
      ctx.moveTo(-12, 55);
      ctx.bezierCurveTo(-16, 17, -48, -7, -57, -39);
      ctx.quadraticCurveTo(0, -17, 56, -42);
      ctx.bezierCurveTo(33, -4, 14, 20, 10, 55);
      ctx.fillStyle = '#e3e3d4';
      ctx.fill();
      petals(ctx, 6, 29, 16, 30, '#fffdf0', 0.2);
      ellipse(ctx, 0, 0, 14, 16, '#e7e1ac');
      stamens(ctx, '#bb9b4e');
      ctx.restore();
      break;
    case 'sunflower':
      petals(ctx, 16, 39, 10, 26, '#dbac40');
      petals(ctx, 14, 34, 11, 25, '#f1ce62', 0.13);
      ellipse(ctx, 0, 0, 29, 29, '#756044');
      ellipse(ctx, -3, -3, 23, 23, '#8e744d');
      for (let i = 0; i < 42; i += 1) {
        const r = Math.sqrt(i / 42) * 22;
        ellipse(ctx, Math.cos(i * 2.4) * r, Math.sin(i * 2.4) * r, 1.7, 1.7, '#c6a366');
      }
      break;
    case 'doublelily':
      pointedPetals(ctx, 6, 70, '#e0a0b1', 0.1);
      pointedPetals(ctx, 6, 53, '#f1c5ce', 0.6);
      pointedPetals(ctx, 5, 33, '#f8dae0', 0.2);
      ellipse(ctx, 0, 0, 8, 8, '#c9b77b');
      break;
    case 'tulip':
      ellipse(ctx, -17, 0, 24, 48, '#c77977', -0.3);
      ellipse(ctx, 17, 0, 24, 48, '#e49c91', 0.3);
      ctx.beginPath();
      ctx.moveTo(-33, -36);
      ctx.quadraticCurveTo(0, -14, 33, -36);
      ctx.bezierCurveTo(38, 21, 21, 45, 0, 48);
      ctx.bezierCurveTo(-25, 42, -40, 13, -33, -36);
      ctx.fillStyle = '#eab2a7';
      ctx.fill();
      break;
    case 'daisy':
      petals(ctx, 15, 31, 8, 26, '#dedfd1', 0.12);
      petals(ctx, 13, 28, 9, 25, '#fffdf4');
      ellipse(ctx, 0, 0, 17, 17, '#e2bd59');
      ellipse(ctx, -3, -4, 10, 9, '#efd078');
      break;
    case 'carnation':
      for (let ring = 0; ring < 4; ring += 1) {
        const count = 10 - ring;
        for (let i = 0; i < count; i += 1) {
          const a = (i * Math.PI * 2) / count + ring * 0.4;
          const r = 33 - ring * 8;
          ctx.save();
          ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
          petals(
            ctx,
            5,
            7,
            10 - ring,
            15 - ring,
            ['#c88393', '#dba0ab', '#edbcc5', '#f3d0d5'][ring],
            a
          );
          ctx.restore();
        }
      }
      break;
    case 'lotus':
      pointedPetals(ctx, 7, 66, '#cc859f', Math.PI / 7);
      pointedPetals(ctx, 7, 54, '#e9b1c3');
      pointedPetals(ctx, 5, 37, '#f5d0da', 0.35);
      ellipse(ctx, 0, 0, 15, 12, '#d9bd67');
      for (let i = 0; i < 7; i += 1) {
        const angle = (i * Math.PI * 2) / 7;
        ellipse(ctx, Math.cos(angle) * 9, Math.sin(angle) * 6, 2, 2, '#a28b4d');
      }
      break;
    case 'orchid':
      ellipse(ctx, 0, -37, 19, 33, '#cfacd5');
      ellipse(ctx, -28, 22, 18, 32, '#d4b3da', 0.65);
      ellipse(ctx, 28, 22, 18, 32, '#d4b3da', -0.65);
      ellipse(ctx, -34, -14, 36, 27, '#eddaed', 0.35);
      ellipse(ctx, 34, -14, 36, 27, '#eddaed', -0.35);
      petals(ctx, 3, 12, 13, 21, '#b675a2', Math.PI / 2);
      ellipse(ctx, 0, -1, 8, 12, '#f4deb3');
      ellipse(ctx, -3, -4, 3, 4, '#c495b6');
      break;
    case 'lavender':
      for (let stalk = -1; stalk <= 1; stalk += 1) {
        ctx.save();
        ctx.translate(stalk * 24, stalk === 0 ? -8 : 9);
        ctx.rotate(stalk * 0.2);
        ctx.beginPath();
        ctx.moveTo(0, 52);
        ctx.lineTo(0, -58);
        ctx.strokeStyle = '#829578';
        ctx.lineWidth = 3;
        ctx.stroke();
        for (let i = 0; i < 7; i += 1) {
          const y = -47 + i * 12;
          const width = 5 + Math.sin((i / 7) * Math.PI) * 5;
          ellipse(ctx, -6, y, width, 6, i % 2 ? '#b3a0d3' : '#9681ba', -0.4);
          ellipse(ctx, 6, y - 4, width, 6, '#c5b2df', 0.4);
        }
        ellipse(ctx, 0, -58, 5, 9, '#b8a3d8');
        ctx.restore();
      }
      break;
    case 'peony':
      petals(ctx, 10, 28, 25, 33, '#c78597', 0.2);
      petals(ctx, 9, 24, 23, 29, '#dfa2b1', 0.5);
      petals(ctx, 8, 18, 17, 25, '#edbdc8');
      petals(ctx, 7, 12, 12, 19, '#f4d3dc', 0.4);
      petals(ctx, 5, 5, 9, 13, '#dfa3b7');
      ellipse(ctx, 0, 0, 6, 7, '#bf829b');
      break;
    case 'cherryblossom':
      // Năm cánh hồng có khía nhỏ đặc trưng của hoa anh đào.
      for (let i = 0; i < 5; i += 1) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-48, -16, -40, -62, -8, -62);
        ctx.lineTo(0, -53);
        ctx.lineTo(8, -62);
        ctx.bezierCurveTo(40, -62, 48, -16, 0, 0);
        ctx.fillStyle = i % 2 ? '#f5cddd' : '#edb3c9';
        ctx.fill();
        ctx.restore();
      }
      ellipse(ctx, 0, 0, 15, 15, '#d88da9');
      for (let i = 0; i < 15; i += 1) {
        const angle = (i * Math.PI * 2) / 15;
        const x = Math.cos(angle) * 25;
        const y = Math.sin(angle) * 25;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#b97891';
        ctx.lineWidth = 1.3;
        ctx.stroke();
        ellipse(ctx, x, y, 2.5, 2.5, '#e3bd68');
      }
      break;
    case 'forgetmenot':
      for (let i = 0; i < 7; i += 1) {
        const angle = i * 2.4;
        const distance = i === 0 ? 0 : 35 + (i % 2) * 8;
        ctx.save();
        ctx.translate(Math.cos(angle) * distance, Math.sin(angle) * distance);
        petals(ctx, 5, 10, 9, 13, i % 2 ? '#a6c4e5' : '#84acd5', angle);
        ellipse(ctx, 0, 0, 5, 5, '#f5de92');
        ellipse(ctx, 0, 0, 2, 2, '#d1ad58');
        ctx.restore();
      }
      break;
  }
  ctx.restore();
}

// 03. GÓI HOA — Tọa độ cố định giúp mỗi bông luôn giữ vị trí khi thêm/bớt hoa.
const FLOWER_POSITIONS = [
  [450, 220, 1.13, 0],
  [315, 275, 1.1, -0.3],
  [575, 282, 1.1, 0.3],
  [223, 387, 1, -0.35],
  [680, 390, 1, 0.4],
  [435, 360, 1.14, -0.15],
  [331, 425, 1.07, 0.2],
  [559, 432, 1.08, -0.2],
  [260, 505, 0.96, -0.4],
  [655, 505, 0.96, 0.3],
  [444, 492, 1.12, 0.1],
  [365, 553, 0.93, -0.2],
  [541, 556, 0.94, 0.2],
  [390, 315, 0.85, 0.3],
  [510, 315, 0.85, -0.2],
  [355, 180, 0.82, -0.2],
  [545, 180, 0.82, 0.2],
  [235, 295, 0.88, -0.4],
  [665, 300, 0.88, 0.4],
  [450, 165, 0.8, 0],
];

function drawBouquet(ctx, flowers) {
  ctx.save();
  // Mặt sau giấy gói, hiển thị cả khi bó hoa chưa có bông nào.
  ctx.beginPath();
  ctx.moveTo(176, 469);
  ctx.lineTo(345, 426);
  ctx.lineTo(451, 499);
  ctx.lineTo(563, 424);
  ctx.lineTo(725, 475);
  ctx.lineTo(450, 866);
  ctx.closePath();
  ctx.fillStyle = '#e7decc';
  ctx.fill();
  // Giữ thân và lá bên trong đường bao giấy ở phần đuôi nhọn.
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(900, 0);
  ctx.lineTo(900, 469);
  ctx.lineTo(725, 475);
  ctx.lineTo(450, 866);
  ctx.lineTo(176, 469);
  ctx.lineTo(0, 469);
  ctx.closePath();
  ctx.clip();
  // Nhánh lá phụ làm nền cho các bông hoa.
  if (flowers.length) {
    for (let i = 0; i < 9; i += 1) {
      const side = i % 2 ? 1 : -1;
      const x = 450 + side * (120 + (i % 3) * 45);
      const y = 340 + i * 25;
      ctx.beginPath();
      ctx.moveTo(451, 730);
      ctx.quadraticCurveTo(x, 550, x, y);
      ctx.strokeStyle = '#809070';
      ctx.lineWidth = 4;
      ctx.stroke();
      leaf(ctx, x, y + 45, 37, side * 0.8, i % 3 ? '#899b7c' : '#a6b499');
      leaf(ctx, x - side * 5, y + 96, 32, -side * 0.55, '#9daa8c');
    }
  }
  flowers.forEach((id, index) => {
    const [x, y] = FLOWER_POSITIONS[index];
    ctx.beginPath();
    ctx.moveTo(450 + (index % 3) * 5, 745);
    ctx.quadraticCurveTo(x + 25, y + 170, x, y);
    ctx.strokeStyle = index % 2 ? '#6c8462' : '#819472';
    ctx.lineWidth = 5;
    ctx.stroke();
    leaf(ctx, x + 8, y + 130, 40, index % 2 ? 0.7 : -0.8);
  });
  ctx.restore();
  // Sắp lớp hoa theo chiều cao để bông phía trước không bị che.
  flowers
    .map((id, index) => ({ id, pos: FLOWER_POSITIONS[index] }))
    .sort((a, b) => a.pos[1] - b.pos[1])
    .forEach(({ id, pos }) => drawFlower(ctx, id, ...pos));

  ctx.beginPath();
  ctx.moveTo(176, 469);
  ctx.lineTo(451, 626);
  ctx.lineTo(450, 866);
  ctx.closePath();
  ctx.fillStyle = '#f3eadd';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(725, 475);
  ctx.lineTo(451, 626);
  ctx.lineTo(450, 866);
  ctx.closePath();
  ctx.fillStyle = '#e3d5be';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(451, 626);
  ctx.lineTo(450, 866);
  ctx.strokeStyle = '#c5b79e66';
  ctx.lineWidth = 2;
  ctx.stroke();
  // Nơ hồng, gồm hai cánh nơ và hai dải ruy băng.
  ctx.save();
  ctx.translate(450, 727);
  ellipse(ctx, -30, -8, 39, 13, '#c89293', 0.35);
  ellipse(ctx, 30, -8, 39, 13, '#d8a3a3', -0.35);
  ctx.beginPath();
  ctx.moveTo(-3, 0);
  ctx.lineTo(-38, 71);
  ctx.lineTo(-16, 60);
  ctx.lineTo(-7, 77);
  ctx.lineTo(9, 4);
  ctx.fillStyle = '#ca9394';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(4, 0);
  ctx.lineTo(35, 65);
  ctx.lineTo(18, 58);
  ctx.lineTo(13, 73);
  ctx.lineTo(-9, 4);
  ctx.fillStyle = '#ddb1ad';
  ctx.fill();
  ellipse(ctx, 0, -2, 11, 10, '#b77f85');
  ctx.restore();
  ctx.restore();
}

// 04. NHẬP ẢNH VÀ CẮT VUÔNG — URL tạm chỉ trỏ tới dữ liệu trong thiết bị.
let imageLoadVersion = 0;
async function loadPhoto(file) {
  if (!file) return;
  const error = $('#form-error');
  error.textContent = '';
  if (file.type && !file.type.startsWith('image/')) {
    error.textContent = 'Bạn hãy chọn một tệp ảnh (JPG, PNG, WebP…).';
    photoInput.value = '';
    return;
  }
  if (file.size > 20 * 1024 * 1024) {
    error.textContent = 'Ảnh hơi lớn rồi. Hãy chọn ảnh nhỏ hơn 20 MB nhé.';
    photoInput.value = '';
    return;
  }
  const version = ++imageLoadVersion;
  const url = URL.createObjectURL(file);
  const image = new Image();
  $('#start-button').disabled = true;
  try {
    image.src = url;
    await image.decode();
    if (version !== imageLoadVersion) {
      URL.revokeObjectURL(url);
      return;
    }
    if (!image.naturalWidth || !image.naturalHeight) throw new Error('Invalid image');
    if (state.photoUrl) URL.revokeObjectURL(state.photoUrl);
    state.photo = image;
    state.photoUrl = url;
    resetPhotoCrop();
    $('#upload-placeholder').hidden = true;
    $('#photo-selection').hidden = false;
    $('#photo-adjustments').hidden = false;
  } catch {
    URL.revokeObjectURL(url);
    if (version === imageLoadVersion) {
      error.textContent =
        'Trình duyệt chưa đọc được ảnh này. Bạn thử ảnh JPG, PNG hoặc WebP nhé.';
      photoInput.value = '';
    }
  } finally {
    if (version === imageLoadVersion) $('#start-button').disabled = false;
  }
}

// Dùng một công thức cắt cho ảnh xem trước và ảnh trên thiệp tải xuống.
function getPhotoCrop() {
  const side =
    Math.min(state.photo.naturalWidth, state.photo.naturalHeight) / state.photoZoom;
  return {
    side,
    sx: (state.photo.naturalWidth - side) * state.cropX,
    sy: (state.photo.naturalHeight - side) * state.cropY,
  };
}

function updatePhotoPreview() {
  if (!state.photo) return;
  const preview = document.createElement('canvas');
  preview.width = 314;
  preview.height = 314;
  const { sx, sy, side } = getPhotoCrop();
  preview.getContext('2d').drawImage(state.photo, sx, sy, side, side, 0, 0, 314, 314);
  photoPreview.src = preview.toDataURL('image/png');
}

function resetPhotoCrop() {
  state.cropX = 0.5;
  state.cropY = 0.5;
  state.photoZoom = 1;
  $('#photo-x').value = '50';
  $('#photo-y').value = '50';
  $('#photo-zoom').value = '100';
  $('#photo-x-value').textContent = '50%';
  $('#photo-y-value').textContent = '50%';
  $('#photo-zoom-value').textContent = '100%';
  updatePhotoPreview();
}

photoInput.addEventListener('change', () => loadPhoto(photoInput.files[0]));
for (const [id, key] of [
  ['photo-x', 'cropX'],
  ['photo-y', 'cropY'],
  ['photo-zoom', 'photoZoom'],
]) {
  $(`#${id}`).addEventListener('input', (event) => {
    state[key] = Number(event.target.value) / 100;
    $(`#${id}-value`).textContent = `${event.target.value}%`;
    updatePhotoPreview();
  });
}
$('#reset-photo').addEventListener('click', resetPhotoCrop);
const uploadZone = $('#upload-zone');
uploadZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadZone.classList.add('drag-over');
});
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
uploadZone.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadZone.classList.remove('drag-over');
  loadPhoto(event.dataTransfer.files[0]);
});

function showStep(step) {
  document.querySelectorAll('.step-panel').forEach((panel, index) => {
    panel.hidden = index !== step - 1;
  });
  document.querySelectorAll('.steps li').forEach((item, index) => {
    item.classList.toggle('complete', index < step - 1);
    if (index === step - 1) item.setAttribute('aria-current', 'step');
    else item.removeAttribute('aria-current');
  });
  const target = $(`#step-${step} h1`);
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#recipient-name');
  const name = input.value.trim().replace(/\s+/g, ' ');
  if (!name) {
    $('#form-error').textContent = 'Bạn điền tên trên tấm thiệp trước nhé.';
    input.focus();
    return;
  }
  if (!state.photo) {
    $('#form-error').textContent =
      'Thêm một bức ảnh để tấm thiệp có dấu ấn của riêng bạn nhé.';
    photoInput.focus();
    return;
  }
  state.name = name;
  $('#form-error').textContent = '';
  renderBouquet();
  showStep(2);
});

// 05. CHỌN HOA — Mỗi bông đã chọn là một phần tử trong state.bouquet.
const flowerControls = new Map();
function buildPalette() {
  const palette = $('#flower-palette');
  $('#flower-variety-count').textContent = `${FLOWERS.length} LOÀI HOA`;
  FLOWERS.forEach((flower) => {
    const item = document.createElement('div');
    item.className = 'flower-item';
    const add = document.createElement('button');
    add.type = 'button';
    add.className = 'flower-add';
    add.setAttribute('aria-label', `Thêm một bông ${flower.name}`);
    const icon = document.createElement('canvas');
    icon.width = 160;
    icon.height = 170;
    icon.setAttribute('aria-hidden', 'true');
    const ctx = icon.getContext('2d');
    ctx.strokeStyle = '#8c9b7b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(82, 160);
    ctx.lineTo(80, 75);
    ctx.stroke();
    leaf(ctx, 81, 148, 25, -0.8);
    drawFlower(ctx, flower.id, 80, 69, 0.85);
    const label = document.createElement('span');
    const title = document.createElement('span');
    title.className = 'flower-name';
    title.textContent = flower.name;
    const meaning = document.createElement('span');
    meaning.className = 'flower-meaning';
    meaning.textContent = flower.meaning;
    label.append(title, meaning);
    add.append(icon, label);
    const controls = document.createElement('div');
    controls.className = 'flower-controls';
    const quantity = document.createElement('span');
    quantity.className = 'flower-quantity';
    quantity.setAttribute('aria-label', `Số bông ${flower.name}`);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'flower-remove';
    remove.textContent = '−';
    remove.setAttribute('aria-label', `Bớt một bông ${flower.name}`);
    remove.disabled = true;
    controls.append(quantity, remove);
    item.append(add, controls);
    palette.append(item);
    flowerControls.set(flower.id, { item, add, remove, quantity });
    add.addEventListener('click', () => {
      if (state.bouquet.length >= MAX_FLOWERS) return;
      state.bouquet.push(flower.id);
      renderBouquet();
    });
    remove.addEventListener('click', () => {
      const index = state.bouquet.lastIndexOf(flower.id);
      if (index < 0) return;
      state.bouquet.splice(index, 1);
      renderBouquet();
    });
  });
}

function renderBouquet() {
  const count = state.bouquet.length;
  const ctx = bouquetCanvas.getContext('2d');
  ctx.clearRect(0, 0, 900, 900);
  drawBouquet(ctx, state.bouquet);
  $('#flower-counter').textContent = `${count} / ${MAX_FLOWERS} bông`;
  $('#empty-bouquet').hidden = count > 0;
  $('#clear-bouquet').disabled = count === 0;
  $('#make-card').disabled = count < MIN_FLOWERS || count > MAX_FLOWERS;
  $('#bouquet-progress').style.width = `${(count / MAX_FLOWERS) * 100}%`;
  $('#bouquet-status').textContent =
    count < MIN_FLOWERS
      ? `Chọn thêm ${MIN_FLOWERS - count} bông để hoàn thành bó hoa.`
      : count === MAX_FLOWERS
        ? `Đủ ${MAX_FLOWERS} bông rồi. Bó hoa đã sẵn sàng dành tặng!`
        : `Bó hoa đã sẵn sàng! Bạn có thể thêm ${MAX_FLOWERS - count} bông nữa.`;
  flowerControls.forEach((controls, id) => {
    const amount = state.bouquet.filter((value) => value === id).length;
    controls.quantity.textContent = amount ? `×${amount}` : '';
    controls.remove.disabled = amount === 0;
    controls.add.disabled = count >= MAX_FLOWERS;
    controls.item.classList.toggle('selected', amount > 0);
  });
}

$('#clear-bouquet').addEventListener('click', () => {
  state.bouquet = [];
  renderBouquet();
});
$('#back-to-person').addEventListener('click', () => showStep(1));
$('#edit-bouquet').addEventListener('click', () => showStep(2));
$('#make-card').addEventListener('click', () => {
  if (
    state.bouquet.length < MIN_FLOWERS ||
    state.bouquet.length > MAX_FLOWERS ||
    !state.photo
  )
    return;
  if (state.wishIndex < 0) chooseWish();
  renderCard();
  showStep(3);
});

// 06. VẼ THIỆP — Không dùng dịch vụ hoặc thư viện bên ngoài để xuất ảnh.
function roundedRect(ctx, x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function chooseWish() {
  // Chọn một lời chúc khác để không lặp ngay câu đang hiển thị.
  const choices = WISHES.map((_, index) => index).filter(
    (index) => index !== state.wishIndex
  );
  const random = new Uint32Array(1);
  if (globalThis.crypto?.getRandomValues) crypto.getRandomValues(random);
  else random[0] = Math.floor(Math.random() * 4294967296);
  state.wishIndex = choices[random[0] % choices.length];
}

function renderCard() {
  const ctx = greetingCanvas.getContext('2d');
  // Nền hồng đậm dùng chữ đậm hơn để lời chúc vẫn dễ đọc.
  const strongBackground = ['#ED96D7', '#E2B4BD'].includes(state.cardColor);
  const accentColor = strongBackground ? '#753e51' : '#a06469';
  const bodyColor = strongBackground ? '#3f4c3c' : '#687160';
  const mutedColor = strongBackground ? '#566148' : '#828975';
  ctx.clearRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  ctx.fillStyle = state.cardColor;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  // Viền in mảnh và những chấm giấy có vị trí ổn định.
  ctx.strokeStyle = '#d7d7c4';
  ctx.lineWidth = 2;
  ctx.strokeRect(38, 38, CARD_WIDTH - 76, CARD_HEIGHT - 76);
  for (let i = 0; i < 320; i += 1) {
    ellipse(ctx, (i * 173) % CARD_WIDTH, (i * 271) % CARD_HEIGHT, 0.9, 0.9, '#a99b7b16');
  }
  ctx.textAlign = 'center';
  ctx.fillStyle = mutedColor;
  ctx.font = '28px sans-serif';
  ctx.fillText('NGÀY PHỤ NỮ VIỆT NAM', 600, 106);
  ctx.fillStyle = accentColor;
  ctx.font = '88px Georgia, serif';
  ctx.fillText('Chúc mừng 20/10', 600, 200);
  ctx.fillStyle = strongBackground ? bodyColor : '#68745f';
  ctx.font = 'italic 40px Georgia, serif';
  ctx.fillText('Gửi người phụ nữ tuyệt vời', 600, 260);
  ctx.fillStyle = bodyColor;
  ctx.font = '40px sans-serif';
  const wish = WISHES[state.wishIndex];
  const lines = wrapText(ctx, wish, 1010);
  lines.forEach((line, index) => ctx.fillText(line, 600, 340 + index * 51));

  // Dành đủ chỗ cho lời chúc dài, luôn để chóp giấy phía trên khung ảnh.
  const wishBottom = 340 + (lines.length - 1) * 51;
  const bouquetBottom = 1070;
  const bouquetScale = Math.min(0.74, (bouquetBottom - wishBottom - 30) / (866 - 90));
  ctx.save();
  ctx.translate(600 - 450 * bouquetScale, bouquetBottom - 866 * bouquetScale);
  ctx.scale(bouquetScale, bouquetScale);
  drawBouquet(ctx, state.bouquet);
  ctx.restore();

  const { side, sx, sy } = getPhotoCrop();
  // Bo góc ảnh trên thiệp PNG 30px; ảnh ở bước chọn vẫn bo góc 25px.
  const photoRadius = 30;
  ctx.save();
  ctx.shadowColor = '#344a3c18';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 7;
  roundedRect(ctx, 385, 1080, 430, 430, photoRadius + 15);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.restore();
  ctx.save();
  roundedRect(ctx, 400, 1095, 400, 400, photoRadius);
  ctx.clip();
  ctx.drawImage(state.photo, sx, sy, side, side, 400, 1095, 400, 400);
  ctx.restore();
  ctx.fillStyle = '#344a3c';
  let nameSize = 64;
  do {
    ctx.font = `${nameSize}px Georgia, serif`;
    nameSize -= 1;
  } while (ctx.measureText(state.name).width > 970 && nameSize >= 22);
  ctx.fillText(state.name, 600, 1590);
  ctx.fillStyle = accentColor;
  ctx.font = 'italic 38px Georgia, serif';
  const closingLines = wrapText(
    ctx,
    'Mong bạn luôn được yêu thương, hôm nay và mãi sau này.',
    1040
  );
  closingLines.forEach((line, index) => ctx.fillText(line, 600, 1650 + index * 46));
  ctx.fillStyle = strongBackground ? mutedColor : '#8f947f';
  ctx.font = '26px sans-serif';
  ctx.fillText('MỘT BÓ HOA, NGÀN YÊU THƯƠNG · 20/10', 600, 1742);

  $('#recipient-display').textContent = state.name;
  $('#accessible-wish').textContent = wish;
  greetingCanvas.setAttribute(
    'aria-label',
    `Thiệp chúc mừng 20/10 dành cho ${state.name}. ${wish} Bó hoa gồm ${state.bouquet.length} bông.`
  );
  $('#download-status').textContent = '';
}

$('#change-wish').addEventListener('click', () => {
  chooseWish();
  renderCard();
});

// Màu nền được vẽ vào cùng Canvas, nên ảnh PNG luôn khớp màu xem trước.
document.querySelectorAll('input[name="card-color"]').forEach((input) => {
  input.addEventListener('change', () => {
    if (!input.checked || !CARD_COLORS.includes(input.value)) return;
    state.cardColor = input.value;
    $('#card-color-value').textContent = input.value;
    if (state.photo && state.wishIndex >= 0) renderCard();
  });
});
$('#download-card').addEventListener('click', async () => {
  const button = $('#download-card');
  button.disabled = true;
  const status = $('#download-status');
  status.textContent = 'Đang gói ghém tấm thiệp của bạn…';
  try {
    const blob = await new Promise((resolve, reject) => {
      greetingCanvas.toBlob(
        (value) => (value ? resolve(value) : reject(new Error('Export failed'))),
        'image/png'
      );
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const name =
      state.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase() || 'yeu-thuong';
    link.href = url;
    link.download = `thiep-20-10-${name}.png`;
    document.body.append(link);
    link.click();
    link.remove();
    // Chừa thời gian để trình duyệt điện thoại đọc xong ảnh trước khi thu hồi URL.
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    status.textContent =
      'Thiệp đã sẵn sàng tải về. Nếu ảnh mở trong tab mới, hãy nhấn giữ ảnh để lưu nhé.';
  } catch {
    status.textContent =
      'Chưa lưu được ảnh. Bạn thử lại bằng Chrome hoặc Safari phiên bản mới nhé.';
  } finally {
    button.disabled = false;
  }
});

// 07. KHỞI TẠO TRANG
buildPalette();
renderBouquet();
const introCtx = $('#intro-bouquet').getContext('2d');
introCtx.translate(45, -35);
introCtx.scale(0.68, 0.68);
drawBouquet(introCtx, [
  'rose',
  'daisy',
  'lily',
  'hydrangea',
  'rose',
  'doublelily',
  'narcissus',
  'tulip',
  'daisy',
  'carnation',
  'rose',
  'daisy',
]);
