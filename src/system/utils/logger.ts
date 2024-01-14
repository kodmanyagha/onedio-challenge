function logger() {}

function copyWithoutCircularReferences(references: any, object: any) {
  const cleanObject: any = {};
  Object.keys(object).forEach(function (key) {
    const value = object[key];
    if (value && typeof value === "object") {
      if (references.indexOf(value) < 0) {
        references.push(value);

        const objectClassName =
          value.constructor !== undefined ? value.constructor.name : "";

        if (objectClassName === "Buffer") {
          cleanObject[key] = "###_Buffer_###";
        } else if (
          objectClassName.length > 5 &&
          objectClassName.endsWith("Array")
        ) {
          cleanObject[key] = `###_${objectClassName}_###`;
        } else {
          cleanObject[key] = copyWithoutCircularReferences(references, value);
        }

        references.pop();
      } else {
        cleanObject[key] = "###_Circular_###";
      }
    } else if (typeof value !== "function") {
      cleanObject[key] = value;
    }
  });
  return cleanObject;
}

logger.printLog = function (type: any, logData: any) {
  if (logData === null) {
    logData = "NULL";
  } else if (typeof logData == "object") {
    logData = copyWithoutCircularReferences([logData], logData);
    logData = JSON.stringify(logData, null, 2);
  }

  let stackTrace: any;
  stackTrace = new Error().stack;

  stackTrace = stackTrace.split("\n");

  let stackLineItems = [];
  stackLineItems = stackTrace[3].trim().substr(3).split("/");

  // remove first thing
  stackLineItems.shift();

  // TODO Think about undefined return from `pop()` method.
  let callerFileArr = (stackLineItems.pop() + "").split(":");

  let callerFile = callerFileArr[0];
  let lineNo = callerFileArr[1];
  let columnNo = callerFileArr[2];

  let fullFilePath = "/" + callerFileArr.join("/") + "/" + callerFile;

  let date = new Date();
  let dateTime = date.toISOString().slice(0, 19).replace("T", " ");
  dateTime += (":" + date.getMilliseconds()).padEnd(4, "0");

  callerFile = callerFile.split(".")[0];
  let fileLine = callerFile + ":" + lineNo;

  logData = dateTime + " " + type + " " + fileLine + " " + logData;

  console.log(logData);
};

logger.logLevels = ["log", "debug", "info", "warn", "error"];
logger.minLevel = logger.logLevels.indexOf(process.env.LOG_LEVEL || "log");

logger.log = function (...logData: any[]) {
  if (logData.length == 1) {
    logData = logData[0];
  }
  if (logger.logLevels.indexOf("log") >= logger.minLevel) {
    logger.printLog("LOG", logData);
  }
};

logger.debug = function (...logData: any[]) {
  if (logData.length == 1) {
    logData = logData[0];
  }
  if (logger.logLevels.indexOf("debug") >= logger.minLevel) {
    logger.printLog("DBG", logData);
  }
};

logger.info = function (...logData: any[]) {
  if (logData.length == 1) {
    logData = logData[0];
  }
  if (logger.logLevels.indexOf("info") >= logger.minLevel) {
    logger.printLog("INF", logData);
  }
};

logger.warn = function (...logData: any[]) {
  if (logData.length == 1) {
    logData = logData[0];
  }
  if (logger.logLevels.indexOf("warn") >= logger.minLevel) {
    logger.printLog("WRN", logData);
  }
};

logger.error = function (...logData: any[]) {
  if (logData.length == 1) {
    logData = logData[0];
  }
  if (logger.logLevels.indexOf("error") >= logger.minLevel) {
    logger.printLog("ERR", logData);
  }
};

export default logger;
