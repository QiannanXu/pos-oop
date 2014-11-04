//TODO: Please write code in this file.
var allItems = loadAllItems();
var promotions = loadPromotions();

function printInventory(inputs)
{
	//products,count分别保存输入测试用例的商品种类和商品购买个数
	var products = new Array();
	var count = new Array();
	//处理输入，统计输入数组中商品的种类及购买个数
	processInputs(inputs, products, count);
	
	
	
	computeTotalPrice(products, count);
	
	var output = '***<没钱赚商店>购物清单***\n' +
				 '打印时间：' +formateDateFunc()+'\n' +
           		 '----------------------\n';
	
				 
	console.log(output);
	
	
}




function computeTotalPrice(products, count)
{
	var outputPriceStr = "";
	for(var i=0;i<products.length;i++)
	{
		//购买商品的ID及购买数量
		var productID = products[i];
		var num = count[i];
		var item;
		
		for(var j=0;j<allItems.length;j++)
		{
			item = allItems[j];
			if(item.getBarcode() == productID)
			{
				break;
			}
		}
		
		//计算价格
		console.log(item.getName());
	}
}


