function submitForm()
{
	var shorturl;
	if(isValidCustomKey()){
		axios.post('https://jsonplaceholder.typicode.com/posts', {
		    title: 'mullapandi',
		    body: 'sample',
		    userId: 21
		  })
		  .then(response => {
		    console.log(response.data['body']
		    //shorturl=response.data['body']
		    );
		})
		var result=document.getElementById("result");
		document.getElementById("rurl").innerHTML="Generated link : <a href='".concat("xyz","'>xyz</a>");
		result.style.visibility="visible";
	}
	
}

function isValidCustomKey()
{
  axios.get('https://jsonplaceholder.typicode.com/posts?id=20')
  .then(response => {
    console.log(response.data);
  })
  return true;
}

function usekey(){
	var choice=document.getElementById("ckchoice");
	if(choice.checked==true){
		document.getElementById("custkey").style.display='inline-block';
	}
	else{
		document.getElementById("custkey").style.display='none';
	}
}

function copyToClipboard()
{
  var copyText = document.getElementById("userUrl");
  copyText.select();
  copyText.setSelectionRange(0, 1000); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}