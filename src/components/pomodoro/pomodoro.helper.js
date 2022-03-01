export function displayMinutes (focusTime){
    return focusTime<10 ? `0${focusTime}`:focusTime
}

export function displaySeconds(seconds){
    return seconds<10 ? (seconds<0 ?'00':`0${seconds}`):seconds;
}


export function backgroundClass(isBreak){
    return isBreak ? 'breakBackground' : 'workBackground';
}

export function controlTime(focusTime,seconds,isBreak,breakTime,repeatTime){
    if(seconds === 0){
        if(focusTime!==0 && focusTime>0){
                return {
                focusTime:focusTime-1,
                seconds : 59
                }    
        }else{
            if(isBreak===false){
                
                  return{
                    focusTime:breakTime,
                    seconds:0,
                    isBreak:true
                }
            }else{
              
                  return{
                    focusTime:repeatTime,
                    seconds:0,
                    isBreak:false,
                }
            }
        }
    }else{
          return{
          seconds : seconds-1
          }
      
    }
}

export function reset(){
    return {
        focusTime:25,
        seconds:0,
        isBreak:false,
        isHandled:false,
        repeatTime:25
    };
}