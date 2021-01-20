var axios = require('axios'),
moment = require('moment'),
pra = [];
module.exports = async (username,year) => {
if(!username) throw Error('Username not found')
else if(year < 2013) throw Error('Hacktoberfest started in 2013 must be equal or above 2013!')
var data = await axios.get(`https://api.github.com/search/issues?per_page=1000&q=-label:invalid+created:${year}-09-30T00:00:00-12:00..${year}-10-31T23:59:59-12:00+type:pr+is:public+author:${username}`)
data.data.items.map(prs => pra.push({name:prs.title , time : moment(prs.created_at).format("DD MMMM YYYY") }))
return {
login:username,
no: data.data.total_count,
prs:pra,
work:Work(data),
}}
function Work(data){
if(data.data.total_count>=4) return ' Did A Good Work '
else return ` Didn't Complete the challenge Try Next Time `
}