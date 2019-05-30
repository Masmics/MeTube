import { getVideos, getVideoThumbnails, getVideoUrl } from './videosSelectors';

describe('videos selector', () => {
  it('gets list of video ids', () => {
    const state = {
      videos: [
        '-UoeQOC-5iw',
        '1RE5OB38stU'
      ]
    };
    expect(getVideos(state)).toEqual(['-UoeQOC-5iw', '1RE5OB38stU']);
  });

  it('gets list of thumbnail urls', () => {
    const state = {
      videos: [
        '-UoeQOC-5iw',
        '1RE5OB38stU'
      ]
    };
    expect(getVideoThumbnails(state)).toEqual([
      { id: '-UoeQOC-5iw', url: 'https://img.youtube.com/vi/-UoeQOC-5iw/0.jpg' },
      { id: '1RE5OB38stU', url: 'https://img.youtube.com/vi/1RE5OB38stU/0.jpg' }
    ]);
  });

  it('gets a video by url', () => {
    const videoId = '-UoeQOC-5iw';
    const url = getVideoUrl([], videoId);
    expect(url).toEqual('https://www.youtube.com/embed/-UoeQOC-5iw');
  });
});

