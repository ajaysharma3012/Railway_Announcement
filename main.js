function bindtime() 
{
    var option = ''
    for (var i = 1; i <= 24; i++)
    {
        option += '<option value= "' + i + '">' + i + '</option>';
    }
    var ddlhouroptions = '<option value="Select Hour" >Select Hour</option>' + option
    document.getElementById("ddlhour").innerHTML = ddlhouroptions;
    
    var ddllatehouroptions = '<option value="Select LateHour" >Select LateHour</option>' + option
    document.getElementById("ddllatehour").innerHTML = ddllatehouroptions;
    option = ''
 for (var i = 1; i <= 59; i++)
 {
    option += '<option value= "' + i + '">' + i + '</option>';
 }
 var ddlminuteoptions = '<option value="Select Minute" >Select Minute</option>' + option
 document.getElementById("ddlminute").innerHTML = ddlminuteoptions;

 var ddllateminuteoptions = '<option value="Select LateMinute" >Select Late Minute</option>' + option
 document.getElementById("ddllateminute").innerHTML = ddllateminuteoptions;
}
bindtime();

function onactivityselect()
{
 activity=document.getElementById("selectactivity").value;
 if (activity==1)
 {
    document.getElementById("ddllatehour").style.display="none";
    document.getElementById("ddllateminute").style.display="none";
    document.getElementById("txtviagoing").style.display="none";
    document.getElementById("txtplatform").style.display="inline";
 }
 else if (activity==2)
 {
    document.getElementById("ddllatehour").style.display="inline";
    document.getElementById("ddllateminute").style.display="inline";
    document.getElementById("txtviagoing").style.display="inline";
    document.getElementById("txtplatform").style.display="none";
 }
}


function playtrainannouncement()
{

   data=createdata();
   if(activity=='1')
        
   {
      eel.playannouncement(data);
   }
   else if(activity=='2')
   {

   }
}

function createdata()
{
   var data=[];
   var trainnumber=document.getElementById("txttrainnumber").value
   var viacoming=document.getElementById("txtviacoming").value
   var source=document.getElementById("txtsource").value
   var viagoing=document.getElementById("txtviagoing").value
   var destination=document.getElementById("txtdestination").value

   var trainname=document.getElementById("txttrainname").value
   var concattrainname=trainnumber+' '+viagoing+' '+source+' '+viagoing+' '+destination+' '+trainname
   var hour=document.getElementById("ddlhour").value
   var minute=document.getElementById("ddlminute").value
   if(activity=='1')
   {
      var platform=document.getElementById("txtplatform").value
      data=[trainnumber,viacoming,source,viagoing,destination,trainname,concattrainname,hour,minute,platform]
   }
   else if (activity=='2')
   {
      var viagoing=document.getElementById("txtviagoing").value
      var latehour=document.getElementById("ddllatehour").value
      var lateminute=document.getElementById("ddllateminute").value
      data=[source,viacoming,destination,trainnumber,trainname,concattrainname,hour,minute,platform]
   } 
}
onactivityselect();
