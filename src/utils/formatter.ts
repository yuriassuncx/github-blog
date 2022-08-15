import moment from "moment"

export function relativeDateFormatted(date: string) {
    return moment(date).fromNow();
}