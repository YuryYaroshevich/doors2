package com.yra.vovadoors.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class IndexCtor {
	@RequestMapping(method = RequestMethod.GET)
	public String index() {
		return "index";
	}
}
