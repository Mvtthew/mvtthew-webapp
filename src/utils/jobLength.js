import moment from 'moment'

export const jobLength = (jobFrom, jobTo) => {
    const from = moment(jobFrom, 'MM.YYYY')
    const to = jobTo ? moment(jobTo, 'MM.YYYY') : moment()
    return moment.duration(to - from)
}
