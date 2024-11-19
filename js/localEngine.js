var encodedLocalMusic = localMusic.map(item => ({
  name: item.name,
  artist: item.artist,
  url: encodeNonAscii(item.url),
  cover: encodeNonAscii(item.cover),
  lrc: encodeNonAscii(item.lrc)
}));

document.getElementById('heoMusic-page').classList.add('localMusic');

function encodeNonAscii(str) {
  return str.replace(/[^\x00-\x7F]/g, function(c) {
    return encodeURIComponent(c);
  });
}

const ap = new APlayer({
  container: document.getElementById('heoMusic-page'),
  lrcType: 3,
  audio: encodedLocalMusic
});
  var localMusic = [{
      name: '你瞒我瞒',
      artist: '陈柏宇',
      url: '../music/你瞒我瞒.mp3',
      cover: './music/你瞒我瞒.png',
      lrc: './music/你瞒我瞒.lrc'
  },
  {
      name: '哭砂',
      artist: '张杰',
      url: '../music/张杰-哭砂.mp3',
      cover: '../music/张杰-哭砂.png',
      lrc: '../music/张杰-哭砂.lrc'
  }
  ];
