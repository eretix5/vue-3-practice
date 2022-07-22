<template>
    <header>
        <div class="head">
            <a id="Site" href="">Типа сайт</a>
            <a id="about" href="">О нас</a>
            <input type="text" class="field" placeholder="Потерялся?" />
            <span class="right">
            <span title="Войти">

                <a class="LoginAndCreate" @click="showDialog">Войти</a>
                    <my-dialog v-model:show="dialogVisible">
                        <project-form3></project-form3>
                    </my-dialog>
            </span>
            <span title="Зарегистрироваться">
                <a class="LoginAndCreate" @click="showDialog2">Зарегистрироваться</a>
                <my-dialog v-model:show="dialogVisible2"><project-form4></project-form4></my-dialog>
            </span>
        </span>
        </div>
    </header>
    <center>
        <ul class="panel">
            <li id="mainP">
                <a href="/">Блин</a>
            </li>
            <li id="hz">
                <a href="">Зачем я это все делал?</a>
            </li>
            <li id="projects">
                <a href="/projects">Проекты</a>
            </li>
            <li id="aboutme">
                <a href="">Поставьте</a>
            </li>
            <li id="support">
                <a href="">61 пж</a>
            </li>

        </ul>
    </center>
    <footer>
    </footer>
</template>

<script>
    import MyDialog from "@/components/UI/MyDialog";
    import ProjectForm3 from "@/components/ProjectForm3";
    import ProjectForm4 from "@/components/ProjectForm4";
    export default {
        components: {
            ProjectForm3,
            ProjectForm4,
            MyDialog
        },
        name: "MainP",


    data() {
        return {
            dialogVisible: false,
            dialogVisible2: false
        }
    },
        methods: {
            showDialog() {
                this.dialogVisible = true;
            },
            showDialog2() {
                this.dialogVisible2 = true;
            },
        }
    }
</script>

<style scoped>


    header {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #817E7E;
        background-color: #575757;
    }

    header .head {
        width: 100%;
        height: 100px;
        font-family: "Segoe Print", sans-serif;
    }

    header .head #Site {
        padding-left: 15px;
        margin-right: 30px;
        font-size: 3em;
        color: #1c2545;
    }

    header .head #Site:hover {
        color: #AA8383;
    }

    header .head #about {
        margin-right: 30px;
        font-size: 2em;
        color: #C9C9C9;
    }

    header .head #about:hover {
        color: #F2F2F2;
    }

    header .head input[type=text].field {
        padding-left: 10px;
        width: 150px;
        height: 30px;
        border: 2px solid grey;
        border-radius: 20px;
        font-family: "Segoe Print", sans-serif;
        font-size: 1em;
    }

    header .head input[type=text].field:hover {
        border: 2px solid #FF0000;
        -moz-transition: all.6s ease;
        -webkit-transition: all.6s ease;
        -ms-transition: all.6s ease;
        -o-transition: all.6s ease;
    }

    header .head input[type=text].field:focus {
        border: 3px solid #FF0000;
        border-radius: 20px;
        box-shadow: 0 15px 15px -10px rgba(0,0,0, .5);
        -moz-transition: all.6s ease;
        -webkit-transition: all.6s ease;
        -ms-transition: all.6s ease;
        -o-transition: all.6s ease;
    }

    header .head span {
        margin-top: 15px;
        margin-right: 15px;
    }

    header .head span .LoginAndCreate {
        color: #C9C9C9;
        font-size: 1.5em;
    }

    header .head span .LoginAndCreate:hover {
        color: #F2F2F2;
    }

    center {
        width: 100%;
        min-height: 800px;
        background-color: #616161;
        padding-top: 4px;
    }

    center .panel {
        font-size: 2em;
        border-bottom: 1px solid grey;
    }

    center .panel .page {
        width: 1000px;
        height: 1000px;
    }

    center .panel li a {
        color: #FAFAFA;
    }

    center .panel li a:hover {
        color: #F49494;
        border-top: 5px solid #F49494;
    }

    footer {
        width: 100%;
        height: 79px;
        border-top: 1px solid #817E7E;
        background-color: #6B6B6B;
    }


    /* Other */

    .right {
        float: right;
    }


    .panel li {
        display: inline;
        margin-left: 20px;
        margin-right: 20px;
    }

    /* Select */

    ::selection {background: #C0C0C0; color: #fff;}
    ::-moz-selection {background:   #C0C0C0; color: #fff;}
    ::-webkit-selection {background:    #C0C0C0; color: #fff;}
    ::-ms-selection {background:    #C0C0C0; color: #fff;}

    @media screen and (max-width:1200px){
        center .panel{
            font-size:1.5em
        }
    }

    @media screen and (max-width:990px){

        header .head #Site{
            font-size:2em
        }

        header .head #about{
            font-size:1.5em
        }

        header .head span .LoginAndCreate{
            font-size:1em
        }

        center .panel{
            font-size:1.1em
        }
    }

</style>