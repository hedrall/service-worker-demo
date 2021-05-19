addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      postMessage('WORKER STARTED: ' + data.msg);
      break;
    case 'stop':
      postMessage('WORKER STOPPED: ' + data.msg + '. (buttons will no longer work)');
      close(); // Terminates the worker.
      break;
    default:
      postMessage('Unknown command: ' + data.msg);
  }
}, false);