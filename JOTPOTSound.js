/*

	JOTPOTSound
	  -By Jacob O'Toole

*/

var JOTPOTSound = {
	
	"soundsList" : [] ,
	
	"play" : function (trackToPlay,loopQ,volume,playFrom) {
		
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
		   this.soundsList.push(trackToPlay) ;
		   jps.soundsList = this.soundsList ;
		   
		}
		
		this.sounds[trackToPlay].audioElement.loop = loopQ ;
		this.sounds[trackToPlay].audioElement.volume = volume ;
		
		if (typeof playFrom !== "undefined") {
			
			this.sounds[trackToPlay].audioElement.currentTime = playFrom ;
			
		}
		
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
		
	} ,
	
	"pauseAll" : function () {
		
		var doing = 0 ;
		while (doing !== this.soundsList.length) {
			
			this.pause(this.soundsList[doing]) ;
			doing++ ;
			
		}
		
	}
	
} ;

var jps = {
	
	"soundsList": [],
	
	"play": function (trackToPlay,loopQ,volume,playFrom) {
		
		JOTPOTSound.play(trackToPlay,loopQ,volume,playFrom) ;
		
	},
	
	"pause": function (trackToPause) {
		
		JOTPOTSound.pause(trackToPause) ;
		
	},
	
	"pauseAll": function () {
		
		JOTPOTSound.pauseAll() ;
		
	}
	
} ;
