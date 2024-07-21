import { describe, expect, vi, it, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostPage from './../app/post/[id]/page';

const date2YearsAgo = () => {
  const date = new Date();
  date.getFullYear() - 2;
  return date;
};

const data = [
  {
    id: 1,
    title: 'Post',
    content: 'Content',
    image_urls: [
      'https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg',
      'https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg',
      'https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg'
    ],
    user: { nick_name: 'Nick', skin_type: 'Oily', image_url: '/images/profile-picture.jpg' },
    category: {
      id: 1,
      label: 'label'
    },
    created_at: date2YearsAgo().toISOString(),
    upvoteCount: 1,
    commentCount: 1,
    viewCount: 2
  }
];

describe('Test Post Page', () => {
  global.fetch = vi
    .fn()
    .mockResolvedValueOnce({ json: vi.fn().mockResolvedValue(data) }) // mock post data
    .mockResolvedValueOnce({ json: vi.fn().mockResolvedValue([]) }); // mock comments data

  // Mock embla-carousel api
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }))
  });

  const matchingMediaQueries: string[] = [];
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: matchingMediaQueries.includes(query),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }))
  });

  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }))
  });

  vi.mock('dayjs', async () => {
    const actual = await vi.importActual('dayjs');
    const mockedDayjs = function () {
      return {
        fromNow: () => '2 year ago'
      };
    };
    mockedDayjs.extend = vi.fn();
    return {
      ...actual,
      default: mockedDayjs
    };
  });

  beforeAll(async () => {
    const page = await PostPage({ params: { id: '1' } });
    render(page);
  });

  it('should render userInfos', () => {
    const authorImage = screen.getByTestId('author-image');
    const nickName = screen.getByTestId('nick-name');
    const skinType = screen.getByTestId('skin-type');
    const date = screen.getByTestId('date');

    expect(authorImage).toBeDefined();
    expect(nickName.textContent).toContain('Nick');
    expect(skinType.textContent).toContain('Oily');
    expect(date.textContent).toContain('2 year ago');
  });

  it('should render post content', () => {
    const postTitle = screen.getByTestId('title');
    const postContent = screen.getByTestId('content');
    const postCategory = screen.getByTestId('post-category');

    expect(postTitle.textContent).toContain('Post');
    expect(postContent.textContent).toContain('Content');
    expect(postCategory.textContent).toContain('label');
  });

  it('should render post interactions', () => {
    const upvoteCount = screen.getByTestId('upvote-count');
    const commentCount = screen.getByTestId('comment-count');
    const viewCount = screen.getByTestId('view-count');

    expect(upvoteCount.textContent).toContain('1');
    expect(commentCount.textContent).toContain('1');
    expect(viewCount.textContent).toContain('2 Views');
  });
});
