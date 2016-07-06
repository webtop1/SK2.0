package com.flyfox.modules.front;

import java.io.UnsupportedEncodingException;

import com.alibaba.fastjson.JSONObject;
import com.flyfox.component.util.JFlyFoxUtils;
import com.flyfox.jfinal.base.BaseController;
import com.flyfox.jfinal.component.annotation.ControllerBind;
import com.flyfox.jfinal.component.oauth.OauthBaidu;
import com.flyfox.jfinal.component.oauth.OauthQQ;
import com.flyfox.jfinal.component.oauth.OauthSina;
import com.flyfox.jfinal.component.oauth.util.TokenUtil;
import com.flyfox.modules.CommonController;
import com.flyfox.modules.article.TbArticle;
import com.flyfox.modules.front.interceptor.FrontInterceptor;
import com.flyfox.system.user.SysUser;
import com.flyfox.system.user.UserCache;
import com.flyfox.util.StrUtils;
import com.jfinal.aop.Before;

@ControllerBind(controllerKey = "/oauth2")
@Before(FrontInterceptor.class)
public class Oauth2Controller extends BaseController {

	private static final String path = "/pages/oauth2/";
	private static final int OAUTH_ID = 10;

	public void index() {
		TbArticle model = TbArticle.dao.findById(OAUTH_ID);
		setAttr("model", model);
		render(path + "index.html");
	}

	public void login() {
		String login_type = getPara("loin_type");
		String url = "";
		// 设置pre_page到session
		String prePage = getPara("pre_page");
		setSessionAttr("pre_page", prePage);

		try {
			if ("qq".equals(login_type)) {
				OauthQQ qq = OauthQQ.me();
				url = qq.getAuthorizeUrl(TokenUtil.randomState());
			} else if ("sina".equals(login_type)) {
				OauthSina sina = OauthSina.me();
				url = sina.getAuthorizeUrl(TokenUtil.randomState());
			} else if ("baidu".equals(login_type)) {
				OauthBaidu baidu = OauthBaidu.me();
				url = baidu.getAuthorizeUrl(TokenUtil.randomState());
			} else {
				redirect("admin");
				return;
			}
			redirect(url);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}

	/**
	 * openid是qq的唯一标识
	 * 
	 * 2015年2月25日 下午7:57:19 flyfox 330627517@qq.com
	 */
	public void qq_callback() {
		String code = getPara("code");
		OauthQQ baidu = OauthQQ.me();
		JSONObject json = null;
		try {
			json = baidu.getUserInfoByCode(code);
		} catch (Exception e) {
			e.printStackTrace();
		}

		toMainPage(json, "nickname", "openid");
	}

	/**
	 * uid是sina的唯一标示
	 * 
	 * 2015年2月25日 下午7:57:29 flyfox 330627517@qq.com
	 */
	public void sina_callback() {
		String code = getPara("code");
		OauthSina baidu = OauthSina.me();
		JSONObject json = null;
		try {
			json = baidu.getUserInfoByCode(code);
		} catch (Exception e) {
			e.printStackTrace();
		}

		toMainPage(json, "name", "uid");
	}

	/**
	 * userid是百度的唯一标识
	 * 
	 * 2015年2月25日 下午7:57:40 flyfox 330627517@qq.com
	 */
	public void baidu_callback() {
		String code = getPara("code");
		JSONObject json = null;
		OauthBaidu baidu = OauthBaidu.me();
		try {
			json = baidu.getUserInfoByCode(code);
		} catch (Exception e) {
			e.printStackTrace();
		}

		toMainPage(json, "username", "userid");

	}

	protected void toMainPage(JSONObject json, String username, String openid) {
		if (json == null) {
			setAttr("msg", "认证解析错误，请您重新输入。");
			render(CommonController.loginPage);
			return;
		}

		username = json.getString(username);
		openid = json.getString(openid);

		if (username == null || openid == null) {
			setAttr("msg", "认证信息获取失败，请您重新输入。");
			render(CommonController.loginPage);
			return;
		}

		SysUser user = SysUser.dao.findFirstByWhere(" where thirdid = ?", openid);
		if (user == null) {
			user = new SysUser();
			user.set("username", username);
			user.set("realname", username);
			user.set("password", JFlyFoxUtils.getDefaultPassword());
			user.set("usertype", 4); // 第三方用户
			user.set("departid", JFlyFoxUtils.DEPART_THIRD_ID);
			user.set("state", 1);
			user.set("thirdid", openid);
			user.put("create_time", getNow());
			user.put("create_id", 0);
			user.save();
			UserCache.init();
		} 

		setSessionUser(user);

		// 新加入，判断是否有上一个页面
		String prePage = getSessionAttr("pre_page");
		removeSessionAttr("pre_page");
		String toPage = StrUtils.isEmpty(prePage) ? CommonController.firstPage : prePage;

		redirect(toPage);
	}
}
