import { test, expect } from 'vitest';
import { getShortDescription, processArticleDate, getConfigurationCollection } from './utils';



test('getShortDescription', () => {
  const longText = 'This is a long text that should be shortened.';
  const shortText = 'This is short.';

  expect(getShortDescription(longText, 5)).toBe('This is a long text...');
  expect(getShortDescription(shortText, 5)).toBe('This is short.');
});

test('processArticleDate', () => {
  const date = new Date('2024-01-01');
  expect(processArticleDate(date)).toBe('Jan 1, 2024');
});

test('getConfigurationCollection', async () => {
  const config = await getConfigurationCollection();
  expect(config.data.site.name).toBe('Test Site');
});