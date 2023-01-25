import moment from "moment";

function dateFormat(data) {

    return moment(new Date(data).getTime()).format('HH:mm');;

}

export {

    dateFormat

}
