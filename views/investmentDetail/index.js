var Header = require('../../common/header/header');
var Footer = require('../../common/footer/footer');

var Breadcrumb = require('../../components/breadcrumb/breadcrumb');
var totalProgress = require('../../components/progress/progress');
var InputNumber = require('../../components/inputNumber/inputNumber');
var Button = require('../../components/button/button');
var Table = require('../../components/table/table');
var Tooltip = require('../../components/tooltip/tooltip');
var Input = require('../../components/input/input');
var Progress = totalProgress.Progress;

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
				<div className="zx">
					<div className="locationnav">
						<div className="wrap">
							<Breadcrumb	separator='>' >
								<Breadcrumb.Item href="index.html">首页</Breadcrumb.Item>
								<Breadcrumb.Item href="投资列表.html">我要投资</Breadcrumb.Item>
								<Breadcrumb.Item href="baidu.com">投资详情</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
					<div className="wrap">
					  <div className="project-details-box">
					  	<div className="project-details">
					    	<div className="ui-title">
					      	<h3>惠益计划7号121期</h3>
					        <div className="ui-share"><ul><li>分享到：</li><script type="text/javascript">ShareButtons()</script></ul></div> 
					      </div>
					      <div className="ui-content">
					      	<div className="detail-table">
					        	<table>
					          	<tr>
					            	<td width="165"><p>预期年化收益率</p><b className="fcorange"><em>9</em>.00%</b></td>
					              <td width="180"><p>项目规模</p><b className="fcgray">150</b><span className="fclgrey"> 万</span></td>
					              <td width="190"><p>投资周期</p><b className="fcgray">120</b><span className="fclgrey"> 天</span></td>
					            </tr>
					          </table>
					        </div>
					        <div className="detail-time">
					        	<ul>
					          	<li>项目起息日：<span className="fcblack">2015-08-08</span></li>
					            <li>项目到期日：<span className="fcblack">2015-11-07</span></li>
					            <li>还款方式：<span className="fcblue">到期一次性还本息</span>
					        		<Tooltip title='项目的本金与利息，将在项目到期后的1个工作日内，向出资人清算。' position='top'>
					        			<i className="icon-wenhao layertips" alt=""></i>
					        		</Tooltip>
					        	</li>
								<li style={{width: '100%'}}>投资进度：
									<div style={{width:'350px',display:'inline-block'}}>
        								<Progress type = "line" percent = {84} showInfo = {true}></Progress>
        							</div>
        						</li>
					          </ul>
					        </div>
					        <div className="detail-other">
					        	<ul>
					          	<li><span>见证机构：</span><img src="../images/logo2.png" /></li>
					            <li><a href="javascript:;" className="fcblack openbook" data-action="project-book"><i className="icon-book"></i>项目说明书</a></li>
					          </ul>
					        </div>
					      </div>
					    </div>
					    <div className="project-buy">
					    	<div className="cell-bor"></div>
					    	<ul>
					      	<li><span className="title">投资单位：</span><b className="fcorange">1,000</b> <span className="fcgray">元/份</span></li>
					        <li><span className="title">剩余份数：</span><b className="fcorange">1,000</b> <span className="fcgray"> 份</span>
					        	<span className="tips layertips">
					        		<Tooltip title='项目剩余份数不多，请尽快完成支付，以免错失投标机会' position='top'>
										 <div style={{display:'inline-block'}}><i className="icon-tips-info"></i>剩余份数不多</div>
									</Tooltip>
					        	</span>
					        </li>
					        <li>&nbsp;</li>
					        <li><span className="title">预期收益：</span><b className="fcorange">16.00</b> <span className="fcgray"> 元</span></li>
					        <li><span className="title">投资份数：</span>
					        	<div className="adder-subtractor">
							        <InputNumber setp="1" max="1000000" min="1" value="1">
							        </InputNumber>
							    </div>
					        </li>
					        <li>
					        	<Button type="primary">立即投标</Button>
					        	<a href="份额确认-01.html" className="cell-btn-blue">立即投标</a>
					        </li>
					        </ul>
					      <div className="cell-time"><i className="angle"></i>距投标截止：<span className="fcred">04</span>天 <span className="fcred">03</span>小时 <span className="fcred">14</span>分 <span className="fcred">09</span>秒</div>
					    </div>
					  </div>  
					</div>
				  <div className="project-instruct-box">
				  	<div className="instruct-menu">
				    	<ul className="wrap">
				        <li><a href="javascript:;" className="current">信息披露</a></li>
				        <li><a href="javascript:;">产品评级</a></li>
				        <li><a href="javascript:;">成交记录</a></li>
				      </ul>
				    </div>
				    
				    <div className="instruct-content wrap">
				    	<div className="box">
				      	<div className="ui-title"><i></i>信息披露</div>
				        <div className="ui-content" style={{minHeight:"auto"}}>
				        	<dl>
				          	<dt>融资方信息</dt>
				            <dd>融资人为“IT”行业的“外包企业”，主要经营“云服务和软件开发”等，拥有较为稳定的“客户来源”。</dd>
				            <dt>融资用途</dt>
				            <dd>本次所融资金企业将用于“扩大经营规模”。</dd>
				          </dl>
				        </div>
				      </div>
				    <div className="box">
				     <div className="ui-title"><i></i>产品评级</div>
				     <div className="ui-content grade">
				       <ul>
				        <li className="current">谨慎型</li>
				        <li>稳健型</li>
				         <li>平衡型</li>
				          <li>进取型</li>
				       </ul>
				       <div className="clear"></div>
				     </div>
				    </div>  
				      <div className="box">
				      	<div className="ui-title"><i></i>成交记录</div>
				        <div className="ui-content">
				        	<Table ref="table"
			                  bordered={false}
			                  onSelect={false}
			                  striped={true}
			                  hover={false}
			                  onSort={false}
			                  width="100%"
			                  height="auto"
			                  className=""
			                  data={
			                  	[
				                    {
				                        "id":"1",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
				                    {
				                        "id":"2",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
									{
				                        "id":"3",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
				                    {
				                        "id":"4",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
				                    {
				                        "id":"5",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
									{
				                        "id":"6",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
				                    {
				                        "id":"7",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
				                    {
				                        "id":"8",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    },
									{
				                        "id":"9",
				                        "touzifang": "136****1234",
				                        "touzijine": "1,200,000",
				                        "touzishijian": "2015-08-08  15:12"
				                    }
				                ]
			                	}
			                  columns={[
			                    {
			                      name: 'touzifang', header: '投资方', width: 260
			                    },
			                    { 
			                      name: 'touzijine', header: '投资金额', width: 375
			                    },
			                    { 
			                      name: 'touzishijian', header: '投资时间'
			                    }
			                  ]} />
				          <div className="mod-page"><span>共16页</span> <a href="#">首页</a> <a href="#">&lt;</a> <a className="current" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a> <a href="#">…</a> <a href="#">&gt;</a> <a href="#">尾页</a> </div> 
				        </div>
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