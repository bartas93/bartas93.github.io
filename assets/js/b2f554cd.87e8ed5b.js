"use strict";(self.webpackChunkeide_docs=self.webpackChunkeide_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","source":"@site/blog/index.md","title":"Hello, world.","description":"When it comes to social media, I\'m definitely more a reader than a writer type of person. Recently I\'ve felt a need to start creating content. Or, more like get back into doing it.","date":"2024-05-08T09:30:37.000Z","formattedDate":"May 8, 2024","tags":[{"label":"shorts","permalink":"/blog/tags/shorts"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"world","permalink":"/blog/tags/world"},{"label":"introduction","permalink":"/blog/tags/introduction"}],"readingTime":1.96,"hasTruncateMarker":true,"authors":[{"name":"Bartek Jab\u0142o\u0144ski","title":"Backend Cloud Developer","url":"https://bartas93.github.io","imageURL":"/images/bartek_jablonski_2.png","key":"bjab"}],"frontMatter":{"slug":"hello-world","title":"Hello, world.","authors":"bjab","tags":["shorts","hello","world","introduction"]},"nextItem":{"title":"Calculating TODO","permalink":"/blog/calculating-string-footprint"}},"content":"When it comes to social media, I\'m definitely more a reader than a writer type of person. Recently I\'ve felt a need to start creating content. Or, more like get back into doing it.\\r\\n\\r\\nThe last time I had a blog was more than 15 years ago. As a teenager, I used to run the \\"My IT News\\" WordPress site with, as you may expect, news around IT - especially the new consumer electronics products. While it didn\'t have much attention (as far as I remember, around ~5k unique visitors per month), I enjoyed doing it. But I had plenty of time and energy back then. Today I\'m struggling with both, so... I\'m starting a new blog! That makes sense, right?\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n### Why yet another blog\\r\\n\\r\\nNowadays, everyone has their own blog. Do I really need to become another wannabe influencer?\\r\\n\\r\\nNo. What I want to achieve is:\\r\\n\\r\\n- structure my knowledge and record what I\'ve learned recently,\\r\\n- try out new ways to increase productivity, stay motivated and avoid burnout,\\r\\n- improve my English (as a non-native English speaker),\\r\\n- develop self-discipline, reduce procrastination, and, as a result, save time to do the things mentioned above.\\r\\n\\r\\nSo, as you can see, it\'s mostly for me, but I hope you\'ll benefit from this as well.\\r\\n\\r\\n### What to expect\\r\\n\\r\\nWell, definitely shorter, more concise blog posts, like this one.\\r\\n\\r\\nWhile I have a few ideas for new blog posts in mind, I don\'t want to limit myself to just technical topics. Instead, I will probably touch on different areas of my interest, such as:\\r\\n\\r\\n- full-stack technical topics related to the technologies I use (Go, Kubernetes, React.js, JavaScript, TypeScript, GraphQL, gRPC...),\\r\\n- personal projects announcements,\\r\\n- new talks announcements\\r\\n- open source,\\r\\n- cool projects and apps I stumbled upon,\\r\\n- productivity,\\r\\n- personal growth (i.e. soft skills),\\r\\n- finance.\\r\\n\\r\\nYup, that\'s a lot - but we\'ll see how it goes.\\r\\n\\r\\nAt some point, I would also like to experiment with the form of the content. Videos, podcasts? Maybe one day...\\r\\n\\r\\n### Closing words\\r\\n\\r\\nPlease note that my previous blog posts published on different platforms won\'t be moved. There are just very few of them, though. To read them, see my profiles on [Medium](https://medium.com/@pkosiec) and [Dev.to](https://dev.to/pkosiec).\\r\\n\\r\\nIf you got to this point, then congratulations. Welcome to my blog \ud83d\udc4b"},{"id":"calculating-string-footprint","metadata":{"permalink":"/blog/calculating-string-footprint","source":"@site/blog/2024-05-08-String-JOL.md","title":"Calculating TODO","description":"Short:","date":"2024-05-08T00:00:00.000Z","formattedDate":"May 8, 2024","tags":[{"label":"jvm","permalink":"/blog/tags/jvm"},{"label":"jol","permalink":"/blog/tags/jol"},{"label":"footprint","permalink":"/blog/tags/footprint"},{"label":"string","permalink":"/blog/tags/string"}],"readingTime":0.915,"hasTruncateMarker":false,"authors":[{"name":"Bartek Jab\u0142o\u0144ski","title":"Backend Cloud Developer","url":"https://bartas93.github.io","imageURL":"/images/bartek_jablonski_2.png","key":"bjab"}],"frontMatter":{"slug":"calculating-string-footprint","title":"Calculating TODO","authors":"bjab","tags":["jvm","jol","footprint","string"]},"prevItem":{"title":"Hello, world.","permalink":"/blog/hello-world"}},"content":"### Short:\\n\\n- Na pami\u0119\u0107 obiektu String sk\u0142ada si\u0119 24 byte na metadane + ilo\u015b\u0107 znak\xf3w razy 1 byte lub 2 byte w zale\u017cno\u015bci od warto\u015bci coder\\n    - Metadane : mark word x2 (4 bytes x2 = 8 bytes), klass word (4 bytes), referencja do tablicy byte[] lub char[] (4 byte), hash (4 byte), hashIsZero (1 byte), coder (1 byte),  padding (2 byte)\\n- Obiekt String ma dodatkowW Stringu poza podstawowymi flagami w pami\u0119ci (mark word 4 bytes x2, klass word), referencj\u0105\\n- gdy `coder =1` to kodowanie UTF-16 (2 bytes na znak)\\n- gdy `coder = 0` to kodowanie LATIN-1 (1 byte na znak)\\n- hashIsZero jest to flaga kt\xf3ra m\xf3wi czy obliczenie hasha zosta\u0142o ju\u017c wykonane\\n\\n### JOL - String\\n\\nOd Java 9 u\u017cywamy Compact String czyli je\u015bli to mo\u017cliwe to u\u017cywamy kodowania LATIN-1 a jak nie to ustawiany jest coder=1 i u\u017cywamy UTF-16. \\n\\n(Przed Java 9 wszystko sprowadza\u0142o si\u0119 do char[] i ka\u017cda literka by\u0142a r\xf3wna 2 byte Utf-16.) \\n\\nJe\u015bli chocia\u017c jeden znak b\u0119dzie inny ni\u017c latin-1 (1 byte) to ka\u017cdy znak w Stringu jest kodowany w utf16 (2 byte)."}]}')}}]);