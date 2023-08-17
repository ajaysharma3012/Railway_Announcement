import eel
from gtts import gTTS
import playsound
import os


hindinumbers=['Shoonya','ek','do','teen','chaar','panch','chah','saat','aath','nau','dus',
'gyarah','barah','terah','chaudah','pandrah','solah','satrah','athaarah',
'unnees','bees','ikkees','baais','teis','chaubees','pachchees','chhabees','sattaees',
'athaees','unatees','tees','ekkatees','battees','taintees','chauntees','paintees','chhatees',
'saintees','adtees','untaalees','chalees','ektaalees','byalees','taintalees',
'chawalees','paintalees','chhiyalees','saintalees','adtalees','udanchaas','pachaas','ekkyavan','baawan',
'tirepan','chauwan','pachapan','chhappan','sattavan','atthaavan','unsath','saath']

eel.init('App')

eel.start('index.html', size=(750,600), position=(270,50))


def playaudio(audio_string):
    tts=gTTS(text=audio_string, lang='en', tld='co.in', slow=False)

    audio_file="speech.mp3"
    
    tts.save(audio_file)
    playsound.playsound(audio_file)
    os.remove(audio_file)

@eel.expose
def playannouncement(data):
        playsound.playsound('sound/1.mp3')
        
        playsound.playsound('sound/'+hindinumbers[int(list(data[0])[0])]+'.mp3')
        playsound.playsound('sound/'+hindinumbers[int(list(data[0])[1])]+'.mp3')
        playsound.playsound('sound/'+hindinumbers[int(list(data[0])[2])]+'.mp3')
        playsound.playsound('sound/'+hindinumbers[int(list(data[0])[3])]+'.mp3')
        playsound.playsound('sound/'+hindinumbers[int(list(data[0])[4])]+'.mp3')
       
        playaudio(data[1])
        playsound.playsound('sound/2.mp3')
        playaudio(data[2])
        playsound.playsound('sound/3.mp3')
        playaudio(data[3]),
        playsound.playsound('sound/4.mp3')
        
        playaudio(data[4])
        playsound.playsound('sound/5.mp3')
        playaudio(data[5])
        playsound.playsound('sound/'+hindinumbers[int(data[6])]+'.mp3')
        playsound.playsound('sound/6.mp3')
        playsound.playsound('sound/'+hindinumbers[int(data[7])]+'.mp3')
        playsound.playsound('sound/7.mp3')
        playsound.playsound('sound/'+hindinumbers[int(data[8])]+'.mp3')
        playsound.playsound('sound/8.mp3')
        playsound.playsound('sound/'+hindinumbers[int(data[9])]+'.mp3')
        playsound.playsound('sound/9.mp3')

        
    
 
#playannouncement()   

