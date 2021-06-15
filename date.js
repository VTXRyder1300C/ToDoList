
exports.getDate = getDate;

function getDate() {
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    let today = new Date();

    return today.toLocaleDateString("en-US", options);
}

//make it simplier and easier to read: 

exports.getDay = function() {
    let options = {
        weekday: 'long'
    };

    let today = new Date();
    
    return today.toLocaleDateString("en-US", options);
}