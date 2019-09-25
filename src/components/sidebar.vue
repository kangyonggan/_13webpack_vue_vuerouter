<template>
    <div class="sidebar">
        <ul>
            <li v-for="menu in menus">
                {{menu.name}}
                <ul v-if="menu.children && menu.children.length">
                    <li v-for="m in menu.children">
                        <router-link :to="m.url">{{m.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menus: [{
                    name: '系统',
                    children: [{
                        name: '用户管理',
                        url: 'user'
                    }, {
                        name: '角色管理',
                        url: 'role'
                    }, {
                        name: '菜单管理',
                        url: 'menu'
                    }, {
                        name: '字典管理',
                        url: 'dict'
                    }]
                }, {
                    name: '网站',
                    children: [{
                        name: '文章管理',
                        url: 'article'
                    }]
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        width: 18%;
        float: left;
        border-right: 1px solid #d5d5d5;
        min-height: 90%;
    }
</style>