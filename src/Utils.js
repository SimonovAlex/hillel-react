export const secondToMinutes = (duration) => {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";


    if(hrs <= 9){
        ret += "0" + hrs + ":"
    }
    else {
        ret += hrs + ":"
    }

    if(mins <= 9){
        ret += "0" + mins + ":"
    }
    else {
        ret += mins + ":"
    }

    if(secs <= 9){
        ret += "0" + secs
    }
    else {
        ret += secs
    }

    // ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    // ret += "" + secs;
    return ret;
}