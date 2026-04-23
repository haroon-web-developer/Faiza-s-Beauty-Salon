const https = require('https');

const options = {
  hostname: 'm.facebook.com',
  path: '/FaizaSalon/photos',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /https:\/\/scontent[^"'\\]*\.(?:jpg|jpeg|png)/gi;
    const matches = data.match(regex);
    if (matches) {
      const unique = [...new Set(matches.map(m => m.replace(/\\/g, '')))];
      console.log(JSON.stringify(unique.slice(0, 20), null, 2));
    } else {
      console.log('No images found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
