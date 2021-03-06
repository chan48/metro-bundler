/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @polyfill
 * @format
 */

/* eslint-disable strict */

global.__DEV__ = true;

global.__BUNDLE_START_TIME__ = global.nativePerformanceNow
  ? global.nativePerformanceNow()
  : Date.now();
