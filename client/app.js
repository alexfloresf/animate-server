const webrtc2Images = require('webrtc2Images')

const rtc = new webrtc2Images({
  with: 200,
  height: 200,
  frames: 10,
  type: 'image/jpeg',
  quality: 0.4,
  interval: 200
})

rtc.startVideo(function(err){

})

const record = document.querySelector('#record')

record.addEventListener('click', function(e){
  e.preventDefault()
  //grabar el video
  rtc.recordVideo(function(err, frames){
    console.log(frames)
  })
}, false)
