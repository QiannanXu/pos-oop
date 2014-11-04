// JavaScript Document

//处理输入，统计输入数组中元素的种类及个数
function processInputs(inputs, products, count)
{
	var num = 1;
	var temp = null;
	var size = inputs.length;		
	
	for(var i=0, k=0;i<size;)
	{
		for(var j=i+1;j<size;j++)
		{
			if(inputs[i] == inputs[j])
			{
				num++;
			}
			else
			{
				break;
			}
		}
		
				
		products[k] = inputs[i];
		count[k] = num;
		
		i = i+num;
		k++;
		num = 1;
	}
	
	//处理所有products中的ID，因为有的ID不够标准
	for(var i=0;i<products.length;i++)
	{
		var temp = products[i];
		if(temp.indexOf('-') != -1)
		{
			var words = temp.split('-');
			products[i] = words[0];
			count[i] = words[1];
			
		}
	}
}