import http from '@system.fetch';
import dayjs from 'dayjs';

export default {
  data: {
    title: '',
    username: 'leelean',
    name: '123',
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    lists: [],
  },
  onInit() {
    this.title = this.$t('strings.world');
  },
  openDialog() {
    this.$element('dialogId').show();
  },
  async handleClick() {
    console.log(this);
    console.log('xxxxxx:::res:::', 123123);
    this.username === 'leeleanlean' ? (this.username = 'leelean') : (this.username = 'leeleanlean');
    http.fetch({
      url: 'https://syjcfcx.cn/api/v1/opendata-shanghai-house-sell?page=1&size=2',
      responseType: 'json',
      success: (res) => {
        console.log('res:success:data', JSON.stringify(res.data));
        console.log('res:success', JSON.stringify(res));
        this.lists = res.data.data.list;
        console.log('res:success:lists:', this.lists);
      },
      fail(error) {
        JSON.stringify('res:fail', error);
      },
      complete() {
        console.log('res:complete');
      },
    });
  },
};
