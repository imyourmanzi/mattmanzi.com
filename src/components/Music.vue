<template>
    <div id="musicContainer" class="container">
        <!-- <img id="music-header" :src="resolve('music-header@0-33x.jpg')"/> -->
        <div id="parCansHeader">
            <img class="parCans exclude" :src="resolve('par-cans-left-fade.svg')" />
            <!-- <img class="parCans" :src="resolve('myx-logo.svg')"/> -->
            <img class="parCans" :src="resolve('par-cans-right-fade.svg')" />
        </div>
        <!-- <div class="spacing"></div> -->
        <div id="musicRow" class="contentRow">
            <div class="visual">
                <iframe width="100%" height="250" src="https://www.mixcloud.com/widget/follow/?u=%2Fofficial_myx%2F&hide_followers=1" frameborder="0" ></iframe>
            </div>
            <div class="text">
                <h1 class="logo">Music</h1>
                <p>
                    sgfdg jlksgjldfk sjgdfksl;gjksdfl; g jdsfklgsdfjgh sdfghsdfjkghdfgfsdgjfdsh kjdf jdfjsghlkjdfshgldf ljdfgh ljdshgdlfjks hsfljtgr ruthreog hgsdf ghdsfg herljthg lhaslu ghshg ;gf gfdfsgfg dfsgfdlkghj fghdfgf hf wioej bgire ioj iua hawiu gnfkhurt awkjbrg ljkg uairwih trouitha oghag gjfghraeg. dsafh sajfh sajkh asg sjkfh askhfjklsa hgkjha kjlsdafh ksdfh ajks haskjhgjk safh jksalhf fkjgh jklfgh ag hauiwerhtiaufajsfh aui fsuifh iuaharahga kjgh aifh kbvka  fsb sahfhahfiauh aiuh kajshf ksahdf skfg skjf sdf.
                </p>
            </div>
        </div>
        <div class="spacing"></div>
        <div id="aboutRow" class="contentRow">
            <div class="text">
                <h1 class="logo">About</h1>
                <p>
                    sgfdg jlksgjldfk sjgdfksl;gjksdfl; g jdsfklgsdfjgh sdfghsdfjkghdfgfsdgjfdsh kjdf jdfjsghlkjdfshgldf ljdfgh ljdshgdlfjks hsfljtgr ruthreog hgsdf ghdsfg herljthg lhaslu ghshg ;gf gfdfsgfg dfsgfdlkghj fghdfgf hf wioej bgire ioj iua hawiu gnfkhurt awkjbrg ljkg uairwih trouitha oghag gjfghraeg. dsafh sajfh sajkh asg sjkfh askhfjklsa hgkjha kjlsdafh ksdfh ajks haskjhgjk safh jksalhf fkjgh jklfgh ag hauiwerhtiaufajsfh aui fsuifh iuaharahga kjgh aifh kbvka  fsb sahfhahfiauh aiuh kajshf ksahdf skfg skjf sdf.
                </p>
            </div>
            <div class="visual">
                <img :src="resolve('myx-logo.svg')"/>
            </div>
        </div>
</iframe>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'music',
    computed: {
        ...mapGetters([
            'resolve'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
}

#parCansHeader {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* align-items: flex-start; */
}

.parCans {
    height: 12.4em;
    width: auto;
}

.logo {
    font-family: "Leckerli One", cursive;
    font-size: 2.5em;
}

.contentRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#musicRow {
    flex-wrap: wrap-reverse;
}

.text {
    max-width: 42em;
    margin: 0 2em;

    text-align: justify;
    text-indent: 30px;
}

.visual {
    width: 100%;
    max-width: 23em;
    margin: 0 2em;
}

@media screen and (max-aspect-ratio: 767/1024) {

    #parCansHeader {
        justify-content: center;
    }

    .exclude {
        display: none;
    }

}
</style>
