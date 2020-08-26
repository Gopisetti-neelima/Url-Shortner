function submitForm()
{
	var shorturl;
	var keyval = document.getElementById("custkey").value;
	var choice=document.getElementById("ckchoice");
	var proceed = true;
	if(choice.checked==true)
	{
		if( keyval!=""){
			proceed = isValidCustomKey();
		}
		else{
			proceed = false;
			alert("Custom Key Option selected but no value entered");
		}
	}
	
	if(proceed){
		axios.post('https://jsonplaceholder.typicode.com/posts', {
		    title: 'mullapandi',
		    body: 'sample',
		    userId: 21
		  })
		  .then(response => {
		    console.log(response.data);
		})
		var result=document.getElementById("result");
		document.getElementById("rurl").innerHTML="Generated link : <a href='".concat("xyz","'>xyz</a>");
		result.style.visibility="visible";
	}
}

function isValidCustomKey()
{
	var keyval = document.getElementById("custkey").value;
	axios.get('https://api.fyle.cc/api/url/',{
		headers: {
			'Authorization' : `token ylM9l6qiAUcTz0S8C3M9bUqsTDnbjQRDHRcrBZIOmeMQBAS1VrGW33w1QwGVTF1gTgYJSGJNiUuHCmI6`
		}
	})
  .then((response) => {
  	console.log(response.data['body'])
    //isexists=response.data;
  })
  .catch((error) => {
  	console.log(error)
  })
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