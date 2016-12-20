var Header = require('../../common/header/header');
var Footer = require('../../common/footer/footer');

var FormOut = require('../../components/form/form');
var Button = require('../../components/button/button');
var FormItem = FormOut.FormItem;
var FormInput = FormOut.FormInput;
var FormButton = FormOut.FormButton;

var Icon = require('../../components/icon/icon');
var Steps = require('../../components/steps/steps');
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
					<Steps current="1">
			            <Steps.Step title="填写注册信息" icon={<Icon type="iocn1"/>}/>
			            <Steps.Step title="注册完成" icon={<Icon type="iocn2"/>}/>
			        </Steps>
				  </div>
				    <div className="reg-success">
				        <div className="success-msg">
				            <span className="bg-icon"></span>
				            <span>恭喜，您已成为信富e投互联网金融服务平台的企业会员！</span>
				            <p>您的企业ID是：201604070001</p>
				        </div>
				        <div className="link-btn">
				        	<div className="primary-btn-wrap">
					        	<Button type="primary">马上去赚钱</Button>
					        </div>
				        	<div className="default-btn-wrap">
					        	<Button type="default">马上去融资</Button>
					        </div>
				        </div>
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