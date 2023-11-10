const writeLog = require('.');

function testLogs() {
  if (process.argv.length < 3) {
    console.log('no argument');
  }
  for (let i = 2; i < process.argv.length; i += 1) {
    console.log('argument:', process.argv[i]);
  }
  console.log('--------------------');

  const moduleName = 'module';
  const debugPlus = writeLog.setDebugPlus();

  console.log('isDevOrDebug:', writeLog.isDevOrDebug());
  console.log('isDebug:', writeLog.isDebug());
  console.log('isDebugModule:', writeLog.isDebugModule(moduleName));
  console.log('--------------------');

  console.log('normal logs:');
  writeLog.alert('alert');
  writeLog.error('error');
  writeLog.info('info');
  writeLog.log('log');
  writeLog.rewrite('rewrite once');
  writeLog.rewrite('rewrite twice\n');
  writeLog.step('step');
  writeLog.success('success');
  writeLog.time('time');
  console.log('--------------------');

  console.log('dev logs:');
  writeLog.alertDev('alertDev');
  writeLog.dev('dev');
  console.log('--------------------');

  console.log('debug logs:');
  writeLog.debug('debug');
  writeLog.setDebug()('setDebug without module');
  writeLog.setDebug(moduleName)('setDebug with module');
  console.log('--------------------');

  console.log('debug plus logs:');
  debugPlus.alert('debugPlus alert');
  debugPlus.debug('debugPlus debug');
  debugPlus.dev('debugPlus dev');
  debugPlus.error('debugPlus error');
  debugPlus.info('debugPlus info');
  debugPlus.log('debugPlus log');
  debugPlus.rewrite('debugPlus rewrite once');
  debugPlus.rewrite('debugPlus rewrite twice\n');
  debugPlus.step('debugPlus step');
  debugPlus.success('debugPlus success');
  debugPlus.time('debugPlus time');
  debugPlus.setDebug()('debugPlus.setDebug()');
  writeLog.setDebugPlus(moduleName).debug('setDebugPlus with module');
  console.log('--------------------');
}

testLogs();
