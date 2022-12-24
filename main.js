function arrayManipulation() {
    let wierdArray = ['inception','spiderman','tuesday'];
    let wierderArray = ['green','saturday','friday','wednsday'];
    wierderArray.reverse();
    let days = wierdArray.concat(wierderArray);
    let movies = days.splice(0,2);
    days.unshift('monday');
    days.splice(3,0,'thursday');
    let colors = days.pop();
    days.push('sunday');
    let weekend = days.splice(-2,2);
    console.log(movies);
    console.log(colors);
    console.log(weekend);
    console.log(days);
}
arrayManipulation();