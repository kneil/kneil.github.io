function getit () { 
$.get( "words.txt", function( data ) {
  words = data.split('\n');
  out = "";
  for ( i = 0 ; i < 10 ; i++ ) { 
	for ( j = 0 ; j < 100 ; j++ ) { 
		out+= " " + words[parseInt ( Math.random() * 5000 ) ];
	}
	out += "<br><br>";
   }
  $( ".result" ).html( out  );
})
};
