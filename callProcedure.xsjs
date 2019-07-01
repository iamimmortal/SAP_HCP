/*eslint-disable no-console, no-alert*/
function callProcedure(){
$.response.contentType = "text/plain";
try{
  var oConnection = $.hdb.getConnection();   
  
  var getQuestionByRole = oConnection.loadProcedure("call","MYSURVEY.DEV.MySurvey::sqljoin");
  
  getQuestionByRole(1);
}
catch(oError)
{
    $.response.setBody(oError.toString());
}
finally{
    if(oConnection)
    {
oConnection.commit();
oConnection.close();
    }
}
}