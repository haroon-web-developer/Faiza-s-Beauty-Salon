const https = require('https');

https.get('https://www.facebook.com/FaizaSalon/photos', (res) => {
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
