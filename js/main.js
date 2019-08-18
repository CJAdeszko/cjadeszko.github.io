const alertDiv = document.querySelector('.alert');
const undeployedBtn = document.querySelector('.undeployed-btn');

undeployedBtn.addEventListener('click', serverAlert);

//display alert for non-deployed apps
function serverAlert(){
  alertDiv.style.display = "block";
}

//hide alert for non-deployed apps
function closeAlert(){
  alertDiv.style.display = "none";
}
