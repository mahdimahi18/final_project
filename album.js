// album logic starts here
let vm1 = Vue.createApp({
    data() {
        return {
            img_src: ""
        }
    },
    methods:{
        expand_image(incoming_img_src){
            
            this.img_src = incoming_img_src;
            
        }
    }
}).mount('#app1');

// album logic starts here