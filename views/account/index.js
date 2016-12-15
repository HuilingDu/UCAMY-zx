/**
 * Created by DuHuiling on 2016/12/14.
 */
var Header = require('../../common/header/header');
var Footer = require('../../common/footer/footer');
var Icon = require('../../components/icon/icon');
var Badge = require('../../components/badge/badge');
var Tooltip = require('../../components/tooltip/tooltip');
var Tabs = require('../../components/tabs/tabs');
const TabItem = Tabs.TabItem;
var Tab4 = require('./tab4');
var Tab5 = require('./tab5');
var Tab6 = require('./tab6');

var badge = {
    count:"3",
    overCount:"10"
    //bgColor:"#87d068",
    //showBtn:true
}

var Body = React.createClass({
    render: function(){
        return (
            <div className="content">
                <div className="account-header-box">
                <div className="account-header">
                    <div className="icon account-header-user f-left"></div>
                    <div className="account-header-name f-left">
                        <h1><span className="f-left">早上好 ,  想象力有限公司</span>
                            <div className="account-header-name-tips f-left">
                                <i className="icon-remind"></i>
                                <div>
                                    <Badge {...badge}/>
                                </div>
                                <div className="account-header-name-tips-text"><i className="icon"></i>未读消息：<span className="fcred">3</span>个<a href="javascript:void(0)">查看</a></div>
                            </div>
                        </h1>
                        <div className="clear"></div>
                        <h3>一天之际在于晨 , 带着好心情开始工作吧!</h3>
                        <p>今天是2015年8月28日  星期五，上次登录：2015年8月26日  20:48</p>
                        <div className="account-header-icon">
                            <i className="icon-mobile jieshi" style={{fontSize:"20px"}}  alt="已绑定手机"></i>
                            <i className="icon-user-info jieshi fclgrey"  alt="尚未进行企业认证"></i>
                            <i className="icon-bank-card jieshi"  alt="尚未绑定企业对公账户"></i>
                            <i className="icon-user-info jieshi fclgrey"  alt="已完成企业认证"></i>
                            <i className="icon-mail jieshi fclgrey"  alt="已绑定邮箱"></i>
                            <i className="icon-bank-card jieshi fclgrey"  alt="已绑定企业对公账户"></i>
                        </div>
                    </div>
                </div>
            </div>

                <div className="wrap account-wrap">
                    <div className="icon account-wrap-arrowtop"></div>
                    <Tabs defaultActiveKey="1">
                        <TabItem tab={<span><Icon type = 'account-overview'/> 账户总览</span>}>111</TabItem>
                        <TabItem tab={<span><Icon type = 'investment-record'/> 投资记录</span>}>222</TabItem>
                        <TabItem tab={<span><Icon type = 'financing-record'/> 融资记录</span>}>33333</TabItem>
                        <TabItem tab={<span><Icon type = 'account-corporation'/> 企业对公账户</span>}><Tab4/></TabItem>
                        <TabItem tab={<span><Icon type = 'setting'/> 账户设置</span>}><Tab5/></TabItem>
                        <TabItem tab={<span><Icon type = 'message'/> 系统消息</span>}><Tab6/></TabItem>
                    </Tabs>
                </div>
            </div>
        )
    }
});

const Root = (
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
);

ReactDOM.render(Root,document.getElementById('main'));