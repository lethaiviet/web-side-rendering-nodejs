const sum = (a, b) => a + b

const toUpperCaseFirstLetter = str =>
    str.slice(0, 1).toUpperCase() + str.slice(1)

const formatFieldName = str =>
    str
        .split('_')
        .map(x => toUpperCaseFirstLetter(x.trim()))
        .join(' ')

export default {
    sum,
    toUpperCaseFirstLetter,
    formatFieldName,
}
