export function formatDate(date) {
        if (date) {
         let time = date.split(' ')[1];
     
         return time
     
        } else {
            return 'No data found'
        }
     
     }

// export const groups = ((items) => {
//     const byDay = (item) => moment(item.obsTimeLocal).format('MMM DD YYYY'),
//         forHour = (item) => byDay(item) + ' ' + moment(item.obsTimeLocal).format('hh a'),
//         by6Hour = (item) => {
//             const m = moment(item.obsTimeLocal);
//             return byDay(item) + ' ' + ['first', 'second', 'third', 'fourth'][Number(m.format('k')) % 6] + ' 6 hours';
//         },
//         forMonth = (item) => moment(item.x).format('MMM YYYY'),
//         forWeek = (item) => forMonth(item) + ' ' + moment(item.obsTimeLocal).format('ww');
//     return {
//         byDay,
//         forHour,
//         by6Hour,
//         forMonth,
//         forWeek,
//     };
// })();

// export function groupTimesBy(theList, unit = 'hour', timeParamName = 'obsTimeLocal'){
//     var toReturn = {};
    
//     for(let listItem of theList) {
//         const paramName = dayjs.unix(listItem[timeParamName]).startOf(unit).unix();
//         if(toReturn[paramName] == null) {
//             toReturn[paramName] = [];
//         }
//         toReturn[paramName].push(listItem);
//     }

//     return toReturn;
// }