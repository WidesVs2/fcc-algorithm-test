# Free Code Camp.Org Algorithms Showcase

This is a site designed to showcase algorithms built to complete [Free Code Camp](http://www.freecodecamp.org) Javascript algorithms challenges. At completion, this app will allow the user to select a function from a list of choices, select a test case for this function, then run the algorithm. The result will be displayed in browser compared to the expected result.

This site utilizes a Node.js Express server with a MongoDb database. Client side is vanilla html, css, and javascript. 

## Usage

This app is free to use, however please credit [WidesVs2](https://www.github.com/WidesVs2), portfolio [here](https://www.mike-ogden.com). Thanks for checking this out!

### Set up

First, open a terminal in an empty directory then clone this repository
```
    git clone https://www.github.com/WidesVs2/fcc-algorithm-test.git
```

Then install node modules with
```
    npm install
```

You'll need to create a keys.js file in the config/ directory to store your MongoURI. 
```    
    cd config/ && touch keys.js
```

File should look like this
```
    dbPassword = 'mongodb+srv://<'Your User Name'>:<'Your Password'>@dev-test.pazwr.mongodb.net/<'DB Name'>?retryWrites=true&w=majority';

    module.exports = {
        mongoURI: dbPassword
    };
```

Also create a log/ directory in the root of your app to store server logs.
```
    mkdir log
```

After setup is complete, run the server in development mode
```
    npm run dev
```

Current project NOT setup for production, WIP

## Credits
First, thanks to [FreeCodeCamp.Org](https://www.freecodecamp.org) for the algorithm challenges.

Also, a lot of how I built the express server is based on various tutorials by [Traversy Media](https://www.github.com/Brad-Traversy). 

If interested in learning more about these topics, please check them out.

# WORK IN PROGRESS

This app is still in development. Although everything present functions in a local environment, it will not function in production out-of-box. Please configure usage per your host's requirements.