let xhr = new XMLHttpRequest();

xhr.open("GET",'http://dummy.restapiexample.com/api/v1/employees', true);


xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
      console.log(`Complete: ${xhr.status} ${xhr.statusCheck}`);
    }else{
        console.log(`Done, got ${xhr.response.length} bytes`);
    }
  };
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); 
    }
  
  };
  
  xhr.onerror = function() {
    console.log("Request failed");
  };