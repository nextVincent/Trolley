import got, { Got, ExtendOptions } from 'got';

export class GotClient {
  _client: Got;
  constructor(options?: ExtendOptions) {
    this._client = got.extend({
      https: {
        rejectUnauthorized: false,
      },
      responseType: 'json',
      // place proxy agent for each external API
      ...options,
    });
  }
}
