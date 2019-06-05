<template>
  <div id="mbti">

      <van-nav-bar :title="titleName">
      </van-nav-bar>
    <form id="form">
      <div class="content">
        <ul>
          <li v-for="item in questions">
            <div class="title">{{item.title}}</div>
            <div class="options">
              <ul>
                <li v-for="oItem in item.options">
                  <label class="sq-radio">
                    {{oItem}}
                    <input type="radio" :name="item.id"><i></i>
                  </label>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div style="width: 70%;margin-top: 50px;margin-left: auto;margin-right: auto;">
          <button class="sq-button" type="button" v-on:click="next">下一页</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "MBTI",
    data() {
      return {
        titleName: 'MBTI测试',
        questions:[]
      }
    },
    mounted(){
      this.getQuestions();
    },
    methods:{
      getQuestions: function(){
        setTimeout(()=> {
          this.questions = [
            {id:1, title:'1.你偏好_____________?',
              options:['A.事先知道约会的行程，要去哪里、有谁参加、你会在那里多久、该如何打扮', 'B.让约会自然地去发生，不做太多的事先的计划']
            },
            {id:2, title:'2.你喜欢_____________?',
              options:['A.有部署、有节奏的工作', 'B.有灵活性、较为松散的工作']
            },
            {id:3, title:'3.你乐于拥有广泛的人际圈?',
              options:['A.是的', 'B.如果可以选择的话，我更愿意一个人静静呆着']
            },
            {id:4, title:'4.你看肥皂剧的时候会很投入?',
              options:['A.是的', 'B.不会']
            },
            {id:5, title:'5.电话铃声突然响起或类似这样的突发性事件，你习惯最先做出回应?',
              options:['A.是的', 'B.不会']
            },
          ];
        }, 500);
      },
      next: function (event) {
        if(event){
          let text = event.target.textContent;
            this.$toast(text);

            if(text.search('提交测试') >= 0){
            console.log("push");
            this.$router.push({name: 'score'})
          }else{
            event.target.textContent = '提交测试';
          }
        }
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  /*li*/
  .content>ul li{
    font-size: 13px;
    position: relative;
  }
  .content>ul li .title{
    background-color: #dcdddd;
    padding: 10px 20px;
    position: relative;
    padding-left: 30px;
  }
  .content>ul li .title:before{
    content: "";
    display: block;
    width: 4px;
    height: 50%;
    background: #67b8bf;
    position: absolute;
    left: 20px;
    top:25%;
    border-radius: 8px;
  }
  .content>ul li .options{
    padding: 10px 20px;
  }
  .content>ul li .options li{
    margin: 5px 0;
  }
</style>
