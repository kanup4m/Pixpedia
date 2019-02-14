document.querySelector(".button").addEventListener('click', function() {
        var value = document.querySelector(".text-box").value;
        key = "11604924-9e671a5a78eb9948f30e93eba";
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var start = "https://pixabay.com/api/?key="
        var middle = "&q=";
        var rest = "&image_type=photo&pretty=true";
        var url = start + key + middle + value + rest;
        $.getJSON(url)
        	.done(function(data) {
            var img = data.hits[0].webformatURL;
            var img1 =data.hits[1].webformatURL; 
            var img2 =data.hits[2].webformatURL; 
            var img3 =data.hits[3].webformatURL; 
            var img4 =data.hits[4].webformatURL; 
            var img5 =data.hits[5].webformatURL; 
            var img6 =data.hits[6].webformatURL; 
            var img7 =data.hits[7].webformatURL; 
            var img8 =data.hits[8].webformatURL; 



           	var  views = data.hits[0];
            console.log(url);
           	console.log(views);
            document.querySelector(".image").src = img;
            document.querySelector(".image1").src = img1;
            document.querySelector(".image2").src = img2;
            document.querySelector(".image3").src = img3;
            document.querySelector(".image4").src = img4;
            document.querySelector(".image5").src = img5;
            document.querySelector(".image6").src = img6;
            document.querySelector(".image7").src = img7;
            document.querySelector(".image8").src = img8;


        })
    .fail(function() {
        alert("Sorry, something went wrong")
    })
    // console.log(url);
})