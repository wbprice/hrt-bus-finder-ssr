'use strict'
/* global describe, it */

const assert = require('assert')

describe('ScheduleService', () => {
  it('should exist', () => {
    assert(global.app.api.services['ScheduleService'])
  })
})
