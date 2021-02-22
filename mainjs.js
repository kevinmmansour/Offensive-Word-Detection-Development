var DATA = [];
var SHOW = [];
var a ;

function myMethod()
{
  var c=document.getElementById('data').value.trim();
  if(c=='')
  {
      alert("Please Enter The Value");
  }
  else
  {
  SHOW.push(c);
  a=filter.clean(c);
  DATA.push(a);
  document.getElementById('s').innerHTML="";
  var Id=DATA.length;
  for(var i=Id-1; i>=0;i--)
  {
      document.getElementById('s').innerHTML+="<h3>"+DATA[i]+"</h3><br>";
      document.getElementById('data').value='';
  }
}
}