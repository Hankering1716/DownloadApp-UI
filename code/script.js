

const currentDate = document.querySelectorAll(".date");

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const Data = new Date();

document.querySelectorAll('.date').forEach(node => node.innerHTML = Data.getDate() + " " + month[Data.getMonth()] + " " + Data.getFullYear());





// Get user country in order to translate site into his language (Not ready yet)


// const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
// const regionNamesInTraditionalChinese = new Intl.DisplayNames(['zh-Hant'], {
//   type: 'region',
// });

// console.log(regionNamesInEnglish.of('US'));
// console.log(regionNamesInTraditionalChinese.of('US'));



// document.getElementById("countryComputer").innerHTML =  regionNamesInEnglish.of(Intl.DateTimeFormat().resolvedOptions().timeZone) 
