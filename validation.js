//bug fixing
function validation(formName,formele){   
    var error='';
    var functions={
        regExecute:function(val,exp){
            pattern= new RegExp(exp);
          if(pattern.test(val)){
             
              return true;
          }          
          return false;
        },
        empty:function(val){
            if(!this.regExecute(val,'([^$])')){               
                error='Field should not empty';
                return false;
            }
            return true;
        },
        
        email:function(val){            
            if(!this.regExecute(val,'^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')){               
                error='Email is not valid';
                return false;
            }
            return true;              
        },
        alpha:function(val){
            if(!this.regExecute(val,'^([a-zA-Z])+$')){               
                error='only alphacharacters allowed';
                return false;
            }
            return true;  
        },
        max25:function(val){
            if(!this.regExecute(val,'^([a-zA-Z])+$')){               
                error='Maximum characters will be 25';
                return false;
            }
            return true;  
        },
        max15:function(val){
            if(!this.regExecute(val,'^([a-zA-Z])+$')){               
                error='Maximum characters will be 15';
                return false;
            }
            return true;  
        },
        number:function(val){
            if(!this.regExecute(val,'^([0-9])+$')){               
                error='only numbers valid';
                return false;
            }
            return true;  
        },
        mobile:function(val){
            if(!this.regExecute(val,'^([1-9]){10}')){               
                error='Moile no should be minimum 10 characters';
                return false;
            }
            return true;  
        },
        password:function(val){
            if(!this.regExecute(val,'^([1-9]){10}')){               
                error='not valid';
                return false;
            }
            return true;  
        },
        file:function(val){
            val=val.toLowerCase();
            if(!this.regExecute(val,'([^\s]+(\.(jpg|png|gif|bmp))$)')){
                error="only .jpg,png,gif,bmp files!!";
                return false;
            }
                return true;
        }
    };
    try{
        form=document.forms[formName];            
        for(ele in formele){            
            org_ele=document.forms[formName][formele[ele]['0']];
            val=org_ele.value;            
             error_ele=document.getElementById('error_'+formele[ele]['0']);
            if(!functions[formele[ele]['1']](val)){               
                error_ele.innerHTML='*'+error;
                error_ele.style.display='inline';                                
                org_ele.focus();
                alert(error);
                return false;
            }            
            else{
                error_ele.style.display='none';                                
            }
        }
       return true;
    }
    catch(e){
        alert(e.message);
        return false;
    }
    return false;
}

