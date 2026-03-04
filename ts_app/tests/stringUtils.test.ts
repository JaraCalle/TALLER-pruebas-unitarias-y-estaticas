import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

// Sugerencias: "Radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true


describe('siembra', () => {
  it('ejemplo', () => {
    expect(true).toBe(true)
  })
})

describe('radar', () => {
  it('radar', () => {
    expect(true).toBe(isPalindrome('radar'))
  })
});

describe('anita lava la tina', () => {
  it('anita lava la tina', () => {
    expect(true).toBe(isPalindrome('anita lava la tina'))
  })
});

describe('python', () => {
  it('python', () => {
    expect(false).toBe(isPalindrome('python'))
  })
});

describe('', () => {
  it('', () => {
    expect(true).toBe(isPalindrome(''))
  })
});

describe('Radar', () => {
  it('Radar', () => {
    expect(true).toBe(isPalindrome('Radar'))
  })
});