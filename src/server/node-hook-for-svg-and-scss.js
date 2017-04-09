'use strict';
const nodeHook = require('node-hook');
 ['.scss', '.svg'].map(extension => {
   nodeHook.hook(extension, (_, filename) => `"${filename}"`);
 });
