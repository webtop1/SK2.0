package com.flyfox.system.menu;

import com.flyfox.jfinal.base.BaseController;
import com.flyfox.jfinal.component.db.SQLUtils;
import com.jfinal.plugin.activerecord.Page;

/**
 * 菜单
 * 
 * @author flyfox 2014-4-24
 */
public class MenuController extends BaseController {

	private static final String path = "/pages/system/menu/menu_";
	MenuSvc svc = new MenuSvc();

	public void list() {
		SysMenu model = getModelByAttr(SysMenu.class);

		SQLUtils sql = new SQLUtils(" from sys_menu t left join sys_menu d on d.id = t.parentid where 1=1 ");
		if (model.getAttrValues().length != 0) {
			sql.setAlias("t");
			// 查询条件
			sql.whereLike("name", model.getStr("name"));
		}

		Page<SysMenu> page = SysMenu.dao.paginate(getPaginator(), "select t.*,ifnull(d.name,'根目录') as parentname ", //
				sql.toString().toString());

		// 下拉框
		setAttr("parentSelect", svc.selectMenu(model.getInt("parentid")));
		setAttr("page", page);
		setAttr("attr", model);
		render(path + "list.html");
	}

	public void add() {
		setAttr("parentSelect", svc.selectMenu(0));
		render(path + "add.html");
	}

	public void view() {
		SysMenu model = SysMenu.dao.findById(getParaToInt());
		String parent = new MenuSvc().getParentName(model);
		model.put("parentname", parent);
		setAttr("model", model);
		render(path + "view.html");
	}

	public void delete() {
		SysMenu.dao.deleteById(getParaToInt());
		list();
	}

	public void edit() {
		SysMenu model = SysMenu.dao.findById(getParaToInt());
		setAttr("parentSelect", svc.selectMenu(model.getInt("parentid")));
		setAttr("model", model);
		render(path + "edit.html");
	}

	public void save() {
		Integer pid = getParaToInt();
		SysMenu model = getModel(SysMenu.class);

		// 根目录级别为1
		Integer parentid = model.getInt("parentid");
		if (parentid != null) {
			model.set("level", parentid == 0 ? 1 : 2);
		}

		if (pid != null && pid > 0) { // 更新
			model.update();
		} else { // 新增
			model.remove("id");
			model.put("create_id", getSessionUser().getUserID());
			model.put("create_time", getNow());
			model.save();
		}
		renderMessage("保存成功");
	}
	
	
}
