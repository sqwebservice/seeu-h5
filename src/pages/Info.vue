<template>
  <div id="su-info">
      <van-nav-bar
          :title="titleName"
          left-arrow
          @click-left="onClickLeft"
      />

    <div class="content">
      <ul>
          <van-cell  center is-link>
              <template slot="title">
                  <span class="custom-text">上传头像</span>

                  <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple style="float:right;">
                      <div class="photo">
                          <img :src="info.photo">
                      </div>
                  </van-uploader>
              </template>
          </van-cell>
          <van-cell title="姓名" is-link :value="info.username" size="large" @click="onClickName"/>
          <van-dialog
              v-model="showname"
              title="修改姓名"
              showCancelButton
              @confirm="onOkClickName"
          >
                  <van-field
                      v-model="username"
                      center
                      clearable
                      placeholder="请输入姓名"
                  >
                  </van-field>
          </van-dialog>
          <van-cell title="性别" is-link :value="info.sex"  @click="onClickSex"/>
          <van-dialog
              v-model="show"
              title="请选择性别"
              :show-confirm-button="false"
              close-on-click-overlay
          >
              <van-radio-group v-model="sex" style="margin: 0 auto;width: 100%;padding-bottom: 20px;"  @change="onChangeSex">
                  <van-radio name="男" class="sex-radio">男</van-radio>
                  <van-radio name="女" class="sex-radio">女</van-radio>
              </van-radio-group>
          </van-dialog>
          <van-cell title="出生日期" is-link :value="info.birthday" size="large" @click="show1 = true"/>
          <van-popup
              v-model="show1"
              position="bottom"
          >
              <van-datetime-picker
                  show-toolbar
                  title="请选择出生日期"
                  v-model="currentDate"
                  type="date"
                  :min-date="minDate"
                  :max-date="maxDate"
                  @cancel="onCancelDate"
                  @confirm="onConfirmDate"
              />
          </van-popup>

          <van-cell title="国籍" is-link :value="info.nationality" size="large"   @click="show2 = true"/>
          <van-popup
              v-model="show2"
              position="bottom"
          >
              <van-picker
                  show-toolbar
                  title="请选择国籍"
                  :columns="columns"
                  :default-index="defaultindex"
                  @cancel="onCancel"
                  @confirm="onConfirm"

              />
          </van-popup>
          <van-cell title="手机号" is-link :value="info.phone" size="large" @click="onClickPhone"/>
          <van-dialog
              v-model="showphone"
              title="修改手机号码"
              showCancelButton
              @confirm="onOkClickPhone"

          >
              <van-field
                  v-model="phone"
                  center
                  type="number"
                  clearable
                  placeholder="请输入手机号"
              >
                  <van-button slot="button" size="small" type="primary">发送验证码</van-button>
              </van-field>
          </van-dialog>
         <!-- <van-cell-group>
              <van-field
                  v-model="sms"
                  center
                  clearable
                  label="验证码"
                  placeholder="请输入短信验证码"
              >
                  <van-button slot="button" size="small" type="info" style="background-color: #419ca3;">点击获取</van-button>
              </van-field>
          </van-cell-group>-->
      </ul>
    </div>
    <!--<div style="width: 70%;margin-top: 40px;margin-left: auto;margin-right: auto;">
      <button class="sq-button">注册</button>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        titleName: '请完善以下资料',
          show: false,
          show1: false,
          show2: false,
          showname:false,
          showphone:false,
          sms:'',
          sex:'',
          username:'',
          phone:'',
          info:{
              photo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556688847163&di=91c7b00ff8df82b492da231edc05b0dd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F22%2F20120822162710_jHHkk.thumb.224_0.jpeg',
              username:'周周强',
              sex:'女',
              birthday:'',
              nationality:'乌克兰',
              phone:'111111'
          },
          columns: ['中国', '美国', '俄罗斯', '乌克兰', '韩国', '泰国'],
          defaultindex:0,
          currentDate: new Date(),
          minDate: new Date(1850, 1, 1),
          maxDate: new Date()
      }
    },
      mounted(){
          this.selection();
      },
      methods: {
          onClickLeft() {
              this.$router.push({name:'me'})
          },
          onRead(file, detail) {
              this.$toast(detail.name);
          },
          onConfirm(value, index) {
              this.info.nationality=value;
              this.show2 = false;
          },
          onCancel(){
              this.show2 = false;
          },
          selection(){
              var columns=this.columns;
              for(var i = 0;i<columns.length;i++){
                  if(columns[i]==this.info.nationality){
                      this.defaultindex=i;
                  }
              }
          },
          onConfirmDate(value, index) {
              this.info.birthday=value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
              this.show1 = false;
          },
          onCancelDate(){
              this.show1 = false;
          },
          onChangeSex(value){
              this.info.sex=value;
              this.show=false;
          },
          onClickSex(){
              this.show=true;
              this.sex = this.info.sex;

          },
          onClickName(){
              this.showname = true;
              this.username = this.info.username;

          },
          onOkClickName(){
              this.info.username=this.username;
              this.showname = false;

          },
          onClickPhone(){
              this.showphone = true;
              this.phone = this.info.phone;

          },
          onOkClickPhone(){
              this.info.phone=this.phone;
              this.showphone = false;

          }
      }
  }
</script>

<style scoped>
  #su-info{

  }

  .content{

  }
  .sq-cell-item{
    padding: inherit;
  }
  a{
    color: #333333;
  }
  .sq-cell-item-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 14px;
  }
   .photo{
    background-color: transparent;
    width: 50px;
    height: 50px;
  }
   .photo>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .custom-text {
      line-height: 50px;
  }
    .van-nav-bar__title {
        margin-left: 0px;
    }
  .sex-radio{
      line-height: 50px;
      text-align: center;
  }

</style>
