# OfflineDict
A client-side only website dictionary that makes it easy to write custom entries and create homemade dictionaries.

~~Actually a test project of [fomantic-UI](https://fomantic-ui.com/) and a practise of JQuery~~

# Demo
See [Github Page](https://xiaogenintendo.github.io/OfflineDict/)

The data used is _Ryujin Dictionary_ of an artificial language described [here](https://xiaogenintendo.github.io/2022/02/20/learn-new-Ryuujin/).

# Usage
## dict.js
### File Information
- `__version` is the current edition of the dictionary. Change this after a modification to the dictionary and all clients will be recached.
- `__dict` is the main dictionary file. It's an array of Word.
### Word
```js
{
    word:"帰る",
    pron:["かえ",""],
    otherForms:["還る 【かえる】","kaeru"],
    tags:["common","n5"],
    def:[
        {
            tags:["五る","vi"],
            main:"to return; to come home; to go home; to go back",
            sub:"See also {裏返る}", //just test. 裏返る doesnt have anything to do with 帰る
            example:[
                ["恋人よ、我に帰れ。","Lover, come back to me."]
            ]
        }
    ]
}
```
| Field      | Type      | Note                                                                                                                                                                                                                          |
|------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| word       | str       | The word to be displayed and entried. Please use the most common form.                                                                                                                                                        |
| otherForms | [str]     | Optional. Other forms of the word.                                                                                                                                                                                            |
| pron       | str/[str] | Optional. Pronunciation of the word shown as ruby above the word.  When pron is a string, it will be rubied as a whole.  When pron is a [str], the ruby will be applied one-by-one. Note, pron.length==word.length must hold. |
| tags       | [str]     | ID of the tags of this word. See `WordLabel`                                                                                                                                                                                  |
| def        | [Def]     | Definitions of this word. See `Def`                                                                                                                                                                                           |
### Def
```js
{
    tags:["五る","vi"],
    main:"to return; to come home; to go home; to go back",
    sub:"See also {裏返る}", //just test. 裏返る doesnt have anything to do with 帰る
    example:[
        ["恋人よ、我に帰れ。","Lover, come back to me."]
    ]
}
```

| Field   | Type        | Note                                                                                                 |
|---------|-------------|------------------------------------------------------------------------------------------------------|
| tags    | [str]       | ID of the tags of this word. See `DefLabel`                                                          |
| main    | str         | Main explanation                                                                                     |
| sub     | str         | Optional. Supplementary explanation. Use {word} to link to other words.                              |
| example | `[[str,str]]` | Optional. Example sentences. Each sentence is made up of source text([0]) and translation text([1]). |

## label.js
### File Information
- `wordLabel`
- `defLabel`
### WordLabel
```js
"common":{
    text:"Common Word",
    icon:"cloud sun",
    color:"green"
},
```
- key:`str`, ID of the label. Used to be referred to the label.
- text:`str`, the text to be displayed
- icon:`str`, the icon name for the icon. [Cheatsheet](https://fomantic-ui.com/elements/icon.html)
- color:`str`, the color name for the label. Can be one of `primary secondary red orange yellow olive green teal blue violet purple pink brown grey black`. Refer to [Fomantic Theming](https://fomantic-ui.com/usage/theming.html) for adding more colors.
### DefLabel
```js
"五る":{
    text:"Godan verb with ru ending",
    color:"yellow"
},
```
- key:`str`, ID of the label. Used to be referred to the label. Also it's displayed by default.
- text:`str`, the text to be displayed when hovered
- color:`str`, the color name for the label.
## Advanced Topic
TODO