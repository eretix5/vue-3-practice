<template>
    <header>
        <div class="head">
            <a id="Site" href="/projects">Проекты</a>
            <a id="about" href="/updateData">Данные</a>
        </div>
    </header>
    <center>
    <div id="app">
        <div class="container">
            <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                <h1 style="margin-top: 150px">Upload</h1>
                <div class="dropbox">
                    <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                           accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" class="input-file">
                    <p v-if="isInitial">
                        Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <p v-if="isSaving">
                        Uploading {{ fileCount }} files...
                    </p>
                </div>
            </form>
            <!--SUCCESS-->
            <div v-if="isSuccess">
                <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
                <p>
                    <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
               <form
                       name="excel"
                       action="http://ab-w.net/info.php"
                       method="get" class="list-unstyled"
                       v-for="item in uploadedFiles"
                       :key="item.id"
               >
                   <input type="checkbox" name="file" value="item.originalName"/>{{item.originalName}} <br/>


                </form>
                <my-button style="margin-top: 50px;" Onclick="window.location.href='https://i.pinimg.com/originals/09/f0/4d/09f04d9662bc928a368a94f507ea1830.jpg'">Типа парсер</my-button>
            </div>
            <!--FAILED-->
            <div v-if="isFailed">
                <h2>Uploaded failed.</h2>
                <p>
                    <a href="javascript:void(0)" @click="reset()">Try again</a>
                </p>
                <pre>{{ uploadError }}</pre>
            </div>
        </div>
    </div>
    <div class="up">
        <my-button style="margin-top: 50px" Onclick="window.location.href='https://i.pinimg.com/originals/09/f0/4d/09f04d9662bc928a368a94f507ea1830.jpg'">Обновить данные</my-button>
    </div>
    </center>
    <footer></footer>
</template>


<script type="text/javascript">
    import MyButton from "@/components/UI/MyButton";
    // swap as you need
    import { upload } from '@/file-upload.fake.service'; // fake service
    // import { upload } from './file-upload.service';   // real service
    import { wait } from '@/utils';
    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
    export default {
        components: {MyButton},
        name: "createS",
        data() {
            return {
                uploadedFiles: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'tables'
            }
        },
        computed: {
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            },
            isFailed() {
                return this.currentStatus === STATUS_FAILED;
            }
        },
        methods: {
            reset() {
                // reset form to initial state
                this.currentStatus = STATUS_INITIAL;
                this.uploadedFiles = [];
                this.uploadError = null;
            },
            save(formData) {
                // upload data to the server
                this.currentStatus = STATUS_SAVING;
                upload(formData)
                    .then(wait(1500)) // DEV ONLY: wait for 1.5s
                    .then(x => {
                        this.uploadedFiles = [].concat(x);
                        this.currentStatus = STATUS_SUCCESS;
                    })
                    .catch(err => {
                        this.uploadError = err.response;
                        this.currentStatus = STATUS_FAILED;
                    });
            },
            filesChange(fieldName, fileList) {
                // handle file changes
                const formData = new FormData();
                if (!fileList.length) return;
                // append the files to FormData
                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });
                // save it
                this.save(formData);
            }
        },
        mounted() {
            this.reset();
        },
        }

</script>

<style scoped>
    center {
        width: 100%;
        min-height: 800px;
        background-color: #616161;
        padding-top: 4px;
    }
    header {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #817E7E;
        background-color: #575757;
    }
    header .head {
        width: 100%;
        height: 100px;

    }

    header .head #Site {
        padding-left: 15px;
        margin-right: 30px;
        font-size: 3em;
        color: #C9C9C9;
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
    @media screen and (max-width:990px) {

        header .head #Site {
            font-size: 2em
        }

        header .head #about {
            font-size: 1.5em
        }
    }

    .dropbox {
        outline: 2px dashed grey; /* the dash box */
        outline-offset: -10px;
        background: #616161;
        color: whitesmoke;
        padding: 10px 10px;
        min-height: 200px; /* minimum height */
        position: relative;
        cursor: pointer;
        #bottom: 50px;
    }

    .input-file {
        display: flex;
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
        justify-content: center;
    }

    .dropbox:hover {
        background: #575757; /* when mouse over to the drop zone, change color */
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 0;
    }
    footer {
        width: 100%;

        height: 79px;
        border-top: 1px solid #817E7E;
        background-color: #6B6B6B;
    }
</style>