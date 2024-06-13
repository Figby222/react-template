import { describe, it, expect } from 'vitest';

describe('something be truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
    
    it('false be false', () => {
        expect(false).toBe(false);
    });
});