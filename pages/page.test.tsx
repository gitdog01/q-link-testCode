import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Index from './index';
/**
 * @jest-environment jsdom
 */
describe('Client Test', () => {
  it('첫 페이지 render', () => {
    const indexPage = render(<Index />);
    expect(indexPage).toBeTruthy();
  });
});
