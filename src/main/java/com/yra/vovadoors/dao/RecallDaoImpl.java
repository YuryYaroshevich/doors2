package com.yra.vovadoors.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yra.vovadoors.model.Recall;

@Component
public class RecallDaoImpl implements RecallDao {
	private RecallJpaRepository recallRepo;
	
	@Autowired
	public RecallDaoImpl(RecallJpaRepository recallRepo) {
		this.recallRepo = recallRepo;
	}

	@Override
	public Recall save(Recall recall) {
		return recallRepo.save(recall);
	}

	@Override
	public List<Recall> getAll() {
		return recallRepo.findAll();
	}

}
