<template>
    <div>
    	<div class="navMenu">

			<template v-for="navMenu in navMenus">
		        <!-- 最后一级菜单 -->
			      <el-menu-item v-if="!navMenu.childs&&navMenu.entity"
			                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" :route="navMenu.entity.value"
			                   >
			        <i :class="navMenu.entity.icon"></i>
			        <span slot="title">{{navMenu.entity.alias}}</span>
			      </el-menu-item>

			      <!-- 此菜单下还有子菜单 -->
			      <el-submenu v-if="navMenu.childs&&navMenu.entity"
			                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
				        <template slot="title">
				          <i :class="navMenu.entity.icon"></i>
				          <span> {{navMenu.entity.alias}}</span>
				        </template>
				        <!-- 递归 -->
				        <NavMenu class="navElMenu" :navMenus="navMenu.childs"></NavMenu>
			      </el-submenu>
		    </template>
    	</div>
    </div>
</template>
<style>
	.el-menu {
		width: 200px;
	}
	.navMenu {
		width: 200px;
	}
	.navElMenu {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
<script>
export default {
	name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {
        // isCollapse: true,
      };
    },
    methods: {
    }

}
</script>


