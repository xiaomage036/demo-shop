<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="@/assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 菜单 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <!-- 折叠与展开按钮 -->
          <div class="toggle-button" @click="toggleCollapse">{{ collapseStr }}</div>
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.path + ''" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState(subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenuListAPI } from '@/api/menusAPI.js'

export default {
  name: 'Home',

  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      // 菜单图标对象
      iconsObj: {
        100: 'iconfont icon-user',
        102: 'iconfont icon-tijikongjian',
        105: 'iconfont icon-shangpin',
        109: 'iconfont icon-danju',
        111: 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
      collapseStr: '折叠',
      // 二级菜单的激活状态
      activePath: ''
    }
  },

  created() {
    this.getMenuList()
    this.activePath = sessionStorage.getItem('activePath')
  },

  methods: {
    // 点击退出按钮
    loginout() {
      sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取菜单列表
    async getMenuList() {
      const { data: res } = await getMenuListAPI()
      if (res.meta.status !== 200) return this.$message.error('获取菜单列表数据失败')
      this.menuList = res.data
    },
    // 点击折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.collapseStr = '展开'
      } else {
        this.collapseStr = '折叠'
      }
    },
    // 点击二级菜单，保存激活状态
    saveNavState(activePath) {
      sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: 0;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 8px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
