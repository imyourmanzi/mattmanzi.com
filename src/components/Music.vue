<template>
    <div id="musicContainer" class="container">
        <img id="music-header" :src="resolve('music-header@0-33x.png')"/>
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
        <div class="spacing"></div>
        <div id="musicRow" class="contentRow">
            <div class="visual">
                <iframe width="100%" height="350" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/official-myx&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_artwork=true&amp;show_comments=false&amp;show_playcount=false&amp;show_user=true&amp;hide_related=true&amp;visual=true&amp;start_track=0"></iframe>
            </div>
            <div class="text">
                <h1 class="logo">Music</h1>
                <p>
                    sgfdg jlksgjldfk sjgdfksl;gjksdfl; g jdsfklgsdfjgh sdfghsdfjkghdfgfsdgjfdsh kjdf jdfjsghlkjdfshgldf ljdfgh ljdshgdlfjks hsfljtgr ruthreog hgsdf ghdsfg herljthg lhaslu ghshg ;gf gfdfsgfg dfsgfdlkghj fghdfgf hf wioej bgire ioj iua hawiu gnfkhurt awkjbrg ljkg uairwih trouitha oghag gjfghraeg. dsafh sajfh sajkh asg sjkfh askhfjklsa hgkjha kjlsdafh ksdfh ajks haskjhgjk safh jksalhf fkjgh jklfgh ag hauiwerhtiaufajsfh aui fsuifh iuaharahga kjgh aifh kbvka  fsb sahfhahfiauh aiuh kajshf ksahdf skfg skjf sdf.
                </p>
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

.logo {
    font-family: "LeckerliOne";
    font-size: 2.5em;
    font-weight: lighter;
}

.contentRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.text {
    max-width: 45em;
    margin: 0 2em;

    text-align: justify;
    text-indent: 30px;
}

.visual {
    width: 100%;
    max-width: 25em;
    padding: 0 2em;
}
</style>
