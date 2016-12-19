var Header = require('../../common/header/header');
var Footer = require('../../common/footer/footer');

var Icon = require('../../components/icon/icon');
var Steps = require('../../components/steps/steps');
var Tabs = require('../../components/tabs/tabs');
const TabItem = Tabs.TabItem;
var FormOut = require('../../components/form/form');
var FormItem = FormOut.FormItem;
var FormInput = FormOut.FormInput;
var FormButton = FormOut.FormButton;

var Body = React.createClass({
	_resizeHandler:function(){
		var height = window.screen.height - 331;
        console.log(height);
    		this.refs['main-login'].style.height=height+'px';
	},
	componentDidMount:function(){
		window.addEventListener('resize',this._resizeHandler);
	},
	componentWillUnmount:function() {
		window.removeEventListener('resize', this._resizeHandler);
	},
	render:function(){
		return(
				<div className="main-reg wrap">
				  <div className="steps-wrap">
					<Steps current="0">
			            <Steps.Step title="填写注册信息" icon={<Icon type="iocn1"/>}/>
			            <Steps.Step title="注册完成" icon={<Icon type="iocn2"/>}/>
			        </Steps>
				  </div>
				  <div className="cell-form">
				      <div className="login-tips">我已经注册，现在就 <a href="登录.html">登录</a></div>
					  <Tabs defaultActiveKey="1">
					    <TabItem tab="企业注册">
					    	<div className="form-box">
					      <div className="f-left reg-from">
					      	<form onSubmit={this.handleSubmit}>

					        	<div className="ui-input">
									<FormItem label="企业名称" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="企业组织机构代码" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="经办人姓名" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="经办人身份证" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="经办人手机号码" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input pic-verification-code">
									<FormItem label="图片验证码" tip="格式错误">
										<FormInput/>
										<img src="../images/code.jpg"/>
									</FormItem>
								</div>
					        	<div className="ui-input message-verification-code">
									<FormItem label="短信验证码" tip="格式错误">
										<FormInput/>
										<a href="javascript:void(0)" className="btn-code cell-btn-auto">获取验证码</a>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="请设置密码" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
					        	<div className="ui-input">
									<FormItem label="请确认密码" tip="格式错误">
										<FormInput/>
									</FormItem>
								</div>
								<div className="ui-check">
									<p>
									<input type="checkbox" checked className="check-box"/>
									我已阅读并同意<a href="" className="link">《xxx平台会员服务协议（企业版）》</a> 
									</p>
									<FormButton/>
						         </div>
							</form>
					      </div>
					      <div className="f-right reg-txt">
					        <div className="list"><span className="bg-icon"><img src="../images/lightspot-01.png" /></span><strong>投资高效</strong>多样化投资项目 在线随时购买</div>
					        <div className="list"><span className="bg-icon"><img src="../images/lightspot-02.png" /></span><strong>交易见证</strong>中信银行见证交易达成</div>
					        <div className="list"><span className="bg-icon"><img src="../images/lightspot-03.png" /></span><strong>投资便捷</strong>支持多家银行账户 零手续费投资</div>
					        <div className="list"><span className="bg-icon"><img src="../images/lightspot-04.png" /></span><strong>金融服务专家</strong>打造互联网+金融新生态</div>
					      </div>
					      <div className="clear"></div>
					    </div>
					    </TabItem>
					    <TabItem tab="个人注册">
					    	<div className="form-box">个人注册</div>
					    </TabItem>
					  </Tabs>
				  </div>
				</div>
		);
	}
});

const Root = React.createClass({
	componentDidMount:function(){
		window.addEventListener('scroll', this._handleScroll);
	},
	componentWillUnmount:function() {
		window.removeEventListener('scroll', this._handleScroll);
	},
	_handleScroll:function(e) {	
		this.refs['header'].addClass('fixed');
//		this.refs['header'].removeClass('fixed');
	},
	render:function(){
		return(
			<div>
				<Header ref='header'/>
				<Body/>
				<Footer/>
			</div>
		)
	}
});
ReactDOM.render(<Root/>,document.getElementById('main'));