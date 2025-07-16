// key ki value print krne keliye 
// variable name["key"]
// second option variablename.key
// js automatically converts object keys into strings even if number
//  aslo converted into string
const post={
    username:"kajal",
    likes:150,
    dislike:2,
    share:31,
    tags:["@youth","@goodquotes","@motivation"]
}
console.log(post)
console.log(post["tags"])
console.log(post.likes)