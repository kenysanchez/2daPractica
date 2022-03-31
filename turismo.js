//CONDICIONAL V-IF 
var informacion = new Vue({ 
    el: '#informacion',
    data: {
        nombre: 'Kenia Gabriela Sanchez Duran',
        matricula: 'A01244940',
        show: false,
    }
});

//LOOP V-FOR
var Done = new Vue({ 
    el: '#Done',
    data: {
        bucl:[
            { message:"Huatulco, Oaxaca", image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/09/Huatulco-scaled.jpg" },
            { message:"Cancún, Quintana Roo", image: "https://centrourbano.com/revista/wp-content/uploads/Canc%C3%BAn-celebra-su-50-aniversario-en-medio-de-la-contingencia-1280x720.jpg"},
            { message:'Medellín, Colombia', image: "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2021/01/GI-529527806-Medellin-1920x1080.png" },
            { message:"Los Angeles, EUA", image: "https://www.viajarlosangeles.com/img/guia-viajar-los-angeles.jpg" },
            { message:'Alburquerque, EUA', image: "https://manualusa.com/wp-content/uploads/2020/09/vivir-en-Albuquerque-New-Mexico.jpg" },
        ]
    }
});

//LOOP V-FOR
//USER INPUT V-ON CLICK
var Destino = new Vue({ 
    el: '#Destino',
    data: {
        mensaje:''
    },
    methods: {
        Alerta: function (mensaje) {
          alert('Quiero viajar a ' + mensaje)
        }
    }
});


