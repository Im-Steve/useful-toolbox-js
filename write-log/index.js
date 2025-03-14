const colors = {
  alert: '\x1b[101m%s\x1b[0m', // red background
  debug: '\x1b[95m%s\x1b[0m', // purple high intensity (pink)
  dev: '\x1b[96m%s\x1b[0m', // cyan high intensity
  error: '\x1b[31m%s\x1b[0m', // red
  info: '\x1b[33m%s\x1b[0m', // yellow
  step: '\x1b[94m%s\x1b[0m', // blue high intensity
  success: '\x1b[32m%s\x1b[0m', // green
  time: '\x1b[35m%s\x1b[0m', // purple
};

function isDebugEnv() {
  let isInDebug = false;

  process.argv.forEach((processArg) => {
    if (processArg.includes('debug')) {
      isInDebug = true;
    }
  });

  return isInDebug;
}

function isDevOrDebugEnv() {
  let isInDev = false;

  process.argv.forEach((processArg) => {
    if (processArg === 'dev' || processArg === '--dev') {
      isInDev = true;
    }
  });

  return isInDev || isDebugEnv();
}

function log(...args) {
  console.log(...args);
}

function alert(...args) {
  console.log(colors.alert, ...args);
}

function alertDev(...args) {
  if (isDevOrDebugEnv()) {
    alert(...args);
  }
}

function debug(...args) {
  if (isDebugEnv()) {
    console.log(colors.debug, ...args);
  }
}

function dev(...args) {
  if (isDevOrDebugEnv()) {
    console.log(colors.dev, ...args);
  }
}

function error(...args) {
  console.log(colors.error, ...args);
}

function info(...args) {
  console.log(colors.info, ...args);
}

function step(...args) {
  console.log(colors.step, ...args);
}

function success(...args) {
  console.log(colors.success, ...args);
}

function time(...args) {
  console.log(colors.time, ...args);
}

function rewrite(arg) {
  process.stdout.write(`\r${arg}`);
}

function isDebugModuleEnv(module) {
  if (!isDebugEnv()) {
    return false;
  }

  let isInModuleDebugEnv = false;
  process.argv.forEach((processArg) => {
    if (processArg.includes('debug-')) {
      isInModuleDebugEnv = true;
    }
  });

  if (!isInModuleDebugEnv) {
    return true;
  }

  if (!module || typeof module !== 'string') {
    return false;
  }

  let isModuleEnv = false;
  process.argv.forEach((processArg) => {
    if (processArg.includes('debug-') && processArg.includes(`-${module}`)) {
      isModuleEnv = true;
    }
  });

  return isModuleEnv;
}

function setDebug(module) {
  if (isDebugModuleEnv(module)) {
    return debug;
  }
  return () => {};
}

const writeLog = {
  alert,
  alertDev,
  debug,
  dev,
  error,
  info,
  log,
  rewrite,
  step,
  success,
  time,
  isDevOrDebugEnv,
  isDebugEnv,
  isDebugModuleEnv,
  setDebug,
};

function setDebugPlus(module) {
  if ((isDebugEnv() && !module) || isDebugModuleEnv(module)) {
    return writeLog;
  }

  return {
    alert: () => {},
    alertDev: () => {},
    debug: () => {},
    dev: () => {},
    error: () => {},
    info: () => {},
    log: () => {},
    rewrite: () => {},
    step: () => {},
    success: () => {},
    time: () => {},
    isDevOrDebugEnv,
    isDebugEnv,
    isDebugModuleEnv,
    setDebug: () => () => {},
  };
}

module.exports = {
  ...writeLog,
  setDebugPlus,
};
