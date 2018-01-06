import config from '../config/config'
export default class Route{

  constructor(){
    this.gcfig = new config()
    console.log(this.gcfig);
  }

  getUrl (name) {
    let resurl = this.gcfig.url
    let pram = this.gcfig.config[name]
    for (var val in pram) {
      resurl += val + '=' + String(pram[val]) + '&';
    }
    resurl = resurl.substring(0, resurl.length-1);
    return resurl;
  }
}