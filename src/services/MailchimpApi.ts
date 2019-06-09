import Axios, { AxiosInstance, AxiosResponse } from 'axios';

window.axios = Axios;

class MailchimpApi {
  private audienceId: string;
  private instance: AxiosInstance;

  constructor(audienceId: string) {
    this.audienceId = audienceId;
    this.instance = Axios.create({
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Request-Headers': 'x-requested-with',
      },
      withCredentials: true,
    });
  }

  public async subscribe(email: string): Promise<AxiosResponse<any>> {
    const url: string = `bibliaonline.us6.list-manage.com/subscribe/post?u=b7957a6d11d56654e3ff3a0a8&amp;id=${this.audienceId}`;
    const data: FormData = new FormData();
    data.set('EMAIL', email);

    const response: AxiosResponse = await this.instance.request({
      url,
      method: 'POST',
      data,
    });

    return response;
  }
}

export default new MailchimpApi(process.env.AUDIENCE_ID || 'e8b52f5a93');
