export default class config{
  constructor(){
    this.url = 'https://unitools.site/ytcc/app/view/data?'
    this.config =
    {
      "Articlelist": { 
        "viewid": "xcx-list",
        "pageIndex": 0,
        "pageSize": 4
      },
      "imageshow": {
        "viewid": "xcx-piclb"
      },
      "imagetypesetting": {
        "viewid": "xcx-list",
        "pageIndex": 0,
        "pageSize": 4
      }
    }
  }
}
  // getUrl (pram) {
  //   let resurl = this.url
  //   for (var val in pram) {
  //     resurl += val + '=' + String(pram[val]) + '&';
  //   }
  //   resurl = resurl.substring(0, resurl.length-1);
  //   return resurl;
  // }


