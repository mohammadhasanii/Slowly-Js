
# Slowly-Js is the Slowest Framework



It is a very slow framework that guarantees to respond to your requests in no more than 3 seconds. We use Express Framework as our core


![Logo](https://thumbs.dreamstime.com/b/concept-design-illustration-vector-slug-road-slowly-cartoons-isolated-white-background-cute-slug-road-slowly-cartoons-117918067.jpg)


## Installation

Install my-project with npm

```bash
  npm i slowly-js
```
    
## Usage/Examples

```javascript
const express=require('express') //Using Express as the core 

const app=express()


app.get('slowly-framework',function(req,res){
      
      return res.json({
            message:"Say hello to the world's slowest framework"
      })
})

//Response Time : 3000 Millisecond = 3 Second

app.listen(3000)

console.log("slowly-js running on port 3000")





!All tools and features of Express framework can be used in this framework

## Tech Stack

**Just Express Js


## Documentation

[Documentation](https://expressjs.com/en/starter/hello-world.html)

