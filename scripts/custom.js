//alert("hi");
// Add your javascript here
const birthDay = new Date("29-May-1984");
const firstDayAtJob = new Date("28-Aug-2006");
const date = new Date();

getAge=()=>{
  var totalYears = date.getFullYear() - birthDay.getFullYear();
  if(date.getMonth() < birthDay.getMonth() || (date.getMonth() == birthDay.getMonth() && date.getDate() < birthDay.getDate())){
    totalYears = totalYears - 1;
  }    
  return totalYears
}

getExperience=()=>{
  var totalYears = date.getFullYear() - firstDayAtJob.getFullYear();
  var months = 0;
  if(date.getMonth() < firstDayAtJob.getMonth() || (date.getMonth() == firstDayAtJob.getMonth() && date.getDate() < firstDayAtJob.getDate())){
    totalYears = totalYears - 1;
  }    
  if(date.getMonth() > firstDayAtJob.getMonth()){
    months = date.getMonth() - firstDayAtJob.getMonth();
  }    
  else{    
    months = 4 + date.getMonth();
  }
  if(date.getDate() > firstDayAtJob.getDate())
    months = ++months;
  var monthText = "months"
  if(months == 1) monthText = "month";
  return totalYears + " years & " + months + " " + monthText;
}
