import QRCode from 'qrcode'

const URL = 'https://ridewithinreach.org/ebike?src=qr'

await QRCode.toFile('public/ebike-qr.png', URL, {
  width: 2000,
  margin: 2,
  errorCorrectionLevel: 'H',
})

console.log('wrote public/ebike-qr.png')
