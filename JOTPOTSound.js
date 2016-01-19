/*

	JOTPOTSound
	  -By Jacob O'Toole

*/

var JOTPOTSound = {
	
	"play" : function (trackToPlay,loopQ,volume) {
		
		if (typeof this.sounds === "undefined") {
			
			this.soundDiv = document.createElement("div") ;
			this.soundDiv.id = "JOTPOTSound" ;
			//this.soundDiv.style.display = "none" ;
			//document.body.appendChild(this.soundDiv) ;
			
			this.sounds = {} ;
			
		}
		
		if (typeof this.sounds[trackToPlay] === "undefined") {
			
		   var newSound = document.createElement("audio") ;
		   newSound.src = trackToPlay ;
		   newSound.preload = "auto" ;
		   //this.soundDiv.appendChild(newSound) ;
		   this.sounds[trackToPlay] = {
			   
			   "audioElement" : newSound
			   
		   } ;
		   
		}
		
		this.sounds[trackToPlay].audioElement.loop = loopQ ;
		this.sounds[trackToPlay].audioElement.volume = volume ;
		this.sounds[trackToPlay].audioElement.play() ;
		
	} ,
	
	"pause" : function (trackToPause) {
		
		if (typeof this.sounds === "undefined") {
			
			this.soundDiv = document.createElement("div") ;
			this.soundDiv.id = "JOTPOTSound" ;
			//this.soundDiv.style.display = "none" ;
			//document.body.appendChild(this.soundDiv) ;
			
			this.sounds = {} ;
			
		}
		
		if (typeof this.sounds[trackToPause] === "undefined") {
			
		   var newSound = document.createElement("audio") ;
		   newSound.src = trackToPause ;
		   newSound.preload = "auto" ;
		   this.soundDiv.appendChild(newSound) ;
		   this.sounds[trackToPause] = {
			   
			   "audioElement" : newSound
			   
		   } ;
		   
		}
		
		this.sounds[trackToPause].audioElement.pause() ;
		
	}
	
} ;

var jps = {
	
	"play" : JOTPOTSound.play ,
	"pause" : JOTPOTSound.pause 
	
} ;