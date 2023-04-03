# Una Imagen Bot⋆｡°✩
Una Imagen Bot is a Twitter bot that tweets non-visual images. Its purpose is for the user to explore their own visual landscape through their imagination. This project proposes a space free of representations and imaginaries already constructed by the media. 

## How does it works?
The script reads the provided texts and selects all sentences starting with "de" or "del" to the next non-string char. It then filters the sentence based on whether the last word makes sense in the context of the Spanish spoken language. When it has all the sentences, it joins them to the string "Una imagen" and stores them in an array. The bot randomly selects some of these phrases every so often and tweets them.

<https://twitter.com/unaimagenbot>

## Flowcharts

```mermaid
---
title: bot.js
---

flowchart TB
  A1([start]) --> A2(tweetIt)
  A2 --> A3[["getImage(images)"]]
  A3 --> A4{"isTweeted(tweet)"}
  A4-- yes --> A1
  A4-- no --> A5[/twit.post/]
  A5 --> A6(saveTweetedImg)
  A6 --> A7([end])
  A7 -- "interval" --> A1
  classDef bot fill: pink,color:black,stroke:black
  class A1,A2,A4,A5,A6,A7 bot;
  style A3 fill:#82abed,color:black,stroke:black

````

```mermaid
---
title: buildImages.js
---

flowchart TB
  B1([start]) --> B2[/getText/]
  B2 --> B3[["findSentences(text)"]]
  B3 --> B4("createImages(sentences)")
  B4 --> B5(["end <br> set images[]"])
  classDef imgs fill:#82abed,color:black,stroke:black
  class B1,B2,B3,B4,B5 imgs;
````
<hr>
<br>
