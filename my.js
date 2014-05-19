function writeText () {
  console.log('writing');
  var filename = 'hello.txt';
  var blob = new Blob(['this is a call'], { type: 'text/plain' });
  var sdcard = navigator.getDeviceStorage('sdcard');
  var request = sdcard.addNamed(blob, filename);
  request.onsuccess = function () {
    alert('success');
  };
  request.onerror = function () {
    alert(this.error.name);
  };
};

document.getElementById('dl')
.addEventListener('click', writeText);
