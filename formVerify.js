(function(jq){
	jq.fn.extend({
		 'formV':function(){
			 //console.log("1");
			jq(this).find(':submit').click(function(){
				var flag=true;
				jq('form span').remove();
				var tag=jq('form :text,:password');
				tag.each(function(i){
					var length=jq(this).val().length;
					var type=jq(this).attr("type");
					var lebel=jq(this).attr('lebel');
					if(length==0){
						var tag=document.createElement('span');
						var name=jq(this).attr("lebel");
						tag.innerText=name+"不能为空！";
						jq(tag).css("backgroundColor","black");
						jq(tag).css("color","white");
						jq(tag).css("fontSize","12px");
						jq(this).after(tag);
						flag=false;
						return false;
					}
					else if(type=='password'&&length<6&&length>0){
						var tag=document.createElement('span');
						var name=jq(this).attr("lebel");
						tag.innerText=name+"长度必须大于六位数！";
						jq(tag).css("backgroundColor","black");
						jq(tag).css("color","white");
						jq(tag).css("fontSize","12px");
						jq(this).after(tag);
						flag=false;
						return false;
						}
					else if(lebel=='电话'){
							
						var patt=/^1[3456789]\d{9}$/;
						var torf=patt.test(jq(this).val());
						if(!torf){
							var tag=document.createElement('span');
							var name=jq(this).attr("lebel");
							tag.innerText=name+"手机号码格式不正确！";
							jq(tag).css("backgroundColor","black");
							jq(tag).css("color","white");
							jq(tag).css("fontSize","12px");
							jq(this).after(tag);
							flag=false;
							return false;
						}
					}
					
				})
				
				
				return flag;
			});
		}
	})
	
})($)