var config = {}

//config.points = ['1','2','3','5','8','13','21','40','100'];
config.points = ['1','2','3','4','5'];
config.port = 8080;
// These are the valid HTML color names minus Light*, Medium*, and Dark*, to use
// as room names. The random number generator is still a fallback but these are
// easier to communicate verbally.
config.words = ['baseload', 'kilowatt', 'peakplant', 'substation', 'transformer', 'transmission',
  'offpeak', 'deregulation', 'puc', 'ratecase', 'btu', 'naturalgas', 'rates',
  'commercial', 'industrial', 'residential', 'coal', 'meter', 'voltage',
  'amperage', 'generation', 'circuit', 'distribution', 'electricity', 'solar', 'windfarm',
  'lineman', 'hightension', 'breaker', 'threephase', 'renewable', 'utility',
  'hydroelectric', 'nuclear', 'highvoltage', 'grid', 'tou'];
config.autoreveal = true;
config.highlight_highlow = true;
config.novote_afterreveal = true;

module.exports = config;
