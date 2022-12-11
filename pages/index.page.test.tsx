import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import Index from './index';

/**
 * @jest-environment jsdom
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
let component: any;

describe('Client Test', () => {
  beforeEach(async () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));

    component = render(<Index />);
  });
  it('첫 페이지 render', () => {
    expect(component).toMatchSnapshot();
  });

  it('버튼들 잘 되어 있는지', () => {
    const { getByText } = component;

    const creatButton = getByText('button.create');
    const infoButton = getByText('button.what');
    const exampleButton = getByText('button.demo');

    expect(creatButton).toBeVisible();
    expect(creatButton).toBeEnabled();
    expect(creatButton).toHaveAttribute('href');

    expect(infoButton).toBeVisible();
    expect(infoButton).toBeEnabled();
    expect(infoButton).toHaveAttribute('href');

    expect(exampleButton).toBeVisible();
    expect(exampleButton).toBeEnabled();
    expect(exampleButton).toHaveAttribute('href');
  });

  it('예시 페이지가 잘 랜더 되는지', () => {});

  it('예시 페이지 오답일 경우', () => {});

  it('예시 페이지 정답을 입력할 경우', () => {});

  it('예시 페이지 공유링크 클릭할 경우', () => {});
});
