// JavaScript Document
function formateDateFunc()
{
	var currentDate = new Date(),
            year = dateTrans(currentDate.getFullYear()),
            month = dateTrans(currentDate.getMonth() + 1),
            date = dateTrans(currentDate.getDate()),
            hour = dateTrans(currentDate.getHours()),
            minute = dateTrans(currentDate.getMinutes()),
            second = dateTrans(currentDate.getSeconds());
			
     return year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
}


function dateTrans(num)
{
	return (num<10)?'0'+num:num;
}