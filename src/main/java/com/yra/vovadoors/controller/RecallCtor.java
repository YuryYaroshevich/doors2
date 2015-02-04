package com.yra.vovadoors.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yra.vovadoors.model.Recall;
import com.yra.vovadoors.service.RecallService;

@Controller
@RequestMapping("/recall")
public class RecallCtor {
	private RecallService recallService;
	
	@Autowired
	public RecallCtor(RecallService recallService) {
		this.recallService = recallService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Recall> getAll() {
		return recallService.getAll();
	}
	
	@RequestMapping(method = RequestMethod.POST) 
	@ResponseBody
	public ResponseEntity<?> save(@RequestBody Recall recall) {
		if (recall.getText() == null || recall.getText().isEmpty()) {
			return new ResponseEntity<Message>(
					new Message(false, "Пожалуйста, введите текст отзыва."), HttpStatus.BAD_REQUEST);
		}
		recall = recallService.save(recall);
		return new ResponseEntity<Recall>(recall, HttpStatus.CREATED);
	}
}
