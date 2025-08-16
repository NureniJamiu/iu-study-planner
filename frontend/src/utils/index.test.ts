import { describe, it, expect } from 'vitest';
import { formatDuration, isValidEmail, capitalize } from './index';

describe('Utility Functions', () => {
  describe('formatDuration', () => {
    it('formats minutes correctly', () => {
      expect(formatDuration(30)).toBe('30m');
    });

    it('formats hours correctly', () => {
      expect(formatDuration(60)).toBe('1h');
      expect(formatDuration(90)).toBe('1h 30m');
      expect(formatDuration(120)).toBe('2h');
    });
  });

  describe('isValidEmail', () => {
    it('validates email addresses correctly', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('capitalize', () => {
    it('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('WORLD');
      expect(capitalize('tEST')).toBe('TEST');
    });

    it('handles edge cases', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('a')).toBe('A');
    });
  });
});
