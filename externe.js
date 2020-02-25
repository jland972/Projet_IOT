var weather = new Vue({
        el: '#weather',

        data: {
            dataExterne: []
           
        },

        mounted: function () {
            this.getDataExterne();
            
        },        

        methods: {
            getDataExterne: function () {
                this.$http.get('https://api.openweathermap.org/data/2.5/weather?lon=3.066667&lat=50.633333&APPID=52faa11a930c72cf181a31f9aabf8c00&units=metric&lang=fr')
                          .then(response => {
                             this.dataExterne = response.data
                          })
            }

            
        }

    })
    ;

    var weather = new Vue({
        el: '#interne',

        data: {
            dataInterne: []
        },

        mounted: function () {
            this.getDataInterne();
        },        

        methods: {

            getDataInterne: function () {
                this.$http.get('http://35341161.eu.ngrok.io/')
                          .then(response => {
                             this.dataInterne = response.data
                          })
            }
        }

    })
    ;