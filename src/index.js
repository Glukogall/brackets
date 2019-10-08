module.exports = function check(str, bracketsConfig) {
  let st=str.split('');
  let arr=[];
  for (let i=0; i<st.length; i++){               //перебираем строку-массив
    
    for (let e=0; e<bracketsConfig.length; e++){ //перебираем конфиг
      
      if (st[i]==bracketsConfig[e][0]){          //проверяем открыта ли скобка?
        
        if (bracketsConfig[e][0]==bracketsConfig[e][1]){ //проверяем на идентичность
          if (arr.indexOf(bracketsConfig[e][0])!=-1){
          arr.pop()}
          else {arr.push(st[i])}
        }
        else {arr.push(st[i]);                          //закидываем в массив
        }
      }
      else if(st[i]==bracketsConfig[e][1]){
        if (arr.lastIndexOf(bracketsConfig[e][0])==(arr.length-1)){
          arr.pop();
        }
        else{
         return false;                                //удаляем из стекового массива
        }
      }
    }
  }
  if (arr.length==0){
    return true;
  }
  else {return false}
}
