import { mapState, mapMutations } from 'vuex'
const Mixins = {
    install(Vue){
        Vue.mixin({
            data: () => ({
                url: process.env.VUE_APP_URL
            }),
            computed: {
                ...mapState([
                    'userInfo', 
                    'leaderInfo',
                ])
            },
            created() {
                this.$notification.config({
                    placement: "bottomRight",
                    duration: 3,
                });
            },
            methods: {
                ...mapMutations([
                    'CHANGE_USER_INFO',
                    'CHANGE_LEADER_INFO',
                ])
            },
        })
    }
}
 
export default Mixins