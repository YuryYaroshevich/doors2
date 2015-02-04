package com.yra.vovadoors.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yra.vovadoors.dao.RecallDao;
import com.yra.vovadoors.model.Recall;

@Service
public class RecallServiceImpl implements RecallService {
	private RecallDao dao;
	
	@Autowired
	public RecallServiceImpl(RecallDao dao) {
		this.dao = dao;
	}

	@Override
	public List<Recall> getAll() {
		return dao.getAll();
	}

	@Override
	public Recall save(Recall recall) {
		return dao.save(recall);
	}

}
