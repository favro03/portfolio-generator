const fs = require('fs');
const generatePage = require('./src/page-template');
const profileDataArgs = process.argv.slice(2);
const [names, github] = profileDataArgs;


//or it can look like this:
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];


/*console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    //This...
    for(let i = 0; i<profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }
    console.log('===============');
    //is the same as this...
    profileDataArr.forEach((profileItem)=>{
        console.log(profileItem)
    });
    console.log('================');
    //is the same as this....
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/



fs.writeFile('index.html', generatePage(names, github), err =>{
    if (err) throw new Error(err);
    
    console.log('Portfolio complete! Check out index.html to see the output!');
});