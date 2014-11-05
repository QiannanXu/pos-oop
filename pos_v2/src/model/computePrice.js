// JavaScript Document

//计算购买商品的价格
var tempPrice = 0;//用于保存不促销需花费的价钱

function computeTotalPrice(products, count)
{
	var outputPriceStr = "";
	var totalPrice;
	
	for(var i=0;i<products.length;i++)
	{
		//购买商品的ID及购买数量
		var productID = products[i];
		var num = count[i];
		var item;
		
		for(var j=0;j<allItems.length;j++)
		{
			item = allItems[j];
			if(item.barcode == productID)
			{
				break;
			}
		}
		
		//计算价格
		totalPrice = computePrice(item, num);
		
		//名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
		outputPriceStr = outputPriceStr + "名称："+item.name+"，数量："+num+item.unit+"，单价："+toDecimal2(item.price)+"(元)，小计："+totalPrice+"(元)\n";
		
	}
	savePrice = tempPrice - sumPrice;
	
	return outputPriceStr;
}

function computePrice(item, num)
{
	var totalPrice = item.price * num;
	tempPrice += totalPrice;
	
	//判断是否有促销活动
	//主要promotions为数组，返回的是不同类型的促销活动及其id
	for(var i=0;i<promotions.length;i++)
	{
		var promtionTemp = promotions[i];
		if(promtionTemp.type == 'BUY_TWO_GET_ONE_FREE')
		{
			var promotionBarcodes = promtionTemp.barcodes;
			for(var j=0;j<promotionBarcodes.length;j++)
			{
				if(promotionBarcodes[j] == item.barcode)
				{
					totalPrice = totalPrice - item.price * parseInt(num/3);
				}
			}
		}
	}
	
	sumPrice += totalPrice;
	//处理小数点后两位
	totalPrice = toDecimal2(totalPrice);
	return totalPrice;
}

//强制保留2位小数，如：2，会在2后面补上00.即2.00    
function toDecimal2(x)
{   
    var f = parseFloat(x);    
    if (isNaN(f)) {    
        return x;    
    }    
    var f = Math.round(x*100)/100;    
    var s = f.toString();    
    var rs = s.indexOf('.');    
    if (rs < 0) {    
           rs = s.length;    
           s += '.';    
    }    
    while (s.length <= rs + 2) {    
         s += '0';    
    }    
	
    return s;    
}   


//计算赠送商品的数量
function sendProducts(products, count)
{
	var sendProductStr = "";
	var sendCount;
	for(var i=0;i<products.length;i++)
	{
		var productID = products[i];
		var num = count[i];
		var item;
		
		for(var j=0;j<allItems.length;j++)
		{
			item = allItems[j];
			if(item.barcode == productID)
			{
				break;
			}
		}
		
		sendCount = computeSendCount(item, num);
		//'名称：雪碧，数量：1瓶\n'
		if(sendCount != 0)
		{
			sendProductStr = sendProductStr + "名称："+item.name+"，数量："+sendCount + item.unit + "\n";
		}
	}
	
	return sendProductStr;
}

//计算赠送商品的数量
function computeSendCount(item, num)
{
	var sendCount = 0;
	for(var i=0;i<promotions.length;i++)
	{
		var promotionTemp = promotions[i];
		if(promotionTemp.type == 'BUY_TWO_GET_ONE_FREE')
		{
			var promotionBarcodes = promotionTemp.barcodes;
			for(var j=0;j<promotionBarcodes.length;j++)
			{
				if(promotionBarcodes[j] == item.barcode)
				{
					sendCount = parseInt(num/3);
				}
			}
		}
	}
	return sendCount;
}


//输出价格总计以及节省的价钱
function summary()
{
	//总计：51.00(元)\n
	//节省：7.50(元)\n
	return "总计："+toDecimal2(sumPrice)+"(元)\n"
			+"节省："+toDecimal2(savePrice)+"(元)\n";
}
 
