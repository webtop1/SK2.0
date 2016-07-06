package com.flyfox.system.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.flyfox.util.cache.Cache;
import com.flyfox.util.cache.CacheManager;

/**
 * 用户信息缓存
 * 
 * @author flyfox 2014-2-11
 */
public class UserCache {

	private final static Logger log = Logger.getLogger(UserCache.class);
	private final static String cacheName = "UserCache";
	private static Cache cache;

	private UserCache() {
	}

	public static void init() {
		if (cache == null) {
			cache = CacheManager.get(cacheName);
		}
		log.info("####用户Cache初始化......");
		Map<Integer, SysUser> cacheMap = new HashMap<Integer, SysUser>();
		List<SysUser> userList = SysUser.dao.findByWhere(" order by userid ");
		for (SysUser user : userList) {
			cacheMap.put(user.getInt("userid"), user);
		}
		cache.add("map", cacheMap);
	}

	public static SysUser getUser(Integer pid) {
		return getUserMap().get(pid);
	}

	public static Map<Integer, SysUser> getUserMap() {
		return cache.get("map");
	}

}
