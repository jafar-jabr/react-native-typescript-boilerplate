import Analytics from 'appcenter-analytics';

const log = (message) => {
  const errorTemplate = `${log.caller.name}: ${message}`;
  Analytics.trackEvent(errorTemplate);
};

export default { log };
