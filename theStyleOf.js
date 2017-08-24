function theStyleOf(x){
 var s=[];	
 for(let p,v,m=o=getComputedStyle(x),i=m.length;i!==0;){
	v=o.getPropertyValue(p=o[--i]);
	//handleValue?
	s=s.concat([p,':',v,';\n']);
 };
 return s.join('');
}
//console.log(theStyleOf($0));
