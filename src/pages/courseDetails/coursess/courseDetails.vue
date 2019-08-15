<template>
  <section id="course_details">
        <div class="className">
            <h1>Android-基础学习实例</h1>
        </div>
        <div class="price">
            <span class="vipPrice">会员：¥99.99</span>
            <span class="usualPrice">原价：¥345.00</span>
            <!-- <span class="noPrice">免费</span> -->
        </div>
        <div class="classLabel">
            <h1>课程标签</h1>
            <span>零基础</span>
            <span>交互设计</span>
            <span>移动产品设计</span>
        </div>
        <div class="teachIntrod">
            <h1>老师介绍</h1>
            <div class="teacher clearfix">
                <div class="headPicturl"><img src="../../../../static/img/zyl.png" alt=""></div>
                <div class="teachBrief ">
                    <span class="teachName">朱一龙</span><br>
                    <span class="synopsis">国科大老规矩睡个懒觉反对浪费空间的概念房管局</span>
                </div>
            </div>
        </div>
        <div class="courseDetails">
            <h1>课程详情</h1>
            <p>此学堂是一款专业学习IT开发知识技能
                的平台，由国内资深IT技术专家成立于
                北京...</p>
        </div>
    </section>
</template>

<script>
export default {

}

</script>
<style>
 section {
            width: 100%;
            /* position: absolute;
            top: 6.763285rem;
            bottom:1.690821rem; */
            /* overflow: auto;
            padding: 0rem .362319rem; */
        }
        section .className h1 {
            font: bold .676329rem '宋体';
            color: #504a54;
        }

        section .price {
            width: 100%;
            height: 40px;
            padding: .169082rem 0;
        }

        section .price .usualPrice {
            display: inline-block;
            width: 3.381643rem;
            font-size: .434783rem;
            font-family: '微软雅黑';
        }

        section .price .vipPrice ,.noPrice{
            display: inline-block;
            width: 3.381643rem;
            font-size: .483092rem;
            font-family: '微软雅黑';
            color: red;
            text-align: center;
        }

        section .classLabel h1 {
            font: bold .603865rem '微软雅黑';
            color: #504a54;
            padding: .241546rem 0;
        }

        section .classLabel {
            padding-bottom: .241546rem;
            border-bottom: 1px #d2d2d2 solid;
        }

        section .classLabel span {
            font: .434783rem '微软雅黑';
            color: #5bb282;
        }

        section .teachIntrod h1 {
            font: bold .603865rem '微软雅黑';
            color: #504a54;
            padding: .241546rem 0;

        }
        section .teachIntrod .teacher .headPicturl{
            float:left;
            margin-right: .362319rem;
        }

        section .teachIntrod .teacher img {
            width: 2.415459rem;
            height: 2.415459rem;
            border-radius: 100%;
        }

        section .teachIntrod .teacher .teachBrief {
            width: 7.246377rem;
            height: .966184rem;
        }
        section .teachIntrod .teacher .teachBrief .teachName{
            font: bold .483092rem '微软雅黑';
        }
        section .teachIntrod .teacher .teachBrief .synopsis{
            font: .434783rem '微软雅黑';
        }
        section .courseDetails h1{
            width: 100%;
            font: bold .603865rem '微软雅黑';
            color: #504a54;
            padding: .120773rem 0;
            border-top: 1px #d2d2d2 solid;
        }
        section .courseDetails p{
            width: 100%;
            text-indent: 2em;
            font: .434783rem '微软雅黑';
        }
</style>