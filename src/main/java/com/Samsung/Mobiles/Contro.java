package com.Samsung.Mobiles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Contro {
	 @Autowired
	    Serv service;

	    @GetMapping("/samsung")
	    public List<Model> getAllMobiles(){

	        return service.getAllMobiles();

	    }
	    @GetMapping("/samsung/{id}")
	    public Model getMobileById(@PathVariable int id) {
	        return service.getMobileById(id);
	    }

	
}
