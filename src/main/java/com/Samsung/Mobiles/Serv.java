package com.Samsung.Mobiles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Serv {
	@Autowired
	Repo r;
	public List<Model> getAllMobiles(){
		return r.findAll();
	}
public Model getMobileById(int id) {
	return r.findById(id).orElse(null);
}
}
