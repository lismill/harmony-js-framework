export default {
  data: {
    title: '',
    username: 'leelean',
    name: '123',
  },
  onInit() {
    this.title = this.$t('strings.world')
  },
  handleClick() {
    console.log(123123)
    this.username === 'leeleanlean' ? (this.username = 'leelean') : (this.username = 'leeleanlean')
    const aBac = {}
    console.log(aBac)
  },
}
