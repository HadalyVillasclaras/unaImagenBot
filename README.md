# Una Imagen Bot⋆｡°✩
#### Una Imagen Bot is a Twitter bot that tweets non-visual images. 
Its purpose is for the user to explore their own visual landscape through their imagination. This project proposes a space free of representations and imaginaries already constructed by the media. 

### How does it works?
The script reads the provided texts and selects all sentences starting with "de" or "del" to the next non-string char. It then filters the sentence based on whether the last word makes sense in the context of the Spanish spoken language. When it has all the sentences, it joins them to the string "Una imagen" and stores them in an array. The bot randomly selects some of these phrases every so often and tweets them.

