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
  const badModuleName = 'badmodule';

  console.log('isDevOrDebugEnv:', writeLog.isDevOrDebugEnv());
  console.log('isDebugEnv:', writeLog.isDebugEnv());
  console.log(`isDebugModuleEnv(${moduleName}):`, writeLog.isDebugModuleEnv(moduleName));
  console.log(`isDebugModuleEnv(${badModuleName}):`, writeLog.isDebugModuleEnv(badModuleName));
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
  writeLog.debug('debug (always in debug mode)');
  writeLog.setDebug(moduleName)(`setDebug with ${moduleName}`);
  writeLog.setDebug(badModuleName)(`setDebug with ${badModuleName}`);
  console.log('--------------------');

  console.log('debug plus logs:');
  writeLog.setDebugPlus().debug('setDebugPlus without module (always in debug mode)');
  writeLog.setDebugPlus(badModuleName).debug(`setDebugPlus with ${badModuleName}`);
  const debugPlus = writeLog.setDebugPlus(moduleName);
  debugPlus.alert('debugPlus alert');
  debugPlus.alertDev('debugPlus alertDev');
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
  console.log('--------------------');
}

testLogs();
