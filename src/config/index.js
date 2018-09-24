import axios from 'axios'

/* Your WordPress site URL, do not add http:// */
export let WPBlogSiteUrl = 'thl.bbqe.com'
/* default chinese, options: chinese english */
export let siteLanguage = 'chinese'
/* if true, the site mush be HTTPS protocol*/
const siteIsSafe = true
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! danger !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
if (siteIsSafe) {
  WPBlogSiteUrl = 'https://' + WPBlogSiteUrl
}else{
  WPBlogSiteUrl = 'http://' + WPBlogSiteUrl
}

export const apiUrl = axios.create({
  baseURL: WPBlogSiteUrl + '/wp-json/wp/v2/',
  headers: {
    'content-type': 'application/json',
  }
})