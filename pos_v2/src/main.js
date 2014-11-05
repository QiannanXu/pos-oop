//TODO: Please write code in this file.
var allItems = loadAllItems();
var promotions = loadPromotions();
var sumPrice = 0;
var savePrice = 0;


function printInventory(inputs)
{
	//products,count分别保存输入测试用例的商品种类和商品购买个数
	var products = new Array();
	var count = new Array();
	//处理输入，统计输入数组中商品的种类及购买个数
	processInputs(inputs, products, count);
	
	var output = '***<没钱赚商店>购物清单***\n'
				 +'打印时间：' +formateDateFunc()+'\n'
           		 +'----------------------\n'
				 +computeTotalPrice(products, count)
				 +'----------------------\n'
				 +'挥泪赠送商品：\n'
				 +sendProducts(products, count)
				 +'----------------------\n'
				 +summary()
				 +'**********************';
					 
	console.log(output);
		
}


